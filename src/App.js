import { useState } from "react";
import { uid } from "uid";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);
  const isGoodWeather = true;
  const filteredActivities = activities.filter((activity) => {
    return isGoodWeather === activity.isForGoodWeather;
  });

  function handleAddActivity(newActivity) {
    setActivities([{ id: uid(), ...newActivity }, ...activities]);
  }

  return (
    <>
      <List activities={filteredActivities} isForGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
