import React from "react";
import { Link } from "react-router-dom";

const Profile5 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 mx-auto ">
            <h1
              className="text-center my-4"
              style={{
                fontWeight: "bold",
                color: "#27BCBB",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Profile Setup
            </h1>
            <div className="row d-flex justify-content-center"> {/* Modified line */}
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#F1822F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Anxious</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#F1822F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Excited</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#F1822F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Overwhelmed</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#F1822F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">WithDrawn</p>
              </div>
            </div>
            <h4 className="text-center mt-3">
              I feel ____ when meeting new people.
            </h4>

            <div className="text-center mt-3"> {/* Modified line */}
              <Link to="/profile4">
                <button className="btn btn-primary mb-2">
                  Previous Page
                </button>
              </Link>
              <br />
                <button className="btn btn-primary mb-2">
                  Submit  
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile5;
