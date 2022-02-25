import { roomAction } from "../Actions/RoomAction"


const getRoom = (state = {rooms : []}, {type,payload}) => {
    switch (type) {
        case roomAction.GET_ALL_ROOM: 
            return {
                ...state,
                rooms: payload
            }
         default: 
            return state
    }
}

export default getRoom