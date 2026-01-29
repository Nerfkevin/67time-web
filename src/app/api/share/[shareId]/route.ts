import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Supabase client lazily or with a check to prevent build-time errors
// if environment variables are missing during static analysis
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Use a getter or simple check. Since we need it for the request, we can init outside
// but we must handle the case where variables are undefined.
const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey) 
  : null;

export async function GET(
  request: NextRequest,
  { params }: { params: { shareId: string } }
) {
  // Check configuration at runtime
  if (!supabase) {
    console.error('Missing Supabase configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  const { shareId } = params;

  try {
    // Fetch share data
    const { data, error } = await supabase
      .from('shared_results')
      .select('*')
      .eq('share_id', shareId)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: 'Share not found' },
        { status: 404 }
      );
    }

    // Format time
    const totalSeconds = Math.floor(data.time_ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor(data.time_ms % 1000);
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;

    return NextResponse.json({
      shareId: data.share_id,
      username: data.username,
      timeMs: data.time_ms,
      formattedTime,
      reps: data.reps,
      isNewBest: data.is_new_best,
      createdAt: data.created_at,
    });
  } catch (error) {
    console.error('Error fetching share data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
