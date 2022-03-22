import React, { useEffect, useState } from "react";
import "./NomePage.css";

export default function NomePage() {
  // fetch school data
  const [sclData, setSclData] = useState({});

  //show data in display
  const [showdata, setShowData] = useState("");

  // user input state
  const [userInputStudentId, setUserInputStudentId] = useState("");

  // useEffect for Student info
  useEffect(() => {
    // for fetch student id
    fetch("https://rony9843.github.io/demojsonapi/sample2.json")
      .then((response) => response.json())
      .then((json) => {
        setSclData(json);
      });
  }, []);

  // user input function
  const userInput = (props) => {
    setUserInputStudentId(props);
  };

  // user submit btn
  const userSubmitBtn = () => {
    // console.log("this is data :", sclData);
    // const findData = sclData.find((element) => element.Studentid === 21311);
    // console.log("this is findData :", findData);

    const intData = parseInt(userInputStudentId);

    let obj = sclData.find((o) => o.Studentid === intData);

    console.log(obj);
    setShowData(obj);
  };

  return (
    <div>
      <div className="w-100">
        <div
          className="main-background-class-with-scrollbar p-2"
          style={{
            width: "90%",
            backgroundColor: "#F2F6FD",
            border: "2px solid #8C61FF",
            height: "95vh",
            margin: " 20px auto",
            overflow: "auto",
            borderRadius: "10px",
            boxShadow: "0 3px 7px #8c61ff",
          }}
        >
          <div className="w-100 ">
            <div
              className="bottomleft"
              style={{
                fontSize: "18px",
              }}
            >
              <div className="input-group mb-3 p-2 w-100">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student's ID..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={(e) => userInput(e.target.value)}
                />
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#8C61FF",
                    color: "white",
                    fontFamily: "Poppins",
                  }}
                  type="button"
                  id="button-addon2"
                  onClick={() => userSubmitBtn()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {showdata.StudentName != null ? (
            <div>
              <h1
                className=""
                style={{
                  fontSize: "25px",
                  color: "#775DCE",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                Student Info...
              </h1>
              <div className="data-list">
                <span className="data-list-span">Student Name : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.StudentName}
                </span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Student ID : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.Studentid}
                </span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Sex : </span>{" "}
                <span className="data-list-user-info">{showdata.Sex}</span>
              </div>
              <div className="data-list">
                <span className="data-list-span">ChildNo : </span>{" "}
                <span className="data-list-user-info">{showdata.ChildNo}</span>
              </div>
              <div className="data-list">
                <span className="data-list-span">BirthDate : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.BirthDate.split(" ", 1)}
                </span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Age : </span>{" "}
                <span className="data-list-user-info">{showdata.Age}</span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Guardian Code : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.GuardianCode}
                </span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Guardian Name : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.GuardianName}
                </span>
              </div>

              <div className="data-list">
                <span className="data-list-span">Religion : </span>{" "}
                <span className="data-list-user-info">{showdata.Religion}</span>
              </div>
              <div className="data-list">
                <span className="data-list-span">Nationality : </span>{" "}
                <span className="data-list-user-info">
                  {showdata.Nationality}
                </span>
              </div>

              {showdata.StudentName != null ? (
                <div style={{ display: " none" }}>
                  <span className="data-list-span">Company Name : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.CompanyName}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="data-list-span">Company Name : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.CompanyName}
                  </span>
                </div>
              )}

              {showdata.CompanyTel != null ? (
                <div style={{ display: "none" }} className="data-list">
                  <span className="data-list-span">CompanyTel : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.CompanyTel}
                  </span>
                </div>
              ) : (
                <div className="data-list">
                  <span className="data-list-span">CompanyTel : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.CompanyTel}
                  </span>
                </div>
              )}

              {showdata.Occupation != null ? (
                <div className="data-list">
                  <span className="data-list-span">Occupation : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.Occupation}
                  </span>
                </div>
              ) : (
                <div style={{ display: "none" }} className="data-list">
                  <span className="data-list-span">Occupation : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.Occupation}
                  </span>
                </div>
              )}

              {showdata.HomeAdress != null ? (
                <div style={{ display: "none" }} className="data-list">
                  <span className="data-list-span">Home Adress : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.HomeAdress}
                  </span>
                </div>
              ) : (
                <div className="data-list">
                  <span className="data-list-span">Home Adress : </span>{" "}
                  <span className="data-list-user-info">
                    {showdata.HomeAdress}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <h2 className="p-4 mt-5 fs-5" style={{ fontFamily: "Poppins" }}>
              Please,enter the{" "}
              <strong style={{ color: "#775DCE" }}>Student ID</strong>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
