<<<<<<< HEAD
# React DIY App
## Overview
This is a React-based application developed to illustrate key React concepts through four distinct questions as specified in the assignment PDF. The application demonstrates the use of props (Question 1), state management with a counter (Question 2), and React component lifecycle methods (Questions 3 and 4).
## Features
- **Question 1: Props Demo**
  Displays a list of user names utilizing React props for data passing.
- **Question 2: Counter Demo**
  Implements a counter component with functionality to increment, decrement, and reset the count.
- **Question 3: Lifecycle Demo (Mounting Phase)**
  Demonstrates the mounting phase of React component lifecycle methods.
- **Question 4: Lifecycle Demo (Updating Phase)**
  Demonstrates the updating phase of React component lifecycle methods.
## Prerequisites
- **Node.js**
  Recommended version: 14.x or later.
- **npm**
  Included with Node.js installation.
## Installation
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd react-diy-app
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Start the Development Server**
   ```bash
   npm start
   ```
   - Access the application at [http://localhost:3000](http://localhost:3000).
## Usage
- **Question 1**: Observe the "Users" box displaying a list of names passed via props.
- **Question 2**: Interact with the "counter" box by clicking the increment, decrement, or reset buttons.
- **Question 3**: Refresh the page to view the mounting phase lifecycle method logs in the browser console.
- **Question 4**: Click the "Update State (For Question 4)" button to trigger and observe the updating phase lifecycle method logs in the console.
## Project Structure
- `src/App.js`: The main component orchestrating all four questions.
- `src/components/`:
  - `UserList.js` and `User.js` for Question 1.
  - `Counter.js` for Question 2.
  - `ComponentA.js` and `ComponentB.js` for Questions 3 and 4.
## Development Notes
- The application operates in development mode with React Strict Mode enabled, which may result in duplicate lifecycle method logs. This is standard behavior and will not impact production.
- Lifecycle method logs can be viewed in the browser console (right-click > Inspect > Console).
- The current setup should produce no warnings or errors.
## Troubleshooting
- **Missing Logs**: Clear the console and perform a hard refresh (Ctrl+Shift+R).
- **Errors**: Review the terminal for any installation or runtime issues.
- **Dependencies**: Ensure Node.js and npm are updated to the recommended versions.
## Contributing
Contributions are welcome. Please fork the repository and submit pull requests for any enhancements or bug fixes.
## License
This project is licensed under the MIT License. For full license details, please refer to the [LICENSE](LICENSE) file included in the repository.

