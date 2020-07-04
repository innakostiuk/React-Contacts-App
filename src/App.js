import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
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
      } 
    ]
  }

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id
      })
    }))
  }

  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts}
          deleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
