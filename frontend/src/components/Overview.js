import React from 'react';
import '../styles/Overview.css';

const Overview = ({ goals }) => {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + (g.savedAmount || 0), 0);
  const totalTarget = goals.reduce((sum, g) => sum + (g.targetAmount || 0), 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;
  const overdueGoals = goals.filter(g => new Date(g.deadline) < new Date() && g.savedAmount < g.targetAmount).length;
  const warningGoals = goals.filter(g => {
    const daysLeft = Math.ceil((new Date(g.deadline) - new Date()) / (1000 * 60 * 60 * 24));
    return daysLeft <= 30 && daysLeft >= 0 && g.savedAmount < g.targetAmount;
  }).length;

  return (
    <div className="overview-container">
      <div className="overview-item">
        <span className="overview-label">Total Goals</span>
        <span className="overview-value">{totalGoals}</span>
      </div>
      <div className="overview-item">
        <span className="overview-label">Total Saved</span>
        <span className="overview-value">${totalSaved.toLocaleString()}</span>
      </div>
      <div className="overview-item">
        <span className="overview-label">Total Target</span>
        <span className="overview-value">${totalTarget.toLocaleString()}</span>
      </div>
      <div className="overview-item">
        <span className="overview-label">Completed Goals</span>
        <span className="overview-value">{completedGoals}</span>
      </div>
      <div className="overview-item">
        <span className="overview-label">Warning (≤30 days left)</span>
        <span className="overview-value">{warningGoals}</span>
      </div>
      <div className="overview-item">
        <span className="overview-label">Overdue Goals</span>
        <span className="overview-value">{overdueGoals}</span>
      </div>
    </div>
  );
};

export default Overview;
