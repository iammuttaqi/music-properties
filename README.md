# Music Properties

## Description
This script automates the process of renaming and organizing music files. It reads the metadata from `.mp3` files in a specified directory, then renames and moves them to a new directory based on the artist and title information found in the metadata.

## Features
- Reads `.mp3` file metadata using the `music-metadata` library.
- Filters and processes only `.mp3` files from the source directory.
- Renames files in the format "Artist - Title.mp3".
- Moves the renamed files to a separate directory for organized storage.

## Installation
To use this script, you need to have Node.js installed on your system. Then, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies with `npm install`.

## Usage
To run the script, follow these steps:
1. Place your `.mp3` files in the `music` directory within the project folder.
2. Ensure there is a `music-updated` directory to receive the renamed files.
3. Run the script with `node index.js` (assuming your entry file is named `index.js`).

## Contributing
Contributions to improve the script are welcome. Please feel free to fork the repository, make changes, and submit a pull request.