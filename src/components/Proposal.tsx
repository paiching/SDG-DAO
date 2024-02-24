// components/Proposal.tsx
import React from 'react';
import styles from '../styles/NoPoverty.module.css'; 

export type ProposalType = {
  id: string; 
  title: string;
  description: string;
};


const Proposal: React.FC<{ proposal: { id: string; title: string; description: string } }> = ({ proposal }) => {
  return (
    <div className={styles.proposal}>
      <h3>{proposal.title}</h3>
      <p>{proposal.id}</p>
      <p>{proposal.description}</p>
      {/* Add more details here */}
    </div>
  );
};

export default Proposal;
