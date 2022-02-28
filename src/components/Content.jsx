import React from "react";

const Content = () => {
  return (
    <div className="content">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2HOw9V4OYNT4OKir_E5DnfOy6E8QbeqgVQ&usqp=CAU" alt="sorry"></img>

      <div className="dogi">
        <img src="https://i.huffpost.com/gen/3030612/thumbs/r-DOG-403xFB.jpg"></img>
        <div>
          <p>Dmitry K.</p>
          <p>Date of Bird: 2 jun</p>
          <p>Education: BSU</p>
          <p>Web Site: https:/blabla.com</p>
        </div>
      </div>

      <p>My post</p>

      <div className="inputer">
        <input placeholder="your news..."></input>
        <button>send</button>
      </div>

      <div className="round">
        <div></div>
        <p>Hey, why nobody love me</p>
      </div>

      <div className="round">
        <div></div>
        <p>It's our new program! Hey</p>
      </div>
    </div>
  );
};

export default Content;
