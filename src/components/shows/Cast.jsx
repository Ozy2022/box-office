const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : '/not-found-imae.png'}
            />
          </div>

          <div>
            {person.name} | {character.name} {voice && '| Voicecover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
