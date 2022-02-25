import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Practice = () => {
  const [user, setUser] = useState();
  const [inputData, setInputData] = useState("");

  const handleDelete = (id) => {
    setUser((user) => {
      return user.filter((user) => user.id !== id);
    });
  };

  const renId = () => {
    return new Date().getTime()
  }


  const handleSubmitData = async () => {
    const newData = {
      id: renId(),
      name : inputData
    }

    
    const serverResponse = await axios.post(
      `https://jsonplaceholder.typicode.com/users`, newData
    )
      .then(res => {
        if (res.status == 201) {
          setUser([newData, ...user]);
          setInputData("")
      }
    })
  }

  useEffect(async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUser(res.data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3">
          <div className="d-flex my-3">
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>
            <button className="btn btn-success" onClick={handleSubmitData}>Add</button>
          </div>
          {user &&
            user.map((user) => {
              return (
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{user.name}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Practice;
