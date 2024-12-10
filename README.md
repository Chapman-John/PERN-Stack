# PERN-Stack Project

This project utilizes the PERN stack, which combines PostgreSQL, Express, React, and Node.js to create a full-stack application.

## License

This project is dual-licensed under:

- **MIT License**: For more details, see the [MIT License](https://opensource.org/licenses/MIT).
- **GNU General Public License (GPL) v3.0**: For more details, see the [GPL License](https://www.gnu.org/licenses/gpl-3.0.html).

## Installation

To set up this project, you will need to install dependencies for both the server and client components.

### Server Setup 

1. **Initialize your Node.js project**:
    First, you need to initialize a new Node.js project if you haven't already done so. This will create a `package.json` file in your project directory.

    ```bash
    npm init -y
    ```

2. **Install necessary packages**:
    You'll need to install several npm packages that are essential for the server to function. These include Express for the server framework, pg for interacting with PostgreSQL, cors for handling Cross-Origin Resource Sharing, and dotenv for managing environment variables.

    ```bash
    npm install express pg cors dotenv
    ```

### Client Setup

1. **Create a React application**:
    Use Create React App to set up your client application. This tool sets up a new React project with all the configurations and build tools.

    ```bash
    npx create-react-app client
    ```

2. **Navigate to the client directory**:
    Change into the newly created client directory.

    ```bash
    cd client
    ```

3. **Install React Bootstrap and Bootstrap**:
    React Bootstrap provides Bootstrap components as React components, which is handy for integrating Bootstrap styling with the React structure.

    ```bash
    npm install react-bootstrap bootstrap
    ```

## Compilation and Running

### Server

To start the server with automatic reloading, you can use `nodemon`. If you do not have nodemon installed globally, you might need to install it first:

```bash
npm install -g nodemon
```

To run the server with nodemon, execute:

```bash
npx nodemon index.js
```

Client Setup

To compile and start the client application, execute:

```bash
npm start
```

PostgreSQL Database Setup

To start the PostgreSQL database named booksdb, use the appropriate command for your environment. This command varies depending on your system's configuration:

```bash
# start your PostgreSQL database
start booksdb
```

Please adjust the database startup command according to your PostgreSQL installation and environment settings.


This document provides a cohesive guide to setting up all components of your project. If you need any more details or have specific requirements, please provide them, and I can help adjust the instructions accordingly.
