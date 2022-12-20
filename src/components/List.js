export default function List({ activities, isForGoodWeather }) {
  return (
    <>
      {isForGoodWeather ? (
        <h2>The Weather is awesome go outside and:</h2>
      ) : (
        <h2>Bad Weather outside heres what you can do:</h2>
      )}
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
