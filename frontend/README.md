# Smart Goal Planner

Smart Goal Planner is a web application to help you track and manage your savings goals.  
You can create, view, update, and delete financial goals, monitor your progress, and visualize your savings journey.

## Features

- Add new savings goals with target amount, category, and deadline
- Track saved and remaining amounts for each goal
- Deposit money towards goals
- Visual progress bars and status indicators (completed, warning, overdue)
- Overview dashboard with total stats

## How to Run

### 1. Install dependencies

Open a terminal in the `frontend` directory and run:

```
npm install
```

### 2. Start the backend (JSON server)

Open a second terminal in the `frontend` directory and run:

```
npx json-server --watch ../backend/db.json --port 3001
```

This will start a mock backend API at `http://localhost:3001`.

### 3. Start the frontend React app

In the `frontend` directory, run:

```
npm start
```

This will open the app at [http://localhost:3000](http://localhost:3000).

## Usage

- Add a new goal using the form at the top.
- View all your goals in the dashboard.
- Click "Deposit" on a goal to add money towards it.
- Click "Delete" to remove a goal.
- The overview section shows total goals, saved amount, targets, and status counts.

## Troubleshooting

If you see the error `'react-scripts' is not recognized as an internal or external command` when running `npm start`, run:

```
npm install react-scripts --save
```

Then try `npm start` again.

If you see ESLint errors about missing configs, run:

```
npm install --save-dev eslint-config-react-app
```

## Project Structure

- `src/` - React frontend code
- `backend/db.json` - Mock database for JSON server

## License

MIT
```
npm install react-scripts --save
```

Then try `npm start` again.


