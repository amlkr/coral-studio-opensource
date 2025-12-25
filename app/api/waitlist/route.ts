import { NextResponse } from 'next/server'

// In production, connect to Supabase
export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email' },
        { status: 400 }
      )
    }

    // TODO: Save to Supabase
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert([{ email, created_at: new Date().toISOString() }])

    console.log('Waitlist signup:', email)

    return NextResponse.json({ 
      success: true,
      message: 'Email registered successfully'
    })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Failed to register email' },
      { status: 500 }
    )
  }
}
