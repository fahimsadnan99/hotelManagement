import React, { useEffect,useState} from "react";
import Layout from "../Layout/Layout"
import { GetAllRoom } from "../../Redux/Actions/RoomAction"
import {useSelector,useDispatch} from "react-redux"

import { Link, useNavigate, useSearchParams } from "react-router-dom";

import RoomItem from "../rooms/RoomItem";

// import { toast } from "react-toastify";

const Home = () => {
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [location,setLocation] = useState()
 
 
  
 
  let [searchParams] = useSearchParams();



  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    console.log(param, value);
    setLocation(value)
    
  }
  
  

  const rooms = useSelector((state) => state.rooms);
  console.log(rooms);
let pages = [];
   
     
     for (let i = 1; i <= Math.ceil(rooms.rooms.roomCount / rooms.rooms.roomPerPage); i++) {
       pages.push(i)
     }




  useEffect(() => {
    
    if (location) {
       dispatch(GetAllRoom(pageNum, location));
    } else {
      dispatch(GetAllRoom(pageNum));
    }
      
 
  }, [pageNum,location]);



  // useEffect(() => {
  //   const paramsObj = Object.fromEntries([...searchParams]);

  //   if (!paramsObj.page) {
  //     setPageNum(1);
  //   } else {
  //     setPageNum(Number(paramsObj.page));
  //   }
  // }, [searchParams]);

  const handlePagination = (page) => {
  
    setPageNum(page)
    navigate(`/?page=${page}`)
  };

  const handlePrev = () => {
   
      if (pageNum > 1) {
        setPageNum(pageNum - 1);
        navigate(`/?page=${pageNum - 1}`);
      }
  
  }

   const handleNext = () => {
     if (pages[pages.length - 1] > pageNum) {
       setPageNum(pageNum + 1)
        navigate(`/?page=${pageNum + 1}`);
     }
  }

  return (
    <>
      <Layout>
        <section id="rooms" className="container mt-5">
          <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>

          <Link to="/search" className="ml-2 back-to-search">
            <i className="fa fa-arrow-left"></i> Back to Search
          </Link>
          <div className="row">
            {rooms && rooms.rooms?.allRooms?.length === 0 ? (
              <div className="alert alert-danger">
                <h1>No room found</h1>
              </div>
            ) : (
              rooms.rooms?.allRooms?.map((room) => (
                <RoomItem key={room._id} room={room}></RoomItem>
              ))
            )}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <span
                    class="page-link"
                    onClick={handlePrev}
                  >
                    Previous
                  </span>
                </li>

                {pages.map((x, index) => (
                  <li
                    className={pageNum === x ? "page-item active" : "page-item"}
                    onClick={() => handlePagination(x)}
                    key={index}
                  >
                    <span class="page-link">{x}</span>
                  </li>
                ))}

                <li class="page-item">
                  <span class="page-link" onClick={handleNext}>
                    Next
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;

