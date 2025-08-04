import React from 'react';

const PlanCard = ({ plan }) => {
  return (
    <div className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
      <h2 className="plan-title">{plan.name}</h2>
      <p className="plan-price">₹{plan.price}/m</p>
      <ul className="plan-features">
        {plan.features.map((f, idx) => (
          <li key={idx}>✓ {f}</li>
        ))}
      </ul>
      <button className="get-started">Get Started</button>
    </div>
  );
};

export default PlanCard;