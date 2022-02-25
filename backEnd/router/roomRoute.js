const express = require('express');
const {allRoom,deleteRoom,newRoom,singleRoom,updateRoom} = require('../controller/RoomController')


const Rooms = express.Router()

Rooms.route("/")
.get(allRoom)
.post(newRoom)
Rooms.route("/:id")
    .post(deleteRoom)
    .get(singleRoom)
    .put(updateRoom)
      
    module.exports = Rooms