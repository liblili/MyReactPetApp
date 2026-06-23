import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="info-section">
          <h1>Animal Search</h1>
          <p>
            View listings of lost and found pets. Create a listing. Return a
            pet.
          </p>

          <button>Go to Listings</button>
        </div>
        <div className="image-section"></div>
      </div>
      <div className="howitworks-section">
        <h2>How it works ?</h2>
        <ul className="ulwatisworks">
          <li>
            1. Look at the list of pets in our catalogue, or directly on the map
            - as you please
          </li>
          <li>
            2. If you don’t found who you’re looking for, add your listing
          </li>
          <li>
            3. Look out for notifications in the chat of people who recognize
            your pet and turn them around
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
