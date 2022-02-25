import axios from "axios"

export const roomAction = {
  GET_ALL_ROOM: "GET_ALL_ROOM",
  GET_ROOM_DETAILS: "GET_ROOM_DETAILS",
};



export const GetAllRoom = (page,location) =>  async (dispatch) => {
  const Base_Url = process.env.Base_Url
  console.log(location);
        const { data } = await axios.get(`http://localhost:3001/api/room/?page=${page}&location=${location}`)
        dispatch({
            type: roomAction.GET_ALL_ROOM,
            payload: data
        })
    }



export const GetRoomDetails = (id) => async (dispatch) => {
   const Base_Url = process.env.Base_Url;
   const { data } = await axios.get(`http://localhost:3001/api/room/${id}`);
   dispatch({
     type: roomAction.GET_ROOM_DETAILS,
     payload: data,
   });
}