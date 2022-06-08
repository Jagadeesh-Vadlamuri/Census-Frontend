import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CensusData from "./Components/CensusData";
import CreateCensusData from "./Components/CreateCensusData";
import Home from "./Components/Home";
import { useFormik } from "formik";
import EditCensusData from "./Components/EditCensusData";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";

const App = () => {
  const URL = "https://census-userdata.herokuapp.com";
  const [details, setDetails] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
  ]);
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      mother: "",
      father: "",
      location: "",
      occupation: "",
    },
  });
  return (
    <>
      <Navbar details={details} setDetails={setDetails} />
      <Routes>
        <Route
          path="/"
          element={<Home details={details} setDetails={setDetails} />}
        />
        <Route
          path="/createDetail"
          element={
            <CreateCensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        <Route
          path="/getDetails"
          element={
            <CensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        <Route
          path="/updateDetail"
          element={
            <EditCensusData
              details={details}
              setDetails={setDetails}
              formik={formik}
            />
          }
        />
        <Route
          path="/signUp"
          element={<Signup details={details} setDetails={setDetails} />}
        />
      </Routes>
    </>
  );
};

export default App;
