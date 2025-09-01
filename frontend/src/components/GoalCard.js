import React from 'react';
import ProgressBar from './ProgressBar';
import '../styles/GoalCard.css';

const GoalCard = ({ goal, onUpdateGoal, onDeleteGoal }) => {
  if (!goal) return null;

  const { name, targetAmount, savedAmount, category, deadline } = goal;
  const remainingAmount = Math.max(targetAmount - savedAmount, 0);

  // Status logic (completed, warning, overdue, normal)
  const deadlineDate = new Date(deadline);
  const now = new Date();
  const daysLeft = Math.ceil((deadlineDate - now) / (1000 * 60 * 60 * 24));
  let status = 'normal';
  if (savedAmount >= targetAmount) status = 'completed';
  else if (daysLeft < 0) status = 'overdue';
  else if (daysLeft <= 30) status = 'warning';

  return (
    <div className="goal-card">
      <div className="goal-header">
        <h2 className="goal-name">{name}</h2>
        <div className="goal-actions">
          <button className="deposit-btn" onClick={() => onUpdateGoal(goal.id, { deposit: true })}>Deposit</button>
          <button className="delete-btn" onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </div>
      </div>
      <div className="goal-details">
        <div className="goal-info">
          <span className="category">{category}</span>
          <span className={`status ${status}`}>{status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
        <div className="goal-amounts">
          <div className="amount-item">
            <label>Target</label>
            <span className="target-amount">${targetAmount.toLocaleString()}</span>
          </div>
          <div className="amount-item">
            <label>Saved</label>
            <span className="saved-amount">${savedAmount.toLocaleString()}</span>
          </div>
          <div className="amount-item">
            <label>Remaining</label>
            <span className="remaining-amount">${remainingAmount.toLocaleString()}</span>
          </div>
        </div>
        <div className="progress-section">
          <ProgressBar current={savedAmount} target={targetAmount} />
        </div>
        <div className="deadline-info">
          Deadline: {deadline} ({daysLeft >= 0 ? `${daysLeft} days left` : 'Overdue'})
        </div>
      </div>
    </div>
  );
};

export default GoalCard;