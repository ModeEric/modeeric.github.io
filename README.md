# Eric Modesitt - Personal Website

A modern, responsive personal website showcasing my research in ML reliability, uncertainty quantification, and sequential inference.

## 🚀 Live Site

Visit: [modeeric.github.io](https://modeeric.github.io)

## ✨ Features

- **Responsive Design**: Beautiful on all devices - desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times with optimized CSS and JavaScript
- **Accessible**: Semantic HTML and ARIA labels for screen readers
- **SEO Friendly**: Proper meta tags and structured content

## 📁 Structure

```
modeeric.github.io/
├── index.html      # Main HTML file
├── style.css       # Styles and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties and grid/flexbox
- **JavaScript**: Vanilla JS for smooth interactions
- **Google Fonts**: Inter font family

## 📝 Sections

1. **Hero**: Introduction with name, title, and research focus
2. **Research Focus**: Four key areas of expertise displayed in cards
3. **Selected Research**: Publications and working papers
4. **Experience**: Timeline of professional roles
5. **Education**: Academic background
6. **Technical Skills**: Categorized skill tags
7. **Contact**: Multiple ways to get in touch

## 🚀 Deployment to GitHub Pages

### First Time Setup

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd /Users/ericmodesitt/Desktop/repos/modeeric.github.io
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name it **exactly**: `modeeric.github.io`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/modeeric/modeeric.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

5. **Wait a few minutes**, then visit: `https://modeeric.github.io`

### Updating Your Site

When you make changes:

```bash
git add .
git commit -m "Update: description of changes"
git push
```

Changes will be live in 1-2 minutes.

## 🎨 Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-color: #2563eb;    /* Main blue color */
  --primary-dark: #1e40af;     /* Darker blue */
  --primary-light: #3b82f6;    /* Lighter blue */
  /* ... */
}
```

### Content

All content is in `index.html`. Update sections as needed:
- Research publications
- Work experience
- Education
- Skills
- Contact information

### Adding New Sections

1. Add HTML in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation links in the `<nav>` section

## 📱 Testing Locally

To test locally before pushing:

1. **Simple Method**: Just open `index.html` in your browser

2. **With Live Server** (recommended):
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## 🐛 Troubleshooting

### Site not updating?
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check GitHub Actions tab for build status
- Wait 5 minutes for GitHub Pages to rebuild

### Styles not loading?
- Ensure `style.css` and `script.js` are in the same directory as `index.html`
- Check browser console for errors (F12)

### Mobile menu not working?
- Ensure JavaScript is enabled
- Check browser console for errors

## 📧 Contact

- **Email**: ericmodesitt89@gmail.com
- **GitHub**: [@modeeric](https://github.com/modeeric)
- **LinkedIn**: [eric-modesitt](https://linkedin.com/in/eric-modesitt)

## 📄 License

© 2025 Eric Modesitt. All rights reserved.

---

**Built with care for reliability and performance** 🚀

