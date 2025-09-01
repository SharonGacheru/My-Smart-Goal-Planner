import React from 'react';
import GoalCard from './GoalCard';

const GoalList = ({ goals, onUpdateGoal, onDeleteGoal }) => {
  if (!goals || goals.length === 0) {
    return <div>No goals found.</div>;
  }
  return (
    <>
      {goals.map(goal => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdateGoal={onUpdateGoal}
          onDeleteGoal={onDeleteGoal}
        />
      ))}
    </>
  );
};

export default GoalList;
