import { Link } from "react-router-dom";

const hotels = [
  { id: 1, name: "Hotel Paradise" },
  { id: 2, name: "Ocean View Resort" },
  { id: 3, name: "Mountain Retreat" },
];

const Home = () => {
  return (
    <div>
      <h1>Hotel Listings</h1>

      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link to={`/hotel/${hotel.id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Home;
