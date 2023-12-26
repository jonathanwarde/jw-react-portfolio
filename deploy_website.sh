#!/bin/bash

# Your FTP credentials and server
source .env

# Local directory structure
BUILD_DIR="src/dist"
IMG_DIR="src/img"  # Assuming this is correct for your local structure
SVG_DIR="src/svg"  # Assuming this is correct for your local structure

# Temporary directory paths
TEMP_IMG_DIR="/tmp/img_backup"
TEMP_SVG_DIR="/tmp/svg_backup"

# Function to upload directory
upload_directory() {
    local_dir=$1
    remote_dir=$2

    if [ -d "$local_dir" ]; then  # Check if directory exists
        # Navigate into the directory to upload its content
        cd "$local_dir"

        echo "Uploading from $local_dir to $remote_dir on $SERVER"
        ncftpput -R -DD -u "$USERNAME" -p "$PASSWORD" $SERVER $remote_dir *

        # Navigate back
        cd -
    else
        echo "Directory $local_dir does not exist. Skipping upload."
    fi
}

# Create temporary directories and copy files
echo "Creating temporary directories and backing up files..."
mkdir -p "$TEMP_IMG_DIR"
mkdir -p "$TEMP_SVG_DIR"

cp -a "$IMG_DIR/." "$TEMP_IMG_DIR/"
cp -a "$SVG_DIR/." "$TEMP_SVG_DIR/"

# Navigate to the directory where you run 'npm run build'
cd "$(dirname "$0")"

# Running npm build
echo "Running npm build..."
npm run build

# Start FTP upload
echo "Starting FTP upload..."

# Upload the build directory
echo "Uploading $BUILD_DIR to $REMOTE_DIR..."
upload_directory "$BUILD_DIR" "$REMOTE_DIR"

# Upload the img directory directly to public_html from the temporary directory
echo "Uploading $TEMP_IMG_DIR to $REMOTE_DIR/img..."
upload_directory "$TEMP_IMG_DIR" "$REMOTE_DIR/img"

# Upload the svg directory directly to public_html from the temporary directory
echo "Uploading $TEMP_SVG_DIR to $REMOTE_DIR/svg..."
upload_directory "$TEMP_SVG_DIR" "$REMOTE_DIR/svg"

# Remove temporary directories (optional, remove the following lines if you want to keep the backups)
echo "Cleaning up temporary files..."
rm -rf "$TEMP_IMG_DIR"
rm -rf "$TEMP_SVG_DIR"

echo "FTP deployment complete."
