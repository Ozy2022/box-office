const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>

      <h1>
        {name}
        {!!gender && `(${gender})`}
      </h1>

      <p>
        {country ? `Comes from ${country}` : 'No country known'}
        {!!birthday && `${birthday}`}
      </p>

      <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
  );
};

export default ActorCard;
