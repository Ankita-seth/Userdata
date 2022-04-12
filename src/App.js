import React, { lazy, Suspense } from "react";
import Form from "./Form";
import "./index.css";
const Users = lazy(() => import("./Users"));
//import file from "./file.css";

function App() {
  return (
    <div className="App">
      <h1 align="center">Users List</h1>

      <Suspense fallback={<h1>Loading Data...</h1>}>
        <Users />
        <Form />
      </Suspense>
    </div>
  );
}

export default App;
