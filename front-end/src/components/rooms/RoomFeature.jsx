import React from 'react'

const RoomFeature = ({roomInfo}) => {
  return (
    <>
      <div className="room-feature">
        <i
          className={
            roomInfo.airConditioned
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>Air Conditione</p>
      </div>
      <div className="room-feature">
        <i
          className={
            roomInfo.internet
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>Internet</p>
      </div>
      <div className="room-feature">
        <i
          className={
            roomInfo.petsAllowed
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>Pets Allowed</p>
      </div>

      <div className="room-feature">
        <i
          className={
            roomInfo.roomCleaning
              ? "fa fa-check text-success"
              : "fa fa-times text-danger"
          }
          aria-hidden="true"
        ></i>
        <p>Room Cleaning</p>
      </div>
    </>
  );
}

export default RoomFeature