// pages/no-poverty.tsx
import React, { useState, useEffect } from 'react';
import Proposal, { ProposalType } from '../components/Proposal';
import styles from '../styles/NoPoverty.module.css';

const NoPovertyPage: React.FC = () => {
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const [visibleProposals, setVisibleProposals] = useState(5);
  
  useEffect(() => {
    // Fetch the proposals JSON
    fetch('/proposals.json')
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposals:', error));
  }, []);

  const loadMore = () => {
    setVisibleProposals((prevValue) => prevValue + 5);
  };

// Using CSS Modules, you must reference class names through the `styles` object.
return (
  <section className={styles.content}>
  <h1 className={styles.header}>No Poverty</h1>
  <p className={styles.details}>Details about the No Poverty goal...</p>
  <div className={styles['proposal-wall']}>
    {proposals.slice(0, visibleProposals).map((proposal, index) => (
      <Proposal key={proposal.id} proposal={proposal} />
    ))}
  </div>
  {proposals.length === 0 && <p>No proposals</p>}
  {visibleProposals < proposals.length && (
    <button className={styles.myButton} onClick={loadMore}>Load More</button>
  )}
</section>
);

};

export default NoPovertyPage;
