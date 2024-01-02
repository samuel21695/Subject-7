import React from "react";

const Main = () =>{
  return (
    <div id="main">
      <div id="content"></div>
      <form id="form">
        <input type="text" name="test" id="text" placeholder="Write your name"></input>
        <input type="submit" value="Show"></input>
      </form>
    </div>
  );
}

export default Main;