import React from 'react';
// import GoalCard from './GoalsCard';
// import './Goals.css';

const goals = 
[
    { 
        title: 'UPSC CSE - GS', 
        icon: '🏛️' 
    },

    { 
        title: 'IIT JEE', 
        icon: '⚗️' 
    },

    { 
        title: 'NEET UG', 
        icon: '⚕️' 
    },

    { 
        title: 'Bank exams', 
        icon: '💰' 
    },

    { 
        title: 'SSC JE & state AE exams', 
        icon: '📋' 
    },

    { 
        title: 'CAT & other MBA entrance tests', 
        icon: '📄' 
    },

    { 
        title: 'CBSE class 12', 
        icon: '📚' 
    },
    
    { 
        title: 'CA Intermediate', 
        icon: '📟' 
    },
];

const Goals = () => 
{
    return (
        <div className="goals-container">
            <h2>Popular Goals</h2>
            <div className="goals-grid">
                {goals.map((goal, index) => (
                    <GoalCard key={index} title={goal.title} icon={goal.icon} />
                ))}
            </div>
        </div>
    );
};

export default Goals;

