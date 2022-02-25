import { combineReducers } from "redux"
import RoomReducer from "./RoomReducer"
import RoomDetais from "./RoomDetails"
const RootReducer = combineReducers({
    rooms: RoomReducer,
    room : RoomDetais
})

export default RootReducer