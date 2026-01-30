import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Supabase client lazily or with a check to prevent build-time errors
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  if (!supabase) {
    console.error('Missing Supabase configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const { username } = params;

  try {
    // Fetch user data from leaderboard
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .eq('username', username)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Format time
    const totalSeconds = Math.floor(data.bestTimeMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(data.bestTimeMs % 1000);
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

    return NextResponse.json({
      username: data.username,
      timeMs: data.bestTimeMs,
      formattedTime,
      completions: data.completions,
      lastUpdated: data.lastUpdated,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
