const Room = require("../models/roomModel");
const ApiFeature = require("../util/ApiFeature");

// Create Api => /api/Room

const newRoom = async (req, res) => {
  const roomCreate = await Room.create(req.body);
  res.status(200).json({
    success: true,
    roomCreate,
  });
};

// get All Room => /api/room

const allRoom = async (req, res) => {
  const roomPerPage = 4;
  const roomCount = await Room.countDocuments();
  let apiFeature = new ApiFeature(Room.find(), req.query).search().filter();
  let allRooms = await apiFeature.query;
  const filterdRoomCount = allRooms.length;

  apiFeature.pagination(roomPerPage);
  allRooms = await apiFeature.query;

  res.status(200).json({
    success: true,
    roomPerPage,
    filterdRoomCount,
    roomCount,
    allRooms,
  });
};

// Get Single Room => /api/room

const singleRoom = async (req, res) => {
  const getSingleRoom = await Room.findById(req.params.id);
  if (!getSingleRoom) {
    return res.status(404).json({
      message: "Room Not Found",
    });
  }
  res.status(200).json({
    success: true,
    getSingleRoom,
  });
};

// Update  Room => /api/room

const updateRoom = async (req, res) => {
  let room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({
      message: "Room Not Found",
    });
  }
  room = await Room.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    room,
  });
};

// Delete  Room => /api/room

const deleteRoom = async (req, res) => {
  let room = await Room.findById(req.params.id);
  if (!room) {
    return res.status(404).json({
      message: "Room Not Found",
    });
  }
  await room.remove();
  res.status(200).json({
    success: true,
    message: "Room Deleted",
  });
};

module.exports = { newRoom, allRoom, singleRoom, updateRoom, deleteRoom };
