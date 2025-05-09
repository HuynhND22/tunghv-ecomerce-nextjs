import { NextRequest, NextResponse } from 'next/server';

// GET /api/users
export async function GET(req: NextRequest) {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name } = body;

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  // Xử lý thêm user
  const newUser = { id: Date.now(), name };
  return NextResponse.json(newUser, { status: 201 });
}
