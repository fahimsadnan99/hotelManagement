const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Room Name"],
    trim: true,
    minlength: [5, "Room Name Cannot minimum 5 characters"],
    maxlength: [100, "Room Name Cannot exceed 100 characters"],
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please Enter Your Room Price"],
    maxlength: [4, "Room Name Cannot exceed 4 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please Enter  Room Description"],
  },
  address: {
    type: String,
    required: [true, "Please Enter  Room Address"],
  },
  guestCapacity: {
    type: String,
    required: [true, "Please Enter  guest capacity"],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please Enter Number of beds"],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  breakfast: {
    type: Boolean,
    default: false,
  },
  airConditioned: {
    type: Boolean,
    default: false,
  },
  petsAllowed: {
    type: Boolean,
    default: false,
  },
  roomCleaning: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Room Catagory"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please Select Correct catagory for room",
    },
  },
  review: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
      },
      name: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Room", roomSchema);
