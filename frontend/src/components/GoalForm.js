import React, { useState } from 'react';
import '../styles/GoalForm.css';

const initialState = {
  name: '',
  targetAmount: '',
  savedAmount: '',
  category: '',
  deadline: '',
};

const GoalForm = ({ onAddGoal }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.targetAmount || !form.category || !form.deadline) return;
    onAddGoal({
      ...form,
      targetAmount: parseFloat(form.targetAmount),
      savedAmount: parseFloat(form.savedAmount) || 0,
      createdAt: new Date().toISOString().slice(0, 10),
    });
    setForm(initialState);
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Goal Name" value={form.name} onChange={handleChange} required />
      <input name="targetAmount" type="number" placeholder="Target Amount" value={form.targetAmount} onChange={handleChange} required />
      <input name="savedAmount" type="number" placeholder="Initial Saved Amount" value={form.savedAmount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input name="deadline" type="date" placeholder="Deadline" value={form.deadline} onChange={handleChange} required />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
