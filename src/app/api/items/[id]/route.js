import { NextResponse } from 'next/server';
import { getItemById } from '@/lib/store';

export async function GET(request, { params }) {
    // Handle params promise for compatibility
    const resolvedParams = await Promise.resolve(params);
    const { id } = resolvedParams;
    
    const item = getItemById(id);
    
    if (!item) {
        return NextResponse.json({ message: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json(item);
}

