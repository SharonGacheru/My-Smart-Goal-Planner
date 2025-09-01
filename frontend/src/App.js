import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoalList from './components/GoalList';
import GoalForm from './components/GoalForm';
import Overview from './components/Overview';
import './styles/App.css';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals from backend
  useEffect(() => {
    axios.get('http://localhost:3001/goals')
      .then(res => setGoals(res.data))
      .catch(() => setGoals([]));
  }, []);

  // Add new goal
  const handleAddGoal = (goalData) => {
    return axios.post('http://localhost:3001/goals', goalData)
      .then(res => setGoals([...goals, res.data]));
  };

  // Update goal (deposit logic)
  const handleUpdateGoal = (id, updates) => {
    if (updates.deposit) {
      // Example: prompt for deposit amount
      const amount = parseFloat(prompt('Enter deposit amount:'));
      if (!amount || amount <= 0) return;
      const goal = goals.find(g => g.id === id);
      const newSavedAmount = goal.savedAmount + amount;
      return axios.patch(`http://localhost:3001/goals/${id}`, { savedAmount: newSavedAmount })
        .then(res => {
          setGoals(goals.map(g => g.id === id ? res.data : g));
        });
    }
    // ...other update logic...
  };

  // Delete goal
  const handleDeleteGoal = (id) => {
    return axios.delete(`http://localhost:3001/goals/${id}`)
      .then(() => setGoals(goals.filter(g => g.id !== id)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Goal Planner</h1>
        <p>Track and manage your savings goals</p>
      </header>
      <main className="App-main">
        <Overview goals={goals} />
        <GoalForm onAddGoal={handleAddGoal} />
        <div className="goals-container">
          <GoalList
            goals={goals}
            onUpdateGoal={handleUpdateGoal}
            onDeleteGoal={handleDeleteGoal}
          />
        </div>
      </main>
    </div>
  );
}

export default App;