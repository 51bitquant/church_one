#!/bin/bash

# The Stables Christian Centre - Deployment Script
# This script helps deploy the website to GitHub Pages

echo "🚀 The Stables Christian Centre - Deployment Script"
echo "=================================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository. Please run this script from your project directory."
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if we're on main or master branch
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "master" ]]; then
    echo "⚠️  Warning: You're not on the main/master branch."
    echo "   This script works best when run from the main branch."
    read -p "   Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled."
        exit 1
    fi
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes."
    echo "   It's recommended to commit your changes before deploying."
    read -p "   Continue without committing? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled. Please commit your changes first."
        exit 1
    fi
fi

echo "📤 Pushing to remote repository..."
git push origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to remote repository!"
    echo ""
    echo "🌐 Your website will be deployed to GitHub Pages automatically."
    echo "   Please wait a few minutes for the deployment to complete."
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to your GitHub repository"
    echo "   2. Click on 'Settings'"
    echo "   3. Scroll down to 'Pages' section"
    echo "   4. Make sure GitHub Pages is enabled"
    echo "   5. Your site will be available at: https://yourusername.github.io/repository-name"
    echo ""
    echo "🔗 If you have GitHub Actions enabled, the deployment will happen automatically."
    echo "   Check the 'Actions' tab in your repository for deployment status."
else
    echo "❌ Failed to push to remote repository."
    echo "   Please check your git configuration and try again."
    exit 1
fi

echo ""
echo "🎉 Deployment script completed!"
