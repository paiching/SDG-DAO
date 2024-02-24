import React from 'react';
import styles from './SearchComponent.module.scss'; // Make sure to define styles for your search component

const SearchComponent = ({ onChange }) => {
  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search proposals..."
      onChange={onChange}
    />
  );
};

export default SearchComponent;
