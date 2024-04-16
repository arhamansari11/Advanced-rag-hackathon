import React from "react";
import Logo from "../assets/images/equacare.png";

const HomeScreen = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <div className="my-3 d-flex justify-content-center">
              <img
                src={Logo}
                className="Logo"
                alt="Logo"
                style={{ width: "60px" }}
              />
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-title">
                  <p style={{ fontWeight: "bold" }} className="text-center">Notifications</p>
                  <p className="text-center">
                        Appointment with Dr.Lear at 2:00pm.
                    </p>
                    <p className="text-center">
                        Review your CheckList
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
