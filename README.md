# The Stables Christian Centre - Modern Website

A modern, responsive website redesign for The Stables Christian Centre, built with HTML5, Tailwind CSS, and vanilla JavaScript.

## 🎨 Features

- **Modern Design**: Clean, professional design that reflects the church's mission
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Tailwind CSS**: Built with the utility-first CSS framework for rapid development
- **Interactive Elements**: Smooth scrolling navigation and mobile menu
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Lightweight and fast-loading

## 🏗️ Sections

1. **Hero Section** - Main landing area with mission statement
2. **About** - Church history and mission information
3. **Services** - All available community services
4. **Community** - Facilities and overseas outreach
5. **Contact** - Location, hours, and contact form
6. **Footer** - Additional links and information

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Fork or Clone** this repository to your GitHub account
2. **Go to Settings** in your repository
3. **Scroll down to Pages** section
4. **Select Source**: Choose "Deploy from a branch"
5. **Select Branch**: Choose `main` or `master`
6. **Select Folder**: Choose `/ (root)`
7. **Click Save**
8. Your site will be available at: `https://yourusername.github.io/repository-name`

### Option 2: Manual Deployment

1. **Push your code** to the `gh-pages` branch
2. **Enable GitHub Pages** in repository settings
3. **Select gh-pages branch** as source

### Option 3: GitHub Actions (Advanced)

Create a `.github/workflows/deploy.yml` file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 🛠️ Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/repository-name.git
   cd repository-name
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve .
     
     # PHP
     php -S localhost:8000
     ```

3. **View the site** at `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
The website uses custom Tailwind colors defined in the `<script>` tag:
- `stables-green`: #2d5a27 (Primary brand color)
- `stables-gold`: #d4af37 (Accent color)
- `stables-brown`: #8b4513 (Secondary color)

### Fonts
- Uses system fonts for optimal performance
- Font Awesome icons for visual elements

## 📝 Content Updates

To update content, simply edit the `index.html` file:
- **Text content**: Update the HTML text directly
- **Images**: Replace image URLs in the HTML
- **Contact information**: Update phone, email, and address
- **Services**: Modify the services section as needed

## 🔧 Technical Details

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Font Awesome**: Icon library (CDN)
- **Vanilla JavaScript**: No external dependencies
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Transitions**: Smooth hover effects

## 📞 Support

For technical support or questions about the website:
- **Email**: contactus@stables.org.au
- **Phone**: (08) 8326 4455

## 📄 License

This project is designed for The Stables Christian Centre. All rights reserved.

---

**Website Development by Micro Box | Designed By Lynne Hoet**
