import React from "react";
import "./MembershipPlans.css";

const plans = [
  {
    title: "Basic",
    price: "$2,990/m",
    description: "One request at a time. Pause or cancel anytime.",
    features: [
      "One request at a time",
      "Average 48 hour delivery",
      "Unlimited brands",
      "Unlimited users",
      "Easy credit-card payments",
      "Pause or cancel anytime",
    ],
    button: "Get Started",
    bgClass: "plan-card",
    buttonClass: "plan-button button-default",
  },
  {
    title: "Pro",
    price: "$2,990/m",
    description: "Two request at a time. Pause or cancel anytime.",
    features: [
      "Two request at a time",
      "Average 48 hour delivery",
      "Unlimited brands",
      "Unlimited users",
      "Easy credit-card payments",
      "Pause or cancel anytime",
    ],
    button: "Get Started",
    bgClass: "plan-card",
    buttonClass: "plan-button button-default",
  },
  {
    title: "Basic + Framer",
    price: "$3,990/m",
    description: "For those in need of design and front-end development.",
    features: [
      "One request at a time",
      "Framer development",
      "Average 72 hour delivery",
      "Support and maintenance.",
      "Pause or cancel anytime",
    ],
    button: "Get Started",
    bgClass: "plan-card bg-gradient",
    buttonClass: "plan-button button-white",
  },
];

const MembershipPlans = () => {
  return (
    <div className="membership-section">
      <h1 className="membership-title">Memberships plans.</h1>
      <p className="membership-subtitle">
        Choose a plan that's right for you...
      </p>
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={plan.bgClass}>
            <div>
              <h2 className="plan-title">{plan.title}</h2>
              <p className="plan-price">{plan.price}</p>
              <p className="plan-desc">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span>✅</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className={plan.buttonClass}>{plan.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipPlans;
