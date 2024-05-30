const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in Total is: {seasons.length}</p>

      <p>
        Episodes in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>

      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episods: {season.episodeOrder}</p>

            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
