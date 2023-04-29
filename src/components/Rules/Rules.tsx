import React, { useState } from "react";
import "./Rules.scss";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import RulesImage from "../../images/image-rules.svg";

const Button: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="btn-container">
      <button onClick={() => setOpen(true)}>Rules</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 350,
            bgcolor: "white",
            backgroundImage: `url(${RulesImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom 20%",
            borderRadius: "5px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="modal-navbar">
            <h2>Rules</h2>
            <button onClick={() => setOpen(false)}>X</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Button;
// background-repeat: no-repeat;
// background-position: center;
// background-size: 37.5%;
