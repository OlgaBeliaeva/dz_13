import React from 'react';
import styles from '../styles/UserItem.module.css';

const UserItem = ({ user }) => {
  return (
    <div className={styles.userItem}>
      {user.name}
    </div>
  );
};

export default UserItem;