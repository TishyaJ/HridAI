# Deployment Guide for HridAI

This guide will help you deploy the HridAI website to Netlify.

## 🚀 Quick Deploy to Netlify (5 minutes)

### Step 1: Sign Up for Netlify
1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Click "Sign up" and choose "Sign up with GitHub"
3. Authorize Netlify to access your GitHub account

### Step 2: Import Your Repository
1. Once logged in, click **"Add new site"** button
2. Select **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Find and select your **`TishyaJ/HridAI`** repository

### Step 3: Configure Build Settings
You'll see a configuration screen:
- **Branch to deploy:** `main` (should be auto-selected)
- **Build command:** Leave empty (no build needed)
- **Publish directory:** `.` or leave empty (root directory)

Click **"Deploy site"**

### Step 4: Wait for Deployment
- Netlify will deploy your site in 30-60 seconds
- You'll get a random URL like: `https://random-name-123456.netlify.app`

### Step 5: Customize Your URL (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to something like: `hridai` or `hridai-neuroai`
4. Your site will be: `https://hridai.netlify.app`

---

## 🔄 Automatic Deployments

Once connected, Netlify will automatically:
- Deploy every time you push to the `main` branch
- Show deploy previews for pull requests
- Provide deploy logs and rollback options

---

## 🛠️ Alternative: Deploy via Netlify CLI

If you prefer command line:

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Login to Netlify
```bash
netlify login
```

### Initialize and Deploy
```bash
# Initialize Netlify in your project
netlify init

# Deploy to production
netlify deploy --prod
```

---

## 📱 Alternative: Deploy to GitHub Pages

### Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be available at:
```
https://tishyaj.github.io/HridAI/
```

---

## 🎯 What Gets Deployed

The following files are deployed:
- `index.html` - Main website
- `styles.css` - Styling
- `script.js` - Interactive visualizations
- All other static assets

The Jupyter notebook (`HridAI_demo.ipynb`) is not served but remains in the repository for development.

---

## 🔧 Troubleshooting

### Site not loading?
- Check that `index.html` is in the root directory
- Verify the publish directory is set to `.` or root

### JavaScript not working?
- Check browser console for errors
- Ensure `script.js` is in the same directory as `index.html`

### Want to use a custom domain?
1. Buy a domain (e.g., from Namecheap, Google Domains)
2. In Netlify: **Domain settings** → **Add custom domain**
3. Update your domain's DNS settings as instructed

---

## 📊 Monitoring Your Site

After deployment, you can:
- View analytics in Netlify dashboard
- Check deploy logs
- Set up form submissions
- Add serverless functions (if needed later)

---

## 🎉 You're Done!

Your HridAI website is now live and accessible to the world!

Share your link:
- On your GitHub repository description
- In your README.md
- On social media
- In research papers or presentations

---

## Need Help?

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forum](https://answers.netlify.com/)
- [GitHub Issues](https://github.com/TishyaJ/HridAI/issues)
