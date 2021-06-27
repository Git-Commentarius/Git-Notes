import React from "react";
import axios from "axios";
import "../css/App.css";

function Home() {
  return (
    <div className="App">
      <button>
        <a href="https://github.com/login/oauth/authorize?client_id=593ec7b3692b00e2d3ff">
          Login
        </a>
      </button>
    </div>
  );
}

function shoot() {
  //   alert("hello");
}
export default Home;
