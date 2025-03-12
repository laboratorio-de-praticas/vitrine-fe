import React, {useEffect, useState} from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/hello")
    .then((res) => res.text())
    .then((data) => setMessage(data));
  }, []);

  return <h1>{message || "Carregando..."}</h1>;
};

export default App;