// pages/no-poverty.tsx
import React, { useState, useEffect } from 'react';
import Proposal, { ProposalType } from '../components/Proposal';
import styles from '../styles/NoPoverty.module.css';
import Card from '@/components/Card';

const NoPovertyPage: React.FC = () => {
  const [proposals, setProposals] = useState<ProposalType[]>([]);
  const [visibleProposals, setVisibleProposals] = useState(5);
  const [tab, setTab] = useState<'form' | 'display'>('display');
  const [proposalForm, setProposalForm] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('/proposals.json')
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposals:', error));
  }, []);

  const loadMore = () => {
    setVisibleProposals((prevValue) => prevValue + 5);
  };

  const handleFormChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProposalForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Assuming a function to add a new proposal is implemented
    // Add the proposal to the list and reset the form
    // ...
  };

  return (
    <section className={styles.content}>
      <div className={styles.headerSection}>
        <div className={styles.iconContainer}>
          <Card imageUrl='/icons/goal-1/GOAL_1_PRIMARY_ICON/GOAL_1_SVG/TheGlobalGoals_Icons_Color_Goal_1.svg'
            title='No Poverty Icon'
            linkUrl=''
          />
        </div>
        <div className={styles.titleAndDescription}>
          <h1 className={styles.header}>No Poverty</h1>
          <p className={styles.details}>Details about the No Poverty goal...</p>
        </div>
      </div>
      
      <div className={styles.tabs}>
        <button
          onClick={() => setTab('form')}
          className={tab === 'form' ? styles.activeTab : styles.tab}
        >
          Submit Proposal
        </button>
        <button
          onClick={() => setTab('display')}
          className={tab === 'display' ? styles.activeTab : styles.tab}
        >
          View Proposals
        </button>
      </div>
      
      {tab === 'form' ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={proposalForm.title}
              onChange={handleFormChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description" className={styles.label}>Description</label>
            <textarea
              id="description"
              name="description"
              value={proposalForm.description}
              onChange={handleFormChange}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      ) : (
        <div className={styles.proposalWall}>
          {proposals.slice(0, visibleProposals).map((proposal) => (
            <Proposal key={proposal.id} proposal={proposal} />
          ))}
          {proposals.length === 0 && <p className={styles.noProposals}>No proposals</p>}
          {visibleProposals < proposals.length && (
            <button className={styles.loadMoreButton} onClick={loadMore}>Load More</button>
          )}
        </div>
      )}
    </section>
  );
};

export default NoPovertyPage;
