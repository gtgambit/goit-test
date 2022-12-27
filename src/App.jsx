import { Component } from 'react';
import users from './data/users';
import { UserList } from './components/UserList/UserList';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    followers: JSON.parse(localStorage.getItem('followers')) ?? users,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.followers !== this.state.followers) {
      localStorage.setItem('followers', JSON.stringify(this.state.followers));
    }
  }

  onFollowUser = userId => {
    this.setState(prevState => ({
      followers: prevState.followers.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isFollowing: !user.isFollowing,
            followers: user.isFollowing
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      }),
    }));
  };

  render() {
    return (
      <Section>
        <UserList
          users={this.state.followers}
          onFollowUser={this.onFollowUser}
        />
      </Section>
    );
  }
}
