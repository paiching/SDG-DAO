// components/CardGrid.tsx
import React from 'react';
import Card from './Card';

const getRandomCount = () => Math.floor(Math.random() * 100) + 1;
const goals = [
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-1/GOAL_1_PRIMARY_ICON/GOAL_1_SVG/TheGlobalGoals_Icons_Color_Goal_1.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-2/GOAL_2_PRIMARY_ICON/GOAL_2_SVG/TheGlobalGoals_Icons_Color_Goal_2.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-3/GOAL_3_PRIMARY_ICON/GOAL_3_SVG/TheGlobalGoals_Icons_Color_Goal_3.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-4/GOAL_4_PRIMARY_ICON/GOAL_4_SVG/TheGlobalGoals_Icons_Color_Goal_4.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-5/GOAL_5_PRIMARY_ICON/GOAL_5_SVG/TheGlobalGoals_Icons_Color_Goal_5.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-6/GOAL_6_PRIMARY_ICON/GOAL_6_SVG/TheGlobalGoals_Icons_Color_Goal_6.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-7/GOAL_7_PRIMARY_ICON/GOAL_7_SVG/TheGlobalGoals_Icons_Color_Goal_7.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-8/GOAL_8_PRIMARY_ICON/GOAL_8_SVG/TheGlobalGoals_Icons_Color_Goal_8.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-9/GOAL_9_PRIMARY_ICON/GOAL_9_SVG/TheGlobalGoals_Icons_Color_Goal_9.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-10/GOAL_10_PRIMARY_ICON/GOAL_10_SVG/TheGlobalGoals_Icons_Color_Goal_10.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-11/GOAL_11_PRIMARY_ICON/GOAL_11_SVG/TheGlobalGoals_Icons_Color_Goal_11.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-12/GOAL_12_PRIMARY_ICON/GOAL_12_SVG/TheGlobalGoals_Icons_Color_Goal_12.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-13/GOAL_13_PRIMARY_ICON/GOAL_13_SVG/TheGlobalGoals_Icons_Color_Goal_13.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-14/GOAL_14_PRIMARY_ICON/GOAL_14_SVG/TheGlobalGoals_Icons_Color_Goal_14.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-15/GOAL_15_PRIMARY_ICON/GOAL_15_SVG/TheGlobalGoals_Icons_Color_Goal_15.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-16/GOAL_16_PRIMARY_ICON/GOAL_16_SVG/TheGlobalGoals_Icons_Color_Goal_16.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: 'No Poverty', imageUrl: '/icons/goal-17/GOAL_17_PRIMARY_ICON/GOAL_17_SVG/TheGlobalGoals_Icons_Color_Goal_17.svg', linkUrl: '/no-poverty', count: '20'}
  
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
            {/* <div className="text">資金: {goal.id} SDG</div>
            <div className="text">提案數: {goal.count}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
};


export default CardGrid;
