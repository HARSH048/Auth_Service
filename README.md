# AUTH_SERVICE

This is the README file for the backend project that implements token-based authorization and authentication using MySQL database, Express framework, and JavaScript with JWT.The project follows the MVC (Model-View-Controller) architecture.

## Project Description

This project is a backend implementation that provides authorization and authentication functionality using web tokens (JWT). It utilizes a MySQL database for storing user information and employs the Express framework with JavaScript for handling HTTP requests and routing.

## Tech Stack

**Language:** javascript

**Framework:** Node, Express

**Database** MySQL

## Token-Based Authorization

This project implements token-based authorization using JSON Web Tokens (JWT). Here's how it works:

1.When a user successfully logs in, the server generates a JWT containing the user's information and signs it with a secret key.

2.The server sends the JWT back to the client, which stores it (e.g., in local storage or cookies).

3.For protected routes, the client includes the JWT in the request headers (typically in the Authorization header) for each subsequent request.

4.The server verifies the JWT signature and decodes the user information from it.

5.If the verification is successful, the server grants access to the requested resource; otherwise, it returns an error.

## MVC Architecture

This project follows the MVC (Model-View-Controller) architectural pattern. Here's a brief overview:

Model: Represents the data and business logic of the application. It interacts with the database and handles data operations.

View: Handles the presentation layer of the application. In this project, it could be the frontend or any client consuming the API.

Controller: Receives requests from the client, interacts with the model to fetch or manipulate data, and prepares the response to send back to the client.

The MVC architecture promotes separation of concerns, making the codebase more organized, modular, and easier to maintain.

## Authentication Process

The authentication process involves validating the user's credentials and issuing a token for subsequent authorization. Here's an overview of the authentication process:

The client sends a POST request to the authentication endpoint with the user's credentials (e.g., username and password).

The server verifies the provided credentials against the stored user data.

If the credentials are valid, the server generates a JWT for the user and sends it back to the client.

The client stores the token and includes it in the headers for future requests.

## Usage

API Endpoints:-

POST /api/v1/signup: Register a new user by providing a username and password in the request body.

POST /api/v1/signin: Log in with an existing user by providing a username and password in the request body. This endpoint returns a JWT if the credentials are valid.

GET /api/v1/isAuthenticated: A protected route that requires authentication. Include the JWT obtained from the login endpoint in the Authorization header as a Bearer token.

## Run Locally

Clone the project

```bash
  git clone https://github.com/HARSH048/Auth_Service.git
```

```bash
  cd Auth_Service
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
