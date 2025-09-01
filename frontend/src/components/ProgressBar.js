import React from 'react';

const ProgressBar = ({ current, target, height = "18px" }) => {
  // Calculate the percentage completed
  const percentage = target > 0 ? Math.min((current / target) * 100, 100) : 0;
  
  // Determine color based on progress
  const getProgressColor = () => {
    if (percentage >= 100) return 'linear-gradient(90deg,#4f8cff,#6dd5ed)'; // Green for completed
    if (percentage >= 75) return 'linear-gradient(90deg,#6dd5ed,#4f8cff)';  // Light green
    if (percentage >= 50) return '#FFC107';  // Yellow
    if (percentage >= 25) return '#FF9800';  // Orange
    return '#F44336'; // Red for low progress
  };

  return (
    <div className="progress-container" style={{ width: '100%' }}>
      <div 
        className="progress-bar-background"
        style={{
          width: '100%',
          height: height,
          background: '#e3e8ee',
          borderRadius: '9px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          className="progress-bar-fill"
          style={{
            width: `${percentage}%`,
            height: '100%',
            background: getProgressColor(),
            transition: 'width 0.3s',
            borderRadius: '9px'
          }}
        />
        <div 
          className="progress-text"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '12px',
            fontWeight: '700',
            color: percentage > 50 ? '#fff' : '#2c3e50',
            textShadow: percentage > 50 ? '1px 1px 2px rgba(0,0,0,0.13)' : 'none'
          }}
        >
          {percentage.toFixed(1)}%
        </div>
      </div>
      <div className="progress-amounts" style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#6b7a8f',
        marginTop: '4px'
      }}>
        <span>${current.toLocaleString()}</span>
        <span>${target.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProgressBar;