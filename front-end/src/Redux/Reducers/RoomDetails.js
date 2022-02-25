import { roomAction } from "../Actions/RoomAction";

const GetRoomDetails = (state = { room: {} }, { type, payload }) => {
  switch (type) {
    case roomAction.GET_ROOM_DETAILS:
      return {
        ...state,
        room: payload,
      };
    default:
      return state;
  }
};

export default GetRoomDetails;
