import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getRoomTypes } from "../utils/ApiFunctions";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
  const [roomTypes, setRoomTypes] = React.useState([""]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState("");

  useEffect(() => {
    getRoomTypes().then((data) => {
      setRoomTypes(data);
    });
  }, []);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== "") {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType("");
      setShowNewRoomTypeInput(false);
    }
  };

  return (
    <>
      {roomTypes.length > 0 && (
        <div>
          <select
            id="roomType"
            name="roomType"
            value={newRoom.roomType}
            onChange={(e) => {
              if (e.target.value === "Add New") {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
          >
            <option value={""}>Select a room type</option>
            <option value={"Add New"}>Add New</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          {showNewRoomTypeInput && (
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter new room type"
                onChange={handleNewRoomTypeInputChange}
              />

              <button
                className="btn btn-hotel"
                type="button"
                onClick={handleAddNewRoomType}
              >
                Add
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

RoomTypeSelector.propTypes = {
  handleRoomInputChange: PropTypes.func.isRequired,
  newRoom: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    roomPrice: PropTypes.number.isRequired,
  }),
};

export default RoomTypeSelector;
