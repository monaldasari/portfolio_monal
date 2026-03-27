# Public Assets Folder

This folder contains your portfolio's public files.

## Required Files

### 1. **profile.jpg** (or .png, .webp)
Your profile picture - used in the HomeSection

**How to add:**
- Save your profile picture here and name it exactly: `profile.jpg`
- Supported formats: JPG, PNG, WebP
- Recommended size: 400x400px or square aspect ratio
- The image will be automatically optimized by Next.js

### 2. **resume.pdf**
Your resume PDF - used in the resume modal

**How to add:**
- Save your resume PDF here and name it exactly: `resume.pdf`
- Format: PDF only
- Users can view it in the modal and download it from there

## Setup Instructions

1. **Windows Explorer / File Manager:**
   - Navigate to this folder
   - Copy your profile picture and resume PDF here
   - Rename them to exactly match the filenames above

2. **Terminal Commands:**
   ```bash
   # From your project root
   cp ~/Pictures/profile.jpg public/
   cp ~/Pictures/resume.pdf public/
   ```

3. **VS Code:**
   - Right-click this folder
   - Select "Paste" if you've already copied the files
   - Or drag and drop the files here

## Important Notes

- Filenames are **case-sensitive**
- The portfolio will work without these files, but:
  - Profile picture won't display
  - Resume button will try to open a missing file
- Remove any placeholder files (*.txt) before deploying

## Existing Files

- `resume-placeholder.txt` - Remove or replace with your actual resume.pdf
