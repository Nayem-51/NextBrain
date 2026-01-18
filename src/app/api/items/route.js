import { NextResponse } from 'next/server';
import { getItems, addItem } from '@/lib/store';

export async function GET() {
    const items = getItems();
    return NextResponse.json(items);
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, description, price, image } = body;
        
        if (!name || !price) {
            return NextResponse.json(
                { message: 'Name and price are required' },
                { status: 400 }
            );
        }
        
        // Calculate new ID based on current length + 1 (simple logic)
        // Ideally we'd find max ID, but for this simple array it's okay-ish.
        // Let's use Date.now() or similar for safer IDs if we were real, 
        // but current logic uses "items.length + 1" in previous code.
        // Let's stick to simple length for compatibility with the mock data integers.
        const currentItems = getItems();
        const newId = currentItems.length > 0 ? Math.max(...currentItems.map(i => i.id)) + 1 : 1;

        const newItem = {
            id: newId,
            name,
            description: description || '',
            price: parseFloat(price),
            image: image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
        };
        
        addItem(newItem);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: 'Error creating item' },
            { status: 500 }
        );
    }
}

