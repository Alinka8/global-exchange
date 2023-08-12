import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import "./contact.style.css";

const Contact = () => {
  const [sendedMessage, setSendedMessage] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setSendedMessage((prevMessage) => ({
      ...prevMessage,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="request-container" id="contact">
        <form
          action="https://formsubmit.co/alinazoldubaeva@gmail.com"
          className="request-form"
          method="POST"
        >
          <div className="header">
            <h1 className="request-text" style={{ color: "#FBFBFE" }}>
              Register form
            </h1>
          </div>
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="Event name"
            label="Event name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="First name"
            label="First Name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="Last name"
            label="Last Name"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.name}
          />

          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
              },
              input: {
                color: "#2c343f",
              },
            }}
            name="NLU id"
            label="NLU ID"
            type="email"
            color="primary"
            focused
            required
            onChange={onChangeHandler}
            value={sendedMessage.email}
          />
          <TextField
            sx={{
              width: {
                xs: "300px",
                sm: "250px",
                md: "300px",
                lr: "400px",
                xl: "500px",
                input: {
                  color: "#2c343f",
                },
              },
            }}
            name="message"
            fullWidth
            label="Type your Message"
            color="primary"
            focused
            onChange={onChangeHandler}
            value={sendedMessage.message}
          />
          <Button
            type="submit"
            sx={{
              width: 256,
              height: 64,
              backgroundColor: "#FBFBFE",
              color: "#FC914D",
              textDecoration: "none",
              "&:hover": {
                backgroundColor: "#FBFBFE",
                color: "#FD8585",
              },
            }}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="contact__footer">
        <div className="contact__details">
          <EmailIcon sx={{ width: 40, height: 40 }} />
          <p>alinazoldubaeva@gmail.com</p>
        </div>
        <p>©2023 Alina</p>
      </div>
    </div>
  );
};

export default Contact;
