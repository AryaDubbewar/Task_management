import React from "react";
import "./TaskAndList.css";
import sett from "./setting.png";
import create from "./create_but.png";
import { useState } from "react";

const TaskAndList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="universe">
      <div className="side-nav">
        <h1>Arya</h1>
        <div className="settings">
          <img src={sett} className="logo" />
          <h2>Settings</h2>
        </div>
        <h2 className="hello">My day</h2>
        <h2 className="hello">Next 7 day</h2>
        <h2 className="hello">Calender</h2>
      </div>

      <div className="box">
        <div className="details">
          <h1>Good Morning Arya</h1>
          <h2>It's time to shine!!</h2>
        </div>
        <div className="cards">
          <li className="card2">
            <div className="card">
              <h1>DSA</h1>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
            </div>

            <div className="card">
              <h1>DSA</h1>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
            </div>

            <div className="card">
              <h1>DSA</h1>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
              <li>Stack problems</li>
            </div>
          </li>
        </div>
        <div className="create">
          <img
            src={create}
            className="create_butt"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <div style={{  zIndex: '1000', marginLeft: '85%', marginTop: '-10%'}}>
              <div className="pop-up">
                <input type="text" className="give" placeholder="Task name"/>
              </div>
              <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { TaskAndList };
