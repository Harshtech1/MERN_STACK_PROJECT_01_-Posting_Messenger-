# Quick Start Guide 🚀

Get your Prompt Manager up and running in 5 minutes!

## Prerequisites

✅ Node.js installed (v14+)  
✅ MongoDB installed and running  
✅ Basic terminal/command prompt knowledge

## Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd D:\MongoDB_installer_2\MONGO_VS_CODE\Mongo_3
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ This will take 1-2 minutes.

### Step 3: Configure Environment
```bash
copy .env.example .env
```

### Step 4: Verify MongoDB is Running
Open a new terminal and check:
```bash
# On Windows, MongoDB usually runs as a service
# Check if it's running
net start | findstr MongoDB
```

If not running:
```bash
net start MongoDB
```

### Step 5: Initialize Database (Optional)
```bash
npm run init
```
This creates sample data for testing.

### Step 6: Start the Application
```bash
npm run dev
```

### Step 7: Open in Browser
Navigate to: **http://localhost:3000**

🎉 **You're all set!**

---

## What You Can Do Now

1. **View Home Page** - See the feature overview
2. **Create a Prompt** - Click "Create New Prompt"
3. **View All Prompts** - Browse your prompts in grid layout
4. **Edit a Prompt** - Click the "Edit" button on any prompt
5. **Delete a Prompt** - Click "Delete" with confirmation

---

## Common Issues & Solutions

### Issue: Port 3000 is already in use

**Solution:**
1. Change PORT in `.env` file:
   ```
   PORT=4000
   ```
2. Restart the application

### Issue: Cannot connect to MongoDB

**Solution:**
1. Verify MongoDB is running:
   ```bash
   net start MongoDB
   ```
2. Check connection string in `.env`:
   ```
   MONGODB_URI=mongodb://127.0.0.1:27017/mydatabase
   ```

### Issue: Module not found errors

**Solution:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

---

## Development Mode vs Production Mode

### Development (with auto-reload):
```bash
npm run dev
```
- Auto-restarts when you make changes
- Better for development
- Uses nodemon

### Production (standard):
```bash
npm start
```
- Standard Node.js execution
- Better for deployment
- No auto-reload

---

## Testing Your Installation

### 1. Create a Test Prompt
- Click "Create New Prompt"
- Fill in:
  - From: John
  - To: Jane
  - Message: Hello, this is a test!
- Click "Create Prompt"

### 2. Verify Database
The prompt should appear in your prompts list.

### 3. Test Edit
- Click "Edit" on your test prompt
- Change the message
- Click "Update Prompt"

### 4. Test Delete
- Click "Delete" on your test prompt
- Confirm deletion
- Verify it's removed from the list

---

## Project Structure Quick Reference

```
Mongo_3/
├── index.js              ← Main application file
├── init.js               ← Database initialization
├── package.json          ← Dependencies
├── .env                  ← Your configuration
├── config/
│   └── database.js       ← MongoDB connection
├── Models/
│   └── prompts.js        ← Database schema
├── routes/
│   ├── index.js          ← Home route
│   └── prompts.js        ← CRUD routes
├── views/
│   ├── home.ejs          ← Home page
│   ├── error.ejs         ← Error page
│   ├── partials/         ← Reusable components
│   └── prompts/          ← Prompt views
└── public/
    └── css/
        └── style.css     ← All styles
```

---

## Next Steps

### Learn More:
- Read [README.md](README.md) for detailed documentation
- Check [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
- View [CHANGELOG.md](CHANGELOG.md) for version history

### Customize:
1. **Change Colors** - Edit CSS variables in `public/css/style.css`
2. **Modify Schema** - Update `Models/prompts.js`
3. **Add Features** - Create new routes in `routes/`
4. **Update UI** - Modify EJS templates in `views/`

### Deploy:
- See README.md deployment section
- Consider MongoDB Atlas for cloud database
- Deploy to Heroku, Railway, or Render

---

## Need Help?

- 📖 Check the [README.md](README.md)
- 🐛 Open an issue on GitHub
- 💬 Ask in discussions

---

**Happy Coding! 💻✨**
