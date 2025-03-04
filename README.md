# React Code Debugger

## Description

React Code Debugger is a powerful debugging tool for React applications that allows developers to debug their code based on the specified language input. It provides an intuitive interface for setting breakpoints, inspecting variables, and stepping through code to easily identify and fix issues.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and set up the React Code Debugger, follow these steps:

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/react-code-debugger.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-code-debugger
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and add your backend URL:
    ```plaintext
    REACT_APP_BACKEND_URL=http://localhost:5000
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the `backend` directory and add your GROQ API key:
    ```plaintext
    GROQ_API_KEY=your_groq_api_key
    ```

## Usage

To use the React Code Debugger, follow these steps:

### Start the Backend Server

1. Start the backend server:
    ```bash
    npm start
    ```
2. The backend server will run on `http://localhost:5000`.

### Start the Frontend Application

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

### Debugging Code

1. Select the language input for debugging.
2. Paste your code in the provided text area.
3. Click the "Submit" button to start debugging.
4. View the debug result and suggestions for improvements.

## Features

- **Breakpoints**: Set breakpoints to pause the execution of the program at specific lines of code.
- **Step Execution**: Execute the code line-by-line (step into, step over, step out) to observe the program's flow.
- **Variable Inspection**: Inspect and modify the values of variables during program execution.
- **Call Stack**: View the call stack to understand the sequence of function calls leading up to a specific point.
- **Language Support**: Supports debugging for multiple programming languages.

## Architecture

### Frontend

- **React**: The frontend is built using React.
- **Socket.IO**: Used for real-time communication with the backend.
- **Axios**: Used for making HTTP requests to the backend.

### Backend

- **Express**: The backend is built using Express.
- **Socket.IO**: Used for real-time communication with the frontend.
- **Axios**: Used for making HTTP requests to the GROQ API.

## Contributing

We welcome contributions to the React Code Debugger project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
