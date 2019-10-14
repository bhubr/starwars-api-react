import React from 'react';

function Character(props) {
  const character = props.character;
  const githubLogin = character.name.replace(/\s/g, '-').toLowerCase();
  const githubUrl = `https://github.com/${githubLogin}`;

  return (
    <div className="character" style={{backgroundImage: `url("${character.pic}")`}}>
      <div className="character-infos">
        <div className="character-name">{character.name}</div>
        <div className="character-born">Born: n/a</div>
        <div className="character-died">Died: n/a</div>
        <a href={githubUrl}>
          <div className="character-github">
            <img src="../img/logo-github.svg" /> /{githubLogin}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Character;
