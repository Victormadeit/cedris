# Cedris Frontend - Standalone Version

This is a clean, standalone frontend for the Cedris custom printing website. All backend dependencies have been removed.

## 🌐 Live Website
**https://victormadeit.github.io/cedris/**

## 🚀 Automated Deployment

This project uses GitHub Actions for automated deployment to GitHub Pages. Every time you push code to the `main` branch, your website is automatically updated!

### How it works:
1. **Push code** to main branch
2. **GitHub Actions** automatically builds and deploys
3. **Live website** updates within minutes
4. **Zero manual work** required!

### Development Workflow:
```bash
# Make your changes to HTML, CSS, JS files
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push

# That's it! Your changes will be live automatically!
```

## What's Working

✅ **Homepage** - Fully functional with hero slideshow and product showcase  
✅ **Our Designs** - Static gallery showing all available designs by category  
✅ **Design Editor** - Interactive mockup editor for custom designs  
✅ **Order System** - Complete order flow with local storage  
✅ **Contact Page** - Contact form and social media links  
✅ **About Page** - Company information  
✅ **Responsive Design** - Works on all devices  

## Features

- **No Backend Required** - Everything works client-side only
- **Local Storage** - Order drafts and customer info saved locally
- **Interactive Design Tool** - Drag-and-drop design editor with:
  - Custom text with fonts and colors
  - Image upload and positioning  
  - Product color tinting
  - Undo/Redo functionality
- **Order Management** - Complete order workflow with MTN MoMo integration
- **Static Gallery** - Showcases T-shirts, Hoodies, Mugs, Plates, and Banners

## File Structure

```
├── index.html          # Homepage with hero and features
├── designs.html        # Product gallery (static)
├── design-yourself.html # Interactive design editor
├── order.html          # Order confirmation and payment
├── about.html          # Company information
├── contact.html        # Contact form and info
├── styles.css          # All styling
├── favicon.png         # Site icon
├── logo.png           # Company logo
├── .github/
│   └── workflows/
│       └── deploy.yml  # Automated deployment configuration
└── [product images]    # All design showcase images
```

## Key Changes Made

1. **Removed API Dependencies** - No more `api.js` or backend calls
2. **Static Product Gallery** - Hardcoded product showcase instead of dynamic loading
3. **Local Order Storage** - Orders saved to localStorage instead of database
4. **Simplified Contact** - Form saves locally instead of sending emails
5. **Fixed Image References** - Corrected all broken image paths

## How to Use

1. Open `index.html` in any modern web browser
2. Navigate through the site using the top menu
3. Try the design editor to create custom products
4. Place orders (stored locally for demo purposes)

## Payment Integration

The site includes MTN MoMo payment integration with merchant code **611960**. In a real deployment, you would need to:

1. Set up proper payment processing
2. Connect to a backend for order management
3. Add email notifications

## Development

This is a pure HTML/CSS/JavaScript website with no build process required. Simply edit the files and refresh your browser to see changes.

## Support

For questions about this frontend implementation, check the code comments or contact the development team.
