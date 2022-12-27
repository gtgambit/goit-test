import PropTypes from 'prop-types';
import css from './UserItem.module.css';
import circle from '../../img/cicle.png';
import line from '../../img/line.png';
import logo from '../../img/logo.png';

export const UserItem = ({
  avatar,
  followers,
  tweets,
  isFollowing,
  onFollowUser,
}) => {
  return (
    <li className={css.liItem}>
      <img className={css.logo} src={logo} alt="logo" />
      <div className={css.avatarWrap}>
        <img className={css.line} src={line} alt="line" />
        <img className={css.avatar} src={avatar} alt="avatar" />
        <img className={css.circle} src={circle} alt="circle" />
      </div>
      <div className={css.userInfo}>
        <p className={css.p}>{tweets} Tweets</p>
        <p className={css.p}>
          {new Intl.NumberFormat('en').format(followers)} Followers
        </p>
      </div>
      <button
        type="button"
        onClick={onFollowUser}
        className={isFollowing ? css.active : css.btn}
        isFollowing={isFollowing}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </li>
  );
};
UserItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  onFollowUser: PropTypes.func.isRequired,
};
