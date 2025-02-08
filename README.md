# Band@it ECommerce

## Project Overview

Bandit is an eCommerce platform built with React and Vite. It features three types of users:

1. Buyer: Can browse products, add/remove items from the cart, and proceed to checkout.

2. Vendor: Can list products for sale.

3. Admin: Has access to manage users and products.

During the signup process, users can select between Buyer or Vendor roles. The application tracks the cart items count, allowing users to add or remove items dynamically.

Bandit emulates RESTful behavior by fetching and posting data to a db.json server using JSON Server.

## Set Up Instructions

### Prerequisites

- Ensure you have the following installed:

- Node.js (LTS recommended)

- Git

## Installation

1.  Clone the repository

  <code>
    git clone git@github.com:Walter1G/bandatit.git    
    </code>
    <br>
    2. Install dependancy <br>
    <code>npm install </code>
    <br>

## Running Instructions

### Start Development Server

Run the following commands to start the application
<code>npm run dev</code> <br>
This will start the development server and make the application available at <http://localhost:5173>

### Start Jsonction Server

<code>
npx json-server --watch db.json --port 8000
</code>
<br>

This will start a mock REST API at http://localhost:8000/.



## Dependancies

The project relies on the following dependencies:

- React (Frontend framework)

- React-Router-Dom (Client-side routing)

- JSON Server (Mock backend for REST API)

- Vite (Development environment and build tool)

To install all dependencies, run:

<code >npm install</code> <br>

### Contributing

Feel free to submit issues or pull requests to improve the project!