# Employee Dashboard

A React app with a dashboard of users fetched from an API and an employee form.

## Features
- Navbar with Home and Employee Form routes (React Router)
- Dashboard fetching data from https://jsonplaceholder.typicode.com/users (id, name, email)
- Table / card view toggle, loading spinner and error handling
- Employee form (Name, Designation, Location, Salary) with validation
- Submitted entries shown below the form (frontend only, no POST)
- 404 page for unknown routes
- Styled with Bootstrap

## Tech Stack
React (Vite), React Router, Bootstrap

## Run Locally
```bash
npm install
npm run dev
```
Then open the URL shown in the terminal (usually http://localhost:5173).

## Routes
| Path | Page |
| --- | --- |
| `/` | Home / Employee Dashboard |
| `/employee-form` | Employee Form |
| `*` | 404 Not Found |

## Live Demo
Add your deployed link here.
