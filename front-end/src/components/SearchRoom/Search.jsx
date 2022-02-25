import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {GetAllRoom } from "../../Redux/Actions/RoomAction"

const Search = () => {
    const [location, setLocation] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
      if (location.trim()) {
        navigate(`/?location=${location}`)
        dispatch(GetAllRoom(1,location))
      }
       
    }
  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg">
            <h2 className="mb-3">Search Rooms</h2>
            <div className="form-group">
              <label htmlFor="location_field">Location</label>
              <input
                type="text"
                className="form-control"
                id="location_field"
                placeholder="new york"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-block py-2"
              onClick={handleSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search