# Quick Reference - modeeric.github.io

## 🚀 One-Command Deploy

### First Time Setup
```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io
./deploy.sh
```

Then enable GitHub Pages in repository Settings → Pages

### Update Site
```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io
git add .
git commit -m "Update: what you changed"
git push
```

## 📁 File Structure

```
modeeric.github.io/
├── index.html      # Main content (edit this for content changes)
├── style.css       # All styling (edit for visual changes)
├── script.js       # Interactive features
├── README.md       # Project documentation
├── DEPLOY.md       # Detailed deployment guide
├── deploy.sh       # Automated setup script
└── .gitignore      # Files to exclude from git
```

## ✏️ Quick Edits

### Update Your Job Title
**File**: `index.html`  
**Line**: Search for `<p class="hero-subtitle">`  
**Example**: Change "ML Researcher" to "Senior ML Engineer"

### Add a New Publication
**File**: `index.html`  
**Section**: Find `<!-- Selected Research Section -->`  
**Action**: Copy existing `<div class="publication-card">` and modify

### Update Contact Email
**File**: `index.html`  
**Line**: Search for `ericmodesitt89@gmail.com`  
**Action**: Replace with new email (appears in multiple places)

### Change Color Scheme
**File**: `style.css`  
**Lines**: 6-16 (CSS variables)  
**Primary Blue**: `--primary-color: #2563eb;`

### Add New Experience
**File**: `index.html`  
**Section**: Find `<!-- Experience Section -->`  
**Action**: Copy existing `<div class="timeline-item">` and modify

## 🎨 Color Schemes

Replace these in `style.css` `:root` section:

### Blue (Current)
```css
--primary-color: #2563eb;
--primary-dark: #1e40af;
--primary-light: #3b82f6;
```

### Green
```css
--primary-color: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
```

### Purple
```css
--primary-color: #8b5cf6;
--primary-dark: #7c3aed;
--primary-light: #a78bfa;
```

### Orange
```css
--primary-color: #f59e0b;
--primary-dark: #d97706;
--primary-light: #fbbf24;
```

## 🧪 Test Locally

```bash
cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io
python3 -m http.server 8000
# Visit: http://localhost:8000
# Press Ctrl+C to stop
```

## 🔍 Check Status

```bash
# See what files changed
git status

# See detailed changes
git diff

# See commit history
git log --oneline -10
```

## 🐛 Common Fixes

### Undo Last Commit (Keep Changes)
```bash
git reset --soft HEAD~1
```

### Discard All Local Changes
```bash
git reset --hard HEAD
```

### Fix Merge Conflicts
```bash
git pull origin main
# Fix conflicts in files
git add .
git commit -m "Resolve merge conflicts"
git push
```

### Force Push (Use Carefully!)
```bash
git push --force origin main
```

## 📊 Analytics (Optional)

Add Google Analytics by inserting before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🌐 Custom Domain (Optional)

1. Buy domain (e.g., ericmodesitt.com)
2. Add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
           185.199.109.153
           185.199.110.153
           185.199.111.153
   
   Type: CNAME
   Host: www
   Value: modeeric.github.io
   ```
3. Create `CNAME` file in repository:
   ```bash
   echo "ericmodesitt.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```
4. In GitHub: Settings → Pages → Custom domain → enter domain

## 📱 Mobile Testing

Test on different devices:
- Use Chrome DevTools (F12 → Toggle device toolbar)
- Test on actual mobile device
- Check responsiveness at: 320px, 768px, 1024px, 1440px

## ⚡ Performance Tips

1. **Compress images** before adding (use TinyPNG.com)
2. **Minify CSS/JS** for production (use online minifiers)
3. **Lazy load images** (already implemented in script.js)
4. **Use WebP format** for images (better compression)

## 🔒 Security

- Never commit passwords or API keys
- Add sensitive files to `.gitignore`
- Use environment variables for secrets
- Enable 2FA on GitHub account

## 📞 Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Git Basics**: https://git-scm.com/book/en/v2
- **HTML/CSS Reference**: https://developer.mozilla.org/
- **Your repository**: https://github.com/modeeric/modeeric.github.io

## ✅ Pre-Push Checklist

- [ ] Tested locally (`python3 -m http.server 8000`)
- [ ] All links work
- [ ] Looks good on mobile (Chrome DevTools)
- [ ] No console errors (F12 → Console)
- [ ] Spell-checked content
- [ ] Updated commit message is descriptive
- [ ] Run `git status` to verify files

---

**Last Updated**: December 24, 2025  
**Repository**: /Users/ericmodesitt/Desktop/repos/modeeric.github.io  
**Live Site**: https://modeeric.github.io (after deployment)

