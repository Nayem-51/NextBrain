const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock Database - Courses
let items = [
    {
        id: 1,
        name: 'MERN Stack Mastery',
        description: 'Master MongoDB, Express, React, and Node.js. Build scalable full-stack applications from scratch to deployment.',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 2,
        name: 'Advanced Agentic AI',
        description: 'Build autonomous AI agents. Learn LLM integration, LangChain, and multi-agent workflows for the future of automation.',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 3,
        name: 'DevOps & Cloud Engineering',
        description: 'CI/CD, Docker, Kubernetes, and AWS. The complete guide to modern infrastructure as code.',
        price: 75.00,
        image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 4,
        name: 'Next.js 15 Ultimate Guide',
        description: 'Deep dive into App Router, Server Actions, and advanced patterns for enterprise-grade React applications.',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 5,
        name: 'Python for Automation',
        description: 'Automate boring stuff, build bots, and streamline your workflow with powerful Python scripting.',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 6,
        name: 'Backend Engineering Hard Parts',
        description: 'System design, database internals, caching strategies, and message queues for high-scale systems.',
        price: 99.00,
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
];

// Routes

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Get single item
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (!item) return res.status(404).json({ message: 'Course not found' });
    res.json(item);
});

// Add new item (Mock Protected)
app.post('/api/items', (req, res) => {
    const { name, description, price, image } = req.body;
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    
    const newItem = {
        id: items.length + 1,
        name,
        description: description || '',
        price: parseFloat(price),
        image: image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    };
    
    items.push(newItem);
    res.status(201).json(newItem);
});

// Mock Login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Hardcoded credentials as requested
    if (email === 'admin@nextmind.com' && password === 'admin123') {
        return res.json({ 
            success: true, 
            token: 'mock_jwt_token_12345',
            user: { email: 'admin@nextmind.com', name: 'Admin User' }
        });
    }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
