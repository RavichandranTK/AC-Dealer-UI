import { Box, Modal, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import logo from "../../src/assets/images/brandLogo.png";

const useStyles = makeStyles((theme) => ({
  maintanance: {
    "& .MuiBox-root": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "red",
      "& .bgImg": {
        width: 250,
        marginBottom: 24,
      }
    },
    "& .maintanance-model": {
      background: "#f5fcfe",
      width: "80%",
      height: "80%",
      top: "10% !important",
      left: "10% !important",
      boxShadow:
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      "& > div": {
        backgroundColor: "transparent !important",
      },
    },
  },
}));

export const UnderMaintanence = () => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "10%",
    left: "10%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);
  return (
    <div className={classes.maintanance}>
      <Modal
        className="maintanance-model"
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
        disablePortal
        keepMounted
      >
        <Box sx={style}>
          <img
            className="bgImg"
            alt="logo"
            src={logo}
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thanks for visiting our website
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="h6"
            component="h3"
            sx={{ mt: 2 }}
          >
            maintanance works going on...!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
