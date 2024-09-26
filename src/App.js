import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import styles from './App.module.css';


const App = () => {
  return (
    <div className={styles.app}>
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;
