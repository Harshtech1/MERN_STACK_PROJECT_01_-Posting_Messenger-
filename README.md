# Prompt Manager 📝

A full-stack CRUD application for managing prompts and messages, built with Node.js, Express, MongoDB, and EJS.

## 🌟 Features

- **Create** new prompts with sender, receiver, and message information
- **Read** all prompts in a beautiful, organized interface
- **Update** existing prompts easily
- **Delete** unwanted prompts with confirmation
- **Responsive Design** - works on desktop, tablet, and mobile devices
- **Modern UI** - clean and professional interface with smooth animations
- **Form Validation** - client and server-side validation
- **Error Handling** - graceful error pages and feedback

## 🚀 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM
- **Template Engine:** EJS (Embedded JavaScript)
- **Styling:** Custom CSS with modern design
- **HTTP Methods:** GET, POST, PUT, DELETE with method-override

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher) installed
- MongoDB installed and running locally
- npm or yarn package manager

## 🔧 Installation

1. **Clone or download the project:**
   ```bash
   cd Mongo_3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     copy .env.example .env
     ```
   - Edit `.env` file if you need to change default settings:
     ```
     PORT=3000
     NODE_ENV=development
     MONGODB_URI=mongodb://127.0.0.1:27017/mydatabase
     APP_NAME=Prompt Manager
     ```

4. **Make sure MongoDB is running:**
   - On Windows: MongoDB should be running as a service, or start it manually
   - Check if MongoDB is running on `mongodb://127.0.0.1:27017`

5. **Initialize the database (optional):**
   ```bash
   npm run init
   ```
   This will create sample data in your database.

## 🎯 Running the Application

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The application will start on `http://localhost:3000`

## 📁 Project Structure

```
Mongo_3/
├── config/
│   └── database.js           # MongoDB connection configuration
├── Models/
│   └── prompts.js            # Mongoose schema for prompts
├── routes/
│   ├── index.js              # Home route
│   └── prompts.js            # CRUD routes for prompts
├── views/
│   ├── partials/
│   │   ├── header.ejs        # Header partial with HTML head
│   │   ├── navbar.ejs        # Navigation bar
│   │   └── footer.ejs        # Footer partial
│   ├── prompts/
│   │   ├── index.ejs         # List all prompts
│   │   ├── new.ejs           # Create new prompt form
│   │   └── edit.ejs          # Edit prompt form
│   ├── home.ejs              # Home page with features
│   └── error.ejs             # Error page
├── public/
│   └── css/
│       └── style.css         # Custom CSS styles
├── .env                      # Environment variables (not in git)
├── .env.example              # Example environment file
├── .gitignore                # Git ignore file
├── index.js                  # Main application file
├── init.js                   # Database initialization script
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🛣️ API Routes

| Method | Route                  | Description           |
|--------|------------------------|-----------------------|
| GET    | `/`                    | Home page             |
| GET    | `/prompts`             | List all prompts      |
| GET    | `/prompts/new`         | New prompt form       |
| POST   | `/prompts`             | Create new prompt     |
| GET    | `/prompts/edit/:id`    | Edit prompt form      |
| PUT    | `/prompts/:id`         | Update prompt         |
| DELETE | `/prompts/:id`         | Delete prompt         |

## 💾 Database Schema

### Prompt Model

```javascript
{
  from: {
    type: String,
    required: true,
    maxlength: 100
  },
  to: {
    type: String,
    required: true,
    maxlength: 100
  },
  message: {
    type: String,
    required: true,
    maxlength: 500
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🎨 Styling

The application uses a modern, responsive design with:

- Custom CSS variables for easy theming
- Flexbox and Grid layouts
- Smooth transitions and hover effects
- Mobile-first responsive design
- Professional color scheme

### Color Palette

- **Primary:** #4f46e5 (Indigo)
- **Secondary:** #64748b (Slate)
- **Success:** #10b981 (Green)
- **Danger:** #ef4444 (Red)
- **Warning:** #f59e0b (Amber)

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/mydatabase
APP_NAME=Prompt Manager
```

## 📝 NPM Scripts

- `npm start` - Start the application in production mode
- `npm run dev` - Start with nodemon for development
- `npm run init` - Initialize database with sample data

## 🐛 Troubleshooting

### MongoDB Connection Issues

If you see `MongooseServerSelectionError`:

1. Check if MongoDB is running:
   ```bash
   # On Windows
   net start MongoDB
   ```

2. Verify MongoDB is accessible at `mongodb://127.0.0.1:27017`

3. Check firewall settings

### Port Already in Use

If port 3000 is already in use:

1. Change the PORT in `.env` file
2. Or kill the process using port 3000:
   ```bash
   # On Windows
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

## 🚀 Deployment

### Deploying to Production

1. **Set environment variables:**
   ```bash
   NODE_ENV=production
   MONGODB_URI=<your-production-mongodb-uri>
   PORT=3000
   ```

2. **Start the application:**
   ```bash
   npm start
   ```

### Recommended Hosting Platforms

- **Backend:** Heroku, Railway, Render, DigitalOcean
- **Database:** MongoDB Atlas (free tier available)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Node.js community
- Express.js framework
- MongoDB and Mongoose
- EJS templating engine

## 📸 Screenshots

### Home Page
Beautiful landing page with feature cards and call-to-action buttons.

### All Prompts
Grid layout displaying all prompts with edit and delete functionality.

### Create/Edit Forms
Clean forms with validation and user-friendly interface.

---

**Built with ❤️ using Node.js, Express & MongoDB**
