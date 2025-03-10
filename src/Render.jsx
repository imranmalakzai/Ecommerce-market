import React, { useEffect, useState } from "react";
import axios from "axios";

const Rander = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error("Error fetching data:", error));
  }, []);


  useEffect(()=> {
    fetch("http://localhost:5000/api/message").then(res => res.json()).then(res => console.log(res))
  },[])
  return <h1>{message}</h1>;
};

export default Rander;
