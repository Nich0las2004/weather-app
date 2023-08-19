const App = () => {
  const fetchHandler = async () => {
    await fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=bb3d2d98459078abb132df015a9e175f"
    )
      .then((response) => response.json())
      .then((responseData) => console.log(responseData));
  };

  return (
    <div>
      <button onClick={fetchHandler}>Fetch</button>
      {/* <label htmlFor="state">State: </label>
      <input id="state" type="text" /> */}
    </div>
  );
};

export default App;
