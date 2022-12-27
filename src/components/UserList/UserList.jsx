import css from './UserList.module.css';
import PropTypes from 'prop-types';
import { UserItem } from '../UserItem/UserItem';

export const UserList = ({ users, onFollowUser }) => {
  return (
    <ul className={css.userList}>
      {Array.isArray(users) &&
        users.map(({ id, tweets, followers, avatar, isFollowing }) => (
          <UserItem
            key={id}
            avatar={avatar}
            followers={followers}
            isFollowing={isFollowing}
            onFollowUser={() => onFollowUser(id)}
            tweets={tweets}
          />
        ))}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  onFollowUser: PropTypes.func,
};
