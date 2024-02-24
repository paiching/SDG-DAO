// components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const getRandomCount = () => Math.floor(Math.random() * 100) + 1;
const goals = [
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/SDG1-100.jpg', linkUrl: '/no-poverty', count: '20'}
  
  // ... Add other goals here
].map((goal, index) => ({
  ...goal,
  id: index + 1, // Ensuring unique ids
  count: getRandomCount(), // Assigning a random count
  //fund: getRandomCount(),
}));

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {goals.map((goal) => (
        <div key={goal.id} className="card-container"> {/* Use a class for the container */}
          <Card title={goal.title} imageUrl={goal.imageUrl} linkUrl={goal.linkUrl} />
          <div className="card-info"> {/* Assign a class for styling */}
            <div className="text">資金: {goal.id} SDG</div>
            <div className="text">提案數: {goal.count}</div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default CardGrid;
