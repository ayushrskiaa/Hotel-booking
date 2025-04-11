import { useParams } from "react-router-dom";

const hotels = {
  1: { name: "Hotel Paradise", description: "A luxurious getaway." },
  2: { name: "Ocean View Resort", description: "A seaside retreat." },
  3: { name: "Mountain Retreat", description: "Perfect for nature lovers." },
};

const HotelDetails = () => {
  const { id } = useParams(); // Get ID from URL
  const hotelData = hotels[Number(id)]; // Convert ID to a number

  if (!hotelData) {
    return <h2>Hotel not found</h2>;
  }

  return (
    <div>
      <h1>{hotelData.name}</h1>      
      <p>{hotelData.description}</p>
    </div>
  );
};

export default HotelDetails;
