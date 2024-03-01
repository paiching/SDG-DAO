// components/ProposalCard.tsx
import React from 'react';
import styles from './ProposalCard.module.scss'; // Make sure to create this SCSS module

interface ProposalCardProps {
  image: string;
  tag: string;
  description: string;
  requiredFunding: string;
  progressPercentage: number;
  daysRemaining: number;
  proposerIcon: string; // URL to the proposer's icon
  proposerName: string; // Name of the proposer
}

const ProposalCard: React.FC<ProposalCardProps> = ({
  image,
  tag,
  description,
  requiredFunding,
  progressPercentage,
  daysRemaining,
  proposerIcon,
  proposerName,
}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt="Proposal" className={styles.image} />

      <div className={styles.tag}>{tag}</div>
      <div className={styles.proposerInfo}>
        <img src={proposerIcon} alt={proposerName} className={styles.proposerIcon} />
        <span className={styles.proposerName}>{proposerName}</span>
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.funding}>需求資金: {requiredFunding}</div>
      <div className={styles.progressContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
        <span className={styles.progressPercentage}>{progressPercentage}%</span>
      </div>
      <div className={styles.daysRemaining}>剩{daysRemaining} 天</div>
    </div>
  );
};

export default ProposalCard;
