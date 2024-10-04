# My Task Manager

Welcome to **My Task Manager**, a simple task management application built with React. This app allows you to manage your daily tasks, mark them as complete, and delete them as needed. The tasks are saved locally using `localStorage`, so your progress will be saved even if you refresh the page.

## Features
- **Add Tasks**: Enter a task in the input field and click the "Add Task" button.
- **Mark Tasks as Complete**: Click the checkbox next to each task to mark it as completed.
- **Delete Tasks**: Remove tasks by clicking the "Delete" button next to each task.
- **Persistent Data**: Tasks are saved in `localStorage` so they persist after refreshing the page.

## Project Structure

```plaintext
my-task-manager/
│
├── public/
│   └── index.html      # The main HTML file
├── src/
│   ├── App.js          # The main React component for the task manager
│   ├── App.css         # Styles for the task manager
│   ├── index.js        # Entry point for the React app
│   └── index.html      # The HTML template for the project
└── README.md           # Project documentation
```

## How to Run the Project

### Prerequisites
To run this project, you need to have Node.js and npm installed. If you don't have these installed, you can download and install them from [Node.js official website](https://nodejs.org/).

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/samyam81/React-Third-TodoList/tree/main
   cd my-task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **CSS**: For styling the application.
- **localStorage**: For persisting tasks between sessions.

