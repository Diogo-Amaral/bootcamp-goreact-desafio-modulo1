import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './styles.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'image1.jpg',
        name: 'Diogo Amaral',
        time: 'há 20 min',
        content:
          'lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsun',
      },
      {
        id: 2,
        avatar: 'image2.jpg',
        name: 'Coala',
        time: 'há 1 h',
        content:
          'lorem ipsun lorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsunlorem ipsun',
      },
    ],
  };

  render() {
    return (
      <div className="main-wrapper">
        <Header>RocketBook</Header>
        <div className="posts-wrapper">
          {this.state.posts.map((post, id) => (
            <Post key={id} posts={post} />
          ))}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
