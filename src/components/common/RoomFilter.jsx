import { useState } from "react";
import PropTypes from "prop-types";

const RoomFilter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = useState("");
  const handleSelectChange = (e) => {
    const selectedRoomType = e.target.value;
    setFilter(selectedRoomType);
    const filteredRooms = data.filter((room) =>
      room.roomType.toLowerCase().includes(selectedRoomType.toLowerCase())
    );
    setFilteredData(filteredRooms);
  };

  const clearFilter = () => {
    setFilter("");
    setFilteredData(data);
  };

  const roomTypes = ["", ...new Set(data.map((room) => room.roomType))];

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="room-type-filter">
        Filter Rooms by Type
      </span>
      <select
        className="form-select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value={""}>Select a room type</option>
        {roomTypes.map((type, index) => (
          <option value={String(type)} key={index}>
            {String(type)}
          </option>
        ))}
      </select>
      <button className="tbn btn-hotel" type="button" onClick={clearFilter}>
        Clear Filter
      </button>
    </div>
  );
};

RoomFilter.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      booked: PropTypes.bool,
      bookings: PropTypes.array,
      photo: PropTypes.string,
      roomType: PropTypes.string,
      roomPrice: PropTypes.number,
    })
  ).isRequired,
  setFilteredData: PropTypes.func.isRequired,
};

export default RoomFilter;
