import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://s.cdpn.io/3/kiwi.svg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://s.cdpn.io/3/kiwi.svg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://s.cdpn.io/3/kiwi.svg'
  },
]

class App extends Component {
  render() {
    return (
      <div>
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
