import React from "react";
import { useState } from "react";
import Prev from "../assets/arrow.png";
import Email from "../assets/Email.png";
import Upload from "../assets/upload.png";
import "./customcss.css";
import { ColorRing } from "react-loader-spinner";
import Dialog from "@mui/material/Dialog";
import Success from "../assets/Success.png";

function Form() {
  const [disabled, setDisabled] = useState(true);
  const [jsonData, setJsonData] = useState(null);
  console.log("jsondata", jsonData);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const fileContent = JSON.parse(event.target.result);
          setJsonData(fileContent);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setDisabled(false);
          }, 2000);
        } catch (error) {
          console.log(error);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = () => {
    console.log("Data comes here");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "360px", height: "640px", background: "#FFF" }}>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={Prev}
                alt=""
                style={{ width: "24px", height: "24px" }}
              />
            </div>
            <h1
              style={{
                color: "#292727",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: 600,
                marginLeft: "20px",
              }}
            >
              submit form
            </h1>
          </div>
          <div style={{ marginTop: "21px" }}>
            <p
              style={{
                color: "#292727",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Full Name
            </p>
            <input
              type="text"
              placeholder="Full Name"
              style={{
                width: "319px",
                height: "44px",
                borderRadius: "10px",
                background: "#FAFAFA",
                outline: "none",
                border: "none",
                paddingLeft: "16px",
                marginTop: "10px",
                color: "#A0A0A0",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 500,
              }}
            />
          </div>

          <div style={{ marginTop: "12px", position: "relative" }}>
            <p
              style={{
                color: "#292727",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Email
            </p>
            <input
              type="text"
              placeholder="Email"
              style={{
                width: "319px",
                height: "44px",
                borderRadius: "10px",
                background: "#FAFAFA",
                outline: "none",
                border: "none",
                paddingLeft: "16px",
                marginTop: "10px",
                color: "#A0A0A0",
                fontFamily: "Poppins",
                fontSize: "15px",
                fontWeight: 500,
              }}
            />
            <div style={{ position: "absolute", right: "10%", top: "60%" }}>
              <img
                src={Email}
                alt=""
                style={{ width: "17px", height: "14px" }}
              />
            </div>
          </div>

          <p
            style={{
              color: "#292727",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "12px",
            }}
          >
            Upload JSON File
          </p>

          <div
            style={{
              width: "319px",
              height: "114px",
              borderRadius: "10px",
              border: "1px dashed #D9D9D9",
              background: "#FAFAFA",
              marginTop: "12px",
              display: "block",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {loading === true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ColorRing />
              </div>
            ) : (
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "35px",
                }}
              >
                <img
                  src={Upload}
                  alt=""
                  style={{ width: "21px", height: "26px" }}
                />
                <p
                  style={{
                    color: "#A0A0A0",
                    fontFamily: "Poppins",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  Browse File
                </p>
              </span>
            )}

            <input
              type={"file"}
              accept=".json"
              style={{
                position: "absolute",
                opacity: 0,
                cursor: "pointer",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              onChange={handleFileUpload}
            />
          </div>

          <p
            style={{
              color: "#292727",
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "18px",
            }}
          >
            File Contents
          </p>

          <div
            style={{
              width: "319px",
              height: "144px",
              borderRadius: "10px",
              background: "#FAFAFA",
              marginTop: "12px",
              overflow: "auto",
            }}
            className="container"
          >
            {loading === false && jsonData !== null ? (
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 400,
                  margin: "10px",
                }}
              >
                {JSON.stringify(jsonData)}
              </p>
            ) : (
              ""
            )}
          </div>

          <button
            style={{
              width: "319px",
              height: "49px",
              borderRadius: "30px",
              background:
                disabled === false ? "#3062C8" : "rgba(48, 98, 200, 0.50)",
              border: "none",
              marginTop: "10px",
              cursor: "pointer",
              color: "#FFF",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 500,
            }}
            onClick={
              disabled === false && jsonData !== null ? handleSubmit : null
            }
          >
            Submit
          </button>
        </div>
        {open && (
          <Dialog open={open} onClose={handleClose}>
            <div style={{ width: "300px", height: "349px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Success}
                    alt=""
                    style={{ width: "101px", height: "95px" }}
                  />
                </div>
                <p
                  style={{
                    color: "#4381FF",
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                >
                  Success
                </p>
              </div>
              <p style={{ textAlign: "center", marginTop: "15px" }}>
                524 entries successfully uploaded
              </p>

              <button
                style={{
                  width: "252px",
                  height: "49px",
                  background: "#3062C8",
                  borderRadius: "30px",
                  color: "#FFF",
                  border: "none",
                  marginTop: "20px",
                  marginLeft: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              >
                Go to My Entries
              </button>
              <button
                style={{
                  width: "252px",
                  height: "49px",
                  background: "#E9F0FF",
                  borderRadius: "30px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  border: "none",
                  color: "#4381FF",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Form;
