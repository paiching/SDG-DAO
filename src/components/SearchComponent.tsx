import React from 'react';
import styles from './SearchComponent.module.scss';

interface SearchComponentProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onChange }) => {
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
