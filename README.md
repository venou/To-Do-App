# React To-Do List App 📝

A clean, responsive, and persistent To-Do List application built with React and styled with Tailwind CSS. This app allows users to add, delete, and mark tasks as complete. All tasks are saved to the browser's `localStorage`, ensuring your list is preserved across sessions.

## 🚀 Features

- **Add Tasks**: Easily add new tasks to your list.
- **Delete Tasks**: Remove tasks you no longer need.
- **Toggle Completion**: Mark tasks as complete or incomplete with a single click.
- **Persistent Storage**: Your to-do list is automatically saved in the browser's `localStorage`, so your tasks are safe even after you close the tab.
- **Responsive Design**: A mobile-first design that looks great on all devices, from phones to desktops.
- **Clean UI**: A simple and intuitive user interface.

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)
- **Persistence**: Browser Local Storage API

## ⚙️ Getting Started

To get this project up and running on your local machine, follow these steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd your-repository-name
    ```

3.  **Install all dependencies:**

    ```bash
    npm install
    ```

## 🏃‍♂️ Usage

After installing the project, you can run it on the development server:

```bash
npm start
```

This will run the app in development mode. Open your browser and navigate to [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view it.

## 📂 File Structure

The main file structure of the project is as follows:

```
src/
├── assets/
│   ├── delete.png
│   ├── not_tick.png
│   ├── tick.png
│   └── todo_icon.png
├── components/
│   ├── Todo.js          # (Main component, manages state and logic)
│   └── TodoItems.js     # (Renders a single to-do item)
├── App.js               # (Main app component)
└── index.js             # (Entry point of the application)
```

## 🔧 How It Works

- **`Todo.js` (Parent Component)**

  - This component manages the list of all to-do items using the `useState` hook.
  - It loads data from `localStorage` on initial render and saves any changes back to `localStorage` using the `useEffect` hook.
  - All the core logic for adding (`add`), deleting (`deleteTodo`), and toggling (`toggle`) tasks resides within this component.

- **`TodoItems.js` (Child Component)**

  - This is a "presentational" component responsible for displaying a single to-do item.
  - It receives its data (`text`, `isComplete`) and functions (`deleteTodo`, `toggle`) as props from its parent (`Todo.js`).
  - When a user interacts with an item (e.g., clicks the delete icon), it calls the function passed down from the parent, which then updates the central state.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
