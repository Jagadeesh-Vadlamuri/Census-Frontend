import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import authService from "../Services/auth";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Navbar = ({details, setDetails}) => {
  const URL = "https://census-userdata.herokuapp.com";

  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/");
    window.location.reload();
  };

  const currentUrl = window.location.href;
  let convertedUrl = currentUrl.split("/");
  console.log(currentUrl.split("/")[convertedUrl.length - 1]);

  return (
    <div className="mb-4">
      <nav className="navbar navbar-fixed-top navbar-light bg-dark">
        <div className="container-fluid d-flex justify-content-around align-items-center mt-1">
        <Link
            className="btn btn-light mt-3"
            to="/createCensusData"
            style={
              currentUrl.split("/")[convertedUrl.length - 1] == "signUp" ||
              currentUrl.split("/")[convertedUrl.length - 1] == ""
              
                ? { marginLeft: 70, marginBottom: 15, visibility: "hidden" }
                : { marginLeft: 70, marginBottom: 15 }
            }
          > 
            Create User
          </Link>
          <a className="navbar-brand text-light" >
          <h1><PeopleAltIcon style={{fontSize: 45}}/>{" "}
            CensusData</h1>
          </a>
          <button
            className="btn btn-light mt-3"
            onClick={handleLogout}
            style={
              currentUrl.split("/")[convertedUrl.length - 1] == "signUp" ||
              currentUrl.split("/")[convertedUrl.length - 1] == ""
                ? {
                    marginLeft: 150,
                    marginBottom: 15,
                    
                    visibility: "hidden",
                  }
                : { marginLeft: 150, marginBottom: 15 }
            }
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
