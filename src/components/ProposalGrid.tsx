// components/ProposalGrid.tsx
import React from 'react';
import ProposalCard from './ProposalCard';
import styles from './ProposalGrid.module.scss'; // Make sure to create this SCSS module

interface Proposal {
  image: string;
  tag: string;
  description: string;
  requiredFunding: string;
  progressPercentage: number;
  daysRemaining: number;
}

interface ProposalGridProps {
  proposals: Proposal[];
}

const ProposalGrid: React.FC<ProposalGridProps> = ({ proposals }) => {
    return (
      <div>
        <h2 className={styles.title}>進行中的提案</h2>
        <div className={styles.grid}>
          {proposals.map((proposal, index) => (
            <ProposalCard key={index} {...proposal} />
          ))}
        </div>
        <button className={styles.loadMoreButton}>Load More</button>
      </div>
    );
  };

export default ProposalGrid;
