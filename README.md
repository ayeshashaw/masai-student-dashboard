# masai-student-dashboard

This is a basic React project that has been created using Vite. It includes components for user authentication and student management.

## Project Structure

- `src/`: Contains the main application source code.
  - `App.jsx`: The main application component.
  - `main.jsx`: The entry point for the React application.
  - `components/`: Contains reusable UI components such as `Header`, `Login`, `StudentList`, and `StudentRegistration`.
  - `contexts/`: Implements the React Context API for global state management (e.g., `AuthContext`, `ThemeContext`).
  - `firebase/`: Contains Firebase configurations.
- `public/`: Holds static assets.

## Setup and Installation

1. **Clone the repository (if applicable):**
   ```bash
   git clone https://github.com/ayeshashaw/masai-student-dashboard.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) in your browser to view it.

The page will automatically reload when you make changes, and any lint errors will display in the console.

### `npm run build`

Builds the app for production in the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include hashes. Your app is now ready for deployment!

### `npm run lint`

Lints the project files for code quality.

### `npm run preview`

Serves the `dist` folder locally so you can preview the production build.

## Technologies Used

- React
- Vite
- Firebase (for authentication and database, based on `firebase/config.js`)
- CSS for styling

## Contributing

Feel free to contribute to this project. Please follow standard Git practices when submitting pull requests.

