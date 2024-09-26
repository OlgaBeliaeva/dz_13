import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions';
import styles from '../styles/Filter.module.css';

const Filter = ({ setFilter }) => {
  const handleInputChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <input type="text" placeholder="Search users..." onChange={handleInputChange} />
    </div>
  );
};

export default connect(null, { setFilter })(Filter);