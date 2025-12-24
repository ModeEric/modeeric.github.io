#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   GitHub Pages Setup Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${RED}Error: Not a git repository${NC}"
    echo "Please run this script from the modeeric.github.io directory"
    exit 1
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Remote 'origin' already exists${NC}"
    echo "Remote URL: $(git remote get-url origin)"
    echo ""
    echo "Do you want to:"
    echo "1) Push to existing remote"
    echo "2) Change remote URL"
    echo "3) Cancel"
    read -p "Enter choice (1-3): " choice
    
    case $choice in
        1)
            echo -e "${BLUE}Pushing to existing remote...${NC}"
            ;;
        2)
            read -p "Enter new remote URL: " new_url
            git remote set-url origin "$new_url"
            echo -e "${GREEN}✓ Remote URL updated${NC}"
            ;;
        3)
            echo "Cancelled"
            exit 0
            ;;
        *)
            echo -e "${RED}Invalid choice${NC}"
            exit 1
            ;;
    esac
else
    echo -e "${BLUE}Setting up GitHub remote...${NC}"
    read -p "Enter your GitHub username [default: modeeric]: " username
    username=${username:-modeeric}
    
    REMOTE_URL="https://github.com/${username}/${username}.github.io.git"
    echo "Remote URL will be: $REMOTE_URL"
    read -p "Is this correct? (y/n): " confirm
    
    if [ "$confirm" != "y" ]; then
        read -p "Enter custom remote URL: " REMOTE_URL
    fi
    
    git remote add origin "$REMOTE_URL"
    echo -e "${GREEN}✓ Remote added${NC}"
fi

echo ""
echo -e "${BLUE}Checking for uncommitted changes...${NC}"

if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}You have uncommitted changes:${NC}"
    git status --short
    echo ""
    read -p "Commit these changes? (y/n): " commit_choice
    
    if [ "$commit_choice" = "y" ]; then
        read -p "Enter commit message: " commit_msg
        git add .
        git commit -m "$commit_msg"
        echo -e "${GREEN}✓ Changes committed${NC}"
    else
        echo -e "${YELLOW}⚠️  Skipping uncommitted changes${NC}"
    fi
fi

echo ""
echo -e "${BLUE}Pushing to GitHub...${NC}"

if git push -u origin main 2>&1; then
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}   ✓ Successfully pushed to GitHub!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo "1. Go to your repository on GitHub"
    echo "2. Click Settings → Pages"
    echo "3. Set Source to 'main' branch and '/ (root)' folder"
    echo "4. Wait 2-5 minutes"
    echo "5. Visit your site!"
    echo ""
    echo -e "${GREEN}Your site will be available at:${NC}"
    echo "https://$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/' | sed 's/\/.*\.github\.io//' | tr '[:upper:]' '[:lower:]').github.io"
else
    echo -e "${RED}========================================${NC}"
    echo -e "${RED}   ✗ Push failed${NC}"
    echo -e "${RED}========================================${NC}"
    echo ""
    echo -e "${YELLOW}Common solutions:${NC}"
    echo "1. Check your GitHub credentials"
    echo "2. Make sure the repository exists on GitHub"
    echo "3. Try: git pull origin main --rebase"
    echo "4. Check: git remote -v"
    exit 1
fi

