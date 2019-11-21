import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h3><b>Receiver Applications</b></h3>
      <div className="float">
      <button type="button" class="btn btn-outline-primary btn-sm">
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/login">
        Login
      </a>
      </button>
      </div>
      <div className="float">
      <button type="button" class="btn btn-outline-primary btn-sm">
      <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/register">
        New user: Register
      </a>
      </button>
      </div>
    </div>
  );
}

export default Jumbotron;   