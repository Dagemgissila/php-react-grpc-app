import React, { useState } from "react";
import { PingClient } from "./proto/ping_grpc_web_pb";
import { PingRequest } from "./proto/ping_pb";

const App = () => {
  const [string, setString] = useState("");
  const [message, setMessage] = useState("");

  const sendRequest = () => {
    if (!string) return;

    const EnvoyURL = "http://localhost:8000";
    const client = new PingClient(EnvoyURL);
    const request = new PingRequest();
    request.setString(string);

    client.greet(request, {}, (err, response) => {
      if (err) {
        console.error("gRPC error:", err.message);
        setMessage("Error: " + err.message);
        return;
      }
      setMessage(response.getMessage());
    });
  };

  return (
    <div className="App">
      <h2>gRPC-Web Ping Test</h2>
      <input
        type="text"
        placeholder="Enter string"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <button onClick={sendRequest}>Send</button>
      {message && <div id="response">{message}</div>}
    </div>
  );
};

export default App;
