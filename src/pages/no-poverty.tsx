import React, { useState, useEffect } from 'react';
import Proposal from '../components/Proposal';
import Card from '@/components/Card';
import styles from '../styles/NoPoverty.module.scss'; // Ensure you have the corresponding CSS module file
import ProposalForm from '@/components/ProposalForm';
import SearchComponent from '@/components/SearchComponent';

const NoPovertyPage: React.FC = () => {
  const [proposals, setProposals] = useState([]);
  const [visibleProposals, setVisibleProposals] = useState(5);
  const [proposalForm, setProposalForm] = useState({ title: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch the proposals from the JSON file or API
    fetch('/proposals.json')
      .then((response) => response.json())
      .then((data) => setProposals(data))
      .catch((error) => console.error('Error fetching proposals:', error));
  }, []);

  const loadMore = () => {
    setVisibleProposals((prevValue) => prevValue + 5);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProposalForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(proposalForm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProposals = proposals.filter(
    (proposal) =>
      proposal.title.toLowerCase().includes(searchTerm) ||
      proposal.id.toString().includes(searchTerm) ||
      proposal.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      <section className={styles.leftColumn}>
        <Card
          imageUrl='/icons/goal-1/GOAL_1_PRIMARY_ICON/GOAL_1_SVG/TheGlobalGoals_Icons_Color_Goal_1.svg'
          title='No Poverty Icon'
          linkUrl=''
        />
      <ProposalForm></ProposalForm>
      </section>
      
      <section className={styles.rightColumn}>
        <div className={styles.headerSection}>
          {/* <h1 className={styles.header}>No Poverty</h1>
          <p className={styles.details}>Details about the No Poverty goal...</p> */}
          <SearchComponent onChange={handleSearchChange}></SearchComponent>
        </div>
        <div className={styles.proposalWall}>
          {proposals.slice(0, visibleProposals).map((proposal, index) => (
            <Proposal key={index} proposal={proposal} />
          ))}
          {visibleProposals < proposals.length && (
            <button className={styles.loadMoreButton} onClick={loadMore}>Load More</button>
          )}
        </div>
      </section>
    </div>
  );
};

export default NoPovertyPage;
