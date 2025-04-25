# Expense Tracker

An Expense Tracker web app built with the MERN stack, designed to help users track, organize, and analyze their income and expenses.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features
- User authentication (register, login, logout)
- Add, edit, and delete incomes
- Add, edit, and delete expenses
- View transaction history
- Responsive charts and graphs to visualize income and expenses
- Notifications for user actions and errors
  

![1](https://github.com/user-attachments/assets/e9fa44ec-2536-469b-be44-f138d7c8b269)
![2](https://github.com/user-attachments/assets/bb0eb77a-33ec-4c62-bdf5-14f70d00a4d3)
![3](https://github.com/user-attachments/assets/03257200-d820-4112-8be7-866f3cc2abed)
![4](https://github.com/user-attachments/assets/39c75dc1-ecbf-4c78-816c-8ba617624702)
![5](https://github.com/user-attachments/assets/e46eb11c-6ea7-42d6-8f87-8773e5af9a05)



## Installation
### Prerequisites
- Node.js
- npm or yarn
- MongoDB

## Usage
1. Register a new account or log in with an existing account.
2. Add, edit, and delete incomes and expenses.
3. View the transaction history and visualizations on the dashboard.

## API Endpoints
### Auth
- **POST /api/v1/register**: Register a new user
- **POST /api/v1/login**: Log in an existing user
- **POST /api/v1/logout**: Log out the current user
- **POST /**: Check user authentication status

### Income
- **POST /api/v1/add-income**: Add a new income
- **GET /api/v1/get-incomes**: Get all incomes for the user
- **DELETE /api/v1/delete-income/:id**: Delete an income by ID

### Expense
- **POST /api/v1/add-expense**: Add a new expense
- **GET /api/v1/get-expenses**: Get all expenses for the user
- **DELETE /api/v1/delete-expense/:id**: Delete an expense by ID
