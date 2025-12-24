# Quick Deployment Guide

## 📋 Prerequisites

- GitHub account (you have: @modeeric)
- Git installed locally ✅

## 🚀 Deploy to GitHub Pages (First Time)

### Step 1: Create the GitHub Repository

Go to GitHub and create a new repository:
- **Name**: `modeeric.github.io` (exactly this - must match your username)
- **Description**: Personal website - ML Researcher
- **Visibility**: Public
- **DO NOT** initialize with README, .gitignore, or license (we already have these)

Or use this direct link:
👉 https://github.com/new

### Step 2: Push Your Code

Run these commands in your terminal:

```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io

# Add the GitHub repository as remote
git remote add origin https://github.com/modeeric/modeeric.github.io.git

# Push your code
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 4: Wait and Visit

- GitHub will take 2-5 minutes to build your site
- You'll see a green checkmark when it's ready
- Visit: **https://modeeric.github.io**

---

## 🔄 Update Your Site

After making changes to any files:

```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: description of what you changed"

# Push to GitHub
git push
```

Changes will be live in 1-2 minutes!

---

## 📝 Common Updates

### Update Contact Info
Edit `index.html` - Search for the contact section and update email, phone, etc.

### Add New Publication
Edit `index.html` - Find the "Selected Research" section and add a new publication card.

### Change Colors
Edit `style.css` - Modify the CSS variables at the top:
```css
:root {
  --primary-color: #2563eb;  /* Change this to your preferred color */
}
```

### Update Experience
Edit `index.html` - Find the "Experience" section and add/modify timeline items.

---

## 🧪 Test Locally

Before pushing, test your changes:

```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io

# Start a local server
python3 -m http.server 8000

# Visit: http://localhost:8000
```

Press `Ctrl+C` to stop the server.

---

## 🐛 Troubleshooting

### Site not updating?
1. Check GitHub Actions: https://github.com/modeeric/modeeric.github.io/actions
2. Clear browser cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
3. Wait up to 5 minutes for changes to propagate

### Push failed?
```bash
# Pull latest changes first
git pull origin main

# Then push again
git push
```

### Authentication issues?
GitHub may require a Personal Access Token instead of password:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy the token
5. Use token as password when pushing

---

## 📚 Helpful Git Commands

```bash
# Check status
git status

# See what changed
git diff

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

---

## 🎨 Customization Ideas

1. **Add a profile photo** - Add an image to the hero section
2. **Add a blog section** - Create a new section for blog posts
3. **Add project showcase** - Create cards for your GitHub projects
4. **Add animations** - Enhance with more CSS animations
5. **Add dark mode** - Toggle between light/dark themes
6. **Add analytics** - Track visitors with Google Analytics
7. **Add custom domain** - Use your own domain name

---

## 📞 Need Help?

If you run into issues:
1. Check the GitHub Pages documentation: https://docs.github.com/en/pages
2. Check Actions tab for build errors
3. Verify all files are committed: `git status`

---

**Your website files are in**: `/Users/ericmodesitt/Desktop/repos/modeeric.github.io/`

Good luck with your website! 🚀

