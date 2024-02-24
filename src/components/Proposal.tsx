import React from 'react';
import styles from '../styles/NoPoverty.module.scss'; 

export type ProposalType = {
  id: string; 
  title: string;
  description: string;
  amountRaised: number;
  goalAmount: number;
  supporters: number;
};

const Proposal: React.FC<{ proposal: ProposalType }> = ({ proposal }) => {
  const progress = (proposal.amountRaised / proposal.goalAmount) * 100; // Calculate the percentage of the goal reached

  return (
    <div className={styles.proposal}>
      <h2>{proposal.title}</h2>
      <p>{proposal.description}</p>
      {/* Fundraising progress and supporters */}
      <div className={styles.fundraisingInfo}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }}></div>
        </div>
        <div className={styles.fundraisingDetails}>
          <span>目標 {proposal.amountRaised}/{proposal.goalAmount} SDG</span>
          <span>{progress.toFixed(2)}%</span>
          <span>{proposal.supporters} 人支持</span>
        </div>
      </div>
      <button className={styles.readMoreButton}>Read more</button>
    </div>
  );
};

export default Proposal;
