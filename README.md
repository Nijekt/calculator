# Project Documentation

## Task

[Link to the task description](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit#heading=h.5dt3hghpa22f)

## How to Run the App

1. **Clone the repository:**
```bash
  git clone https://github.com/Nijekt/calculator.git
```
2. **Install dependencies:**
```bash
  npm install
```
3. **Run the app in development mode:**
```bash
  npm run start
```
This will start a local development server. Open your browser and navigate to http://localhost:5000.

4. **Build for production:**
```bash
  npm run build
```
This will create a build/ folder containing the optimized files for deployment.

5. **Build for development:**
```bash
  npm run build:dev
```
This will create a development build in the build/ folder.

## Folder Structure

- public/
  
Contains static files.

- src/

Contains all the source code of the application.

- src/components

Contains files responsible for creating UI components and assembling the calculator interface.

- src/handlers

Stores files that handle user interactions and events.

- src/utils

Contains utility functions.

- src/styles

Contains CSS files
