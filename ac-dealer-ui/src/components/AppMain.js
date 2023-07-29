import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@material-ui/core";
import { NavHeader } from "./nav/NavHeader";
import { Footer } from "./Footer";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  childrenData: {
    width: "100%",
    minHeight: "100vh",
    marginTop: 130,
  },
  childContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
}));

export const AppMain = ({ children }) => {
  const classes = useStyles({});
  const childrenRef = useRef();
  console.log("🚀 ~ file: AppMain.js:23 ~ AppMain ~ childrenRef:", childrenRef)
  return (
    <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
      <CssBaseline />
      <NavHeader/>
      <div className={classes.childContent}>
        <div className={classes.childrenData} ref={childrenRef}>{children}</div>
        <Footer/>
      </div>
    </Box>
  );
}
