import React, { Component } from 'react';
import Character from './Character';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: []
    }
  }

  fetchCharacters() {
    fetch('characters.json')
      .then(res => res.json())
      .then(characterList => this.setState({
        characterList
      }));
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    return (
      <div className="container">
        {
          this.state.characterList.map((character) => (
            <Character key={character.id} character={character} />
          ))
        }
      </div>
    )
  }
}

export default CharacterList;
