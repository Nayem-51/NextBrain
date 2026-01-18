# NextMind - Professional Dark Mode E-Learning Platform

NextMind is a modern, full-stack Next.js application featuring a **premium professional dark mode design**. Built with Next.js 16 and Express.js, it showcases cutting-edge web development with authentication, dynamic content, and a stunning glassmorphism UI.

## ✨ Features

### 🎨 Professional Dark Mode Design
- **Deep Dark Theme**: Carefully crafted color palette with optimal contrast
- **Glassmorphism Effects**: Premium glass-morphic cards with blur and transparency
- **Smooth Animations**: Fade-in, slide-in, and custom gradient animations
- **Responsive Design**: Fully responsive across all devices
- **Custom Scrollbar**: Styled scrollbar matching the dark theme

### 🔐 Authentication & Security
- **NextAuth.js Integration**: Secure credential-based authentication
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Cookie-based session handling

### 📱 Core Pages
1. **Landing Page** (7 Sections):
   - Hero with gradient text and CTAs
   - Learning Tracks showcase
   - Tech Stack marquee
   - Project-based learning bento grid
   - Statistics and metrics
   - FAQ section
   - Final CTA section

2. **Items/Courses Marketplace**:
   - Dynamic item cards with hover effects
   - Real-time data from Express API
   - Skeleton loading states
   - Responsive grid layout

3. **Item Details Page**:
   - Full product specifications
   - High-quality image display
   - Add to cart functionality
   - Back navigation

4. **Login Page**:
   - Glassmorphism form design
   - Credential authentication
   - Error handling
   - Responsive layout

5. **Add Item Page** (Protected):
   - Admin-only access
   - Form validation
   - Toast notifications on success/error
   - Image URL support

### 🎯 UI/UX Enhancements
- **Toast Notifications**: Professional react-hot-toast integration
- **Animated Navbar**: Gradient logo animation, scroll-based styling
- **Enhanced Footer**: Social links, multiple columns, refined typography
- **Micro-interactions**: Hover effects, transitions, and animations
- **Loading States**: Skeleton screens and loading indicators

## 🛠 Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19
- **Backend**: Express.js, Node.js
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Authentication**: NextAuth.js
- **Notifications**: react-hot-toast
- **Icons & Fonts**: Google Fonts (Geist Sans, Geist Mono)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NextMind
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Backend Server**
   The application requires the Express API to be running:
   ```bash
   node server.js
   ```
   *Server runs on http://localhost:5000*

4. **Start the Frontend Application**
   Open a new terminal window:
   ```bash
   npm run dev
   ```
   *Frontend runs on http://localhost:3000*

5. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`

## 🔑 Login Credentials

For testing the authentication flow:

- **Email**: `admin@nextmind.com`
- **Password**: `admin123`

## 🗺 Application Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 core sections |
| `/items` | Public | Marketplace showing all courses/products |
| `/items/[id]` | Public | Detailed view of a specific item |
| `/login` | Public | Login page with credential authentication |
| `/admin/add` | **Protected** | Admin form to add new items (requires login) |

## 🎨 Dark Mode Design System

### Color Palette
- **Background**: Deep dark gradients (#0a0e1a → #1e293b)
- **Primary**: Blue (#3b82f6) and Cyan (#06b6d4)
- **Text**: Slate variations for hierarchy
- **Accents**: Success (#10b981), Error (#ef4444), Warning (#f59e0b)

### Key Design Elements
- **Glassmorphism**: `backdrop-filter: blur(20px)` with transparency
- **Gradients**: Linear gradients for text and backgrounds
- **Shadows**: Layered shadows for depth
- **Animations**: Custom keyframe animations for smooth UX

## 🧩 Project Structure

```
NextMind/
├── src/
│   ├── app/
│   │   ├── admin/add/         # Protected add item page
│   │   ├── api/auth/          # NextAuth API routes
│   │   ├── items/             # Items listing and details
│   │   ├── login/             # Login page
│   │   ├── globals.css        # Global styles & design system
│   │   ├── layout.js          # Root layout with Toaster
│   │   └── page.js            # Landing page
│   ├── components/
│   │   ├── Navbar.js          # Enhanced navigation
│   │   ├── Footer.js          # Footer with social links
│   │   └── AuthProvider.js    # NextAuth session provider
│   └── middleware.js          # Route protection logic
├── server.js                  # Express backend
├── package.json
└── README.md
```

## 🚀 Features Breakdown

### Implemented Features
✅ Next.js 16 App Router with Server Components  
✅ Express.js REST API for data management  
✅ Professional dark mode with glassmorphism  
✅ NextAuth.js authentication  
✅ Protected routes with middleware  
✅ Toast notifications (react-hot-toast)  
✅ Responsive design (mobile-first)  
✅ Custom animations and transitions  
✅ 7-section landing page  
✅ Dynamic item listing and details  
✅ Form validation and error handling  

### Optional Enhancements (Recommended)
- Database integration (MongoDB/PostgreSQL)
- Google OAuth login
- Image upload functionality
- Shopping cart system
- User dashboard
- Search and filtering

## 🎯 Development Notes

### Running in Development
```bash
# Terminal 1 - Backend
node server.js

# Terminal 2 - Frontend
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

## 📝 API Endpoints

### Items
- `GET /api/items` - Fetch all items
- `GET /api/items/:id` - Fetch single item
- `POST /api/items` - Add new item (requires authentication)

### Authentication
- `POST /api/auth/login` - Mock login endpoint

## 🤝 Contributing

This is an educational project. Feel free to fork and enhance!

## 📄 License

MIT License - feel free to use this project for learning purposes.

---

**Built with ❤️ using Next.js 16, React 19, Tailwind CSS v4, and Express.js**

*Professional Dark Mode Design • Glassmorphism UI • Smooth Animations • Responsive Layout*
