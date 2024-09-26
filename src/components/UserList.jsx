import styles from '../styles/UserList.module.css';
import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

function UserList({ users, filter }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.userListContainer}> {/* Применение стиля контейнера */}
      {filteredUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);