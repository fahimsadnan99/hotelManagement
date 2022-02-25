import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { useParams } from "react-router-dom"
import { GetRoomDetails } from "../../Redux/Actions/RoomAction"
import { useDispatch, useSelector } from "react-redux"
import {Carousel} from "react-bootstrap"
import RoomFeature from "./RoomFeature"

const RoomDetais = () => {
   const dispatch = useDispatch()
    const {id} = useParams()

    const {room} = useSelector(state => state.room)
    const roomInfo = room.getSingleRoom;
    console.log(roomInfo);
    useEffect(() => {
        dispatch(GetRoomDetails(id))
    },[])
  return (
    <Layout title={roomInfo ? roomInfo.name : "Not Found"}>
      {roomInfo ? (
        <div className="container container-fluid">
          <h2 className="mt-5">{roomInfo.name}</h2>
          <p>{roomInfo.address}</p>
          <div className="ratings mt-auto mb-3">
            <div
              className="rating-outer"
              style={{ width: `${(room.rating / 5) * 100}%` }}
            >
              <div className="rating-inner"></div>
            </div>
            <span id="no_of_reviews">({roomInfo.numOfReviews})</span>
          </div>

         
            <Carousel hover="push">
              {roomInfo.images.map((img) => {
                 return (<Carousel.Item>
                  <img
                    className="d-block m-auto"
                    src={img.url}
                    alt={roomInfo.name}
                    style={{ width: "100%", height: "440px" }}
                  />
                </Carousel.Item>)
              })}
            </Carousel>
         

          <div className="row my-5">
            <div className="col-12 col-md-6 col-lg-8">
              <h3>Description</h3>
              <p>{roomInfo.description}</p>

              <div className="features mt-5">
                <h3 className="mb-4">Features:</h3>
                <div className="room-feature">
                  <i
                    className="fa fa-cog fa-fw fa-users"
                    aria-hidden="true"
                  ></i>
                  <p>{roomInfo.guestCapacity}</p>
                </div>

                <div className="room-feature">
                  <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
                  <p>{roomInfo.numOfBeds}</p>
                </div>

                <div className="room-feature">
                  <i className="fa fa-cog fa-fw fa-bath" aria-hidden="true"></i>
                  <p>2 Baths</p>
                </div>

             <RoomFeature roomInfo={roomInfo}></RoomFeature>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="booking-card shadow-lg p-4">
                <p className="price-per-night">
                  <b>${roomInfo.pricePerNight}</b> / night
                </p>

                <button className="btn btn-block py-3 booking-btn">Pay</button>
              </div>
            </div>
          </div>

          <div className="reviews w-75">
            <h3>Reviews:</h3>
            <hr />
            <div className="review-card my-3">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>

            <div className="review-card my-3">
              <div className="rating-outer">
                <div className="rating-inner"></div>
              </div>
              <p className="review_user">by John</p>
              <p className="review_comment">Good Quality</p>

              <hr />
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger">
          <h1>No room found</h1>
        </div>
      )}
    </Layout>
  );
}

export default RoomDetais