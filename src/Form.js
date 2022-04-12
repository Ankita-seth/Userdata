import React from "react";
import Popup from "reactjs-popup";
import "./index.css";

function Form() {
  return (
    <div className="popup">
      <Popup trigger={<button class="add">+</button>} position="right center">
        <form method="post" name="popup">
          <div className="inputfield">
            <label>Name : </label>
            <input type="text" placeholder="Enter your Name" />
            <label>PhoneNo:</label>
            <input type="text" placeholder="Enter your Phone Number" />
            <label>Hobbies:</label>
            <input type="text" placeholder="Enter your Hobbies"></input>
            <button className="button-34" value="submit">
              Add
            </button>
          </div>
        </form>
      </Popup>
    </div>
  );
}

export default Form;
