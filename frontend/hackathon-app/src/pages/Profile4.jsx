import React from "react";
import { Link } from "react-router-dom";

const Profile4 = () => {
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
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Autism</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">ADHD</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Dyslexia</p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid",
                  backgroundColor: "#31828F",
                  color: "white",
                  cursor: "pointer",
                  height: "150px",
                }}
              >
                <p className="text-center">Other</p>
              </div>
            </div>
            <h4 className="text-center mt-3">
              Which Group do you identify with?
            </h4>

            <div className="text-center"> {/* Modified line */}
              <Link to="/profile3">
                <button className="btn btn-primary mb-2">
                  Previous Page
                </button>
              </Link>
              <br />
              <Link to="/profile5">
                <button className="btn btn-primary mb-2">
                  Next Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile4;
