#!/bin/bash

# The Stables Christian Centre - Local Preview Script
# This script starts a local server to preview the website

echo "🌐 The Stables Christian Centre - Local Preview"
echo "=============================================="

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "🐍 Starting Python 3 server..."
    echo "📍 Your website will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "🐍 Starting Python server..."
    echo "📍 Your website will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
elif command -v node &> /dev/null; then
    echo "🟢 Starting Node.js server..."
    echo "📍 Your website will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    npx serve . -p 8000
elif command -v php &> /dev/null; then
    echo "🐘 Starting PHP server..."
    echo "📍 Your website will be available at: http://localhost:8000"
    echo "🔄 Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable server found."
    echo ""
    echo "💡 Please install one of the following:"
    echo "   - Python 3 (recommended)"
    echo "   - Node.js"
    echo "   - PHP"
    echo ""
    echo "🔗 Or simply open index.html in your web browser."
    exit 1
fi
