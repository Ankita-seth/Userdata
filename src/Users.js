import React from "react";
import "./index.css";
//import file from "./file.css";
const Users = () => {
  const data = [
    {
      id: 1,
      Name: "Anvi",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Badminton,Guitar",
    },
    {
      id: 2,
      Name: "Oggy",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Badminton,Guitar,Ukulele",
    },
    {
      id: 3,
      Name: "Jack",
      PhoneNo: "9988774450",
      Hobbies: "Baseball,Badminton,Guitar",
    },
    {
      id: 4,
      Name: "Raj",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Music,Guitar",
    },
    {
      id: 5,
      Name: "Ravie",
      PhoneNo: "9988774450",
      Hobbies: "Chess,Badminton,Dance",
    },
    {
      id: 6,
      Name: "Guri",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Badminton,Voilin",
    },
    {
      id: 7,
      Name: "Jay",
      PhoneNo: "9988774450",
      Hobbies: "Baseball,Badminton,Guitar",
    },
    {
      id: 8,
      Name: "KIM",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Badminton,Guitar",
    },
    {
      id: 9,
      Name: "Loy",
      PhoneNo: "9988574450",
      Hobbies: "Cricket,Badminton,Guitar",
    },
    {
      id: 10,
      Name: "Kizze",
      PhoneNo: "9988774450",
      Hobbies: "Cricket,Badminton,Guitar",
    },
  ];

  return (
    <div className="table-wrapper">
      {" "}
      <table className="content-table">
        <tr id="header">
          <th>Id</th>
          <th>name</th>
          <th>Phone</th>
          <th>Hobbies</th>
          <th>Action</th>
        </tr>
        {data.map((home) => (
          <tr className="active-row" key={home.id}>
            <td>{home.id}</td>
            <td>{home.Name}</td>
            <td> {home.PhoneNo}</td>
            <td> {home.Hobbies}</td>
            <td>
              <button className="button-1" value="submit">
                Update
              </button>
              <button value="submit">Delete</button>
            </td>
          </tr>
        ))}{" "}
      </table>
    </div>
  );
};

export default Users;
