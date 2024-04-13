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



- server: npm init and npm i express pg cors dotenv 
- client: npx create-react-app client and npm i react-bootstrap bootstrap

compile
- server: npx nodemon index.js
- client: npm start
- postgres: start booksdb
