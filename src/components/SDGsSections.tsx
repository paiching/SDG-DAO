// components/SDGsSections.tsx
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './SDGsSection.module.scss'; // Import the CSS module

interface Goal {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  count: string;
}

// Populate this array with actual data for each SDG
const goals: Goal[] = [
    { id: 1, title: '消除貧窮', imageUrl: '/icons/goal-1/GOAL_1_PRIMARY_ICON/GOAL_1_SVG/TheGlobalGoals_Icons_Color_Goal_1.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '消除飢餓', imageUrl: '/icons/goal-2/GOAL_2_PRIMARY_ICON/GOAL_2_SVG/TheGlobalGoals_Icons_Color_Goal_2.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '健康與福祉', imageUrl: '/icons/goal-3/GOAL_3_PRIMARY_ICON/GOAL_3_SVG/TheGlobalGoals_Icons_Color_Goal_3.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '教育品質', imageUrl: '/icons/goal-4/GOAL_4_PRIMARY_ICON/GOAL_4_SVG/TheGlobalGoals_Icons_Color_Goal_4.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '性別平等', imageUrl: '/icons/goal-5/GOAL_5_PRIMARY_ICON/GOAL_5_SVG/TheGlobalGoals_Icons_Color_Goal_5.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '淨水與衛生', imageUrl: '/icons/goal-6/GOAL_6_PRIMARY_ICON/GOAL_6_SVG/TheGlobalGoals_Icons_Color_Goal_6.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '可負擔能源', imageUrl: '/icons/goal-7/GOAL_7_PRIMARY_ICON/GOAL_7_SVG/TheGlobalGoals_Icons_Color_Goal_7.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '就業與經濟成長', imageUrl: '/icons/goal-8/GOAL_8_PRIMARY_ICON/GOAL_8_SVG/TheGlobalGoals_Icons_Color_Goal_8.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '工業創新基礎建設', imageUrl: '/icons/goal-9/GOAL_9_PRIMARY_ICON/GOAL_9_SVG/TheGlobalGoals_Icons_Color_Goal_9.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '減少不平等', imageUrl: '/icons/goal-10/GOAL_10_PRIMARY_ICON/GOAL_10_SVG/TheGlobalGoals_Icons_Color_Goal_10.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '永續城市', imageUrl: '/icons/goal-11/GOAL_11_PRIMARY_ICON/GOAL_11_SVG/TheGlobalGoals_Icons_Color_Goal_11.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '責任消費與生產', imageUrl: '/icons/goal-12/GOAL_12_PRIMARY_ICON/GOAL_12_SVG/TheGlobalGoals_Icons_Color_Goal_12.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '氣候行動', imageUrl: '/icons/goal-13/GOAL_13_PRIMARY_ICON/GOAL_13_SVG/TheGlobalGoals_Icons_Color_Goal_13.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '海洋生態', imageUrl: '/icons/goal-14/GOAL_14_PRIMARY_ICON/GOAL_14_SVG/TheGlobalGoals_Icons_Color_Goal_14.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '陸地生態', imageUrl: '/icons/goal-15/GOAL_15_PRIMARY_ICON/GOAL_15_SVG/TheGlobalGoals_Icons_Color_Goal_15.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '和平與正義制度', imageUrl: '/icons/goal-16/GOAL_16_PRIMARY_ICON/GOAL_16_SVG/TheGlobalGoals_Icons_Color_Goal_16.svg', linkUrl: '/no-poverty', count: '20'},
  { id: 1, title: '全球夥伴', imageUrl: '/icons/goal-17/GOAL_17_PRIMARY_ICON/GOAL_17_SVG/TheGlobalGoals_Icons_Color_Goal_17.svg', linkUrl: '/no-poverty', count: '20'}
  // ... (populate this array with real goal data)
];

const SDGsSection: React.FC = () => {
  const router = useRouter();

  const handleSDGClick = (linkUrl: string) => {
    router.push(linkUrl);
  };

  return (
    <section className={styles.sdgsSection}>
      <div className={styles.sdgsTitle}>SDGs (Sustainable Development Goals) 聯合國永續發展目標</div>
      <div>
      <div className={styles.sdgsContainer}>
        {goals.map((goal, index) => (
          <div key={index} className={styles.sdgCard} >
            <img src={goal.imageUrl} alt={goal.title} className="{styles.sdgIcon} block p-2 text-center transition duration-300 ease-in-out transform hover:scale-105" />
            <p className={styles.sdgTitle}>{goal.title}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};


export default SDGsSection;
