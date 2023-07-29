import {
  Button,
  MenuItem,
  Popover,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import backgroundImg from "../../assets/images/brandLogo.png";
import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    headerNavBar: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: theme.spacing(4, 10, 0, 10),
      background: "linear-gradient(#e7e7d2, #a90a0a00)",
      "& .bgImg": {
        width: theme.spacing(25),
        cursor: "pointer",
      },
      position: "absolute",
      width: "100%",
    },
    menuOptions: {
      position: "absolute",
      right: theme.spacing(0),
      width: "40%",
      "& .MuiButton-text": {
        fontSize: 18,
        fontWeight: "bold",
      },
      "& .MuiButton-root": {
        width: 120,
        height: 60,
      },
    },
    downArrow: {
      transform: ({ rotateArrow }) => rotateArrow && "rotate(180deg)",
    },
  })
);

export const NavHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [rotateArrow, setRotateArrow] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const serviceHvac = () => {
    navigate("/service-hvac");
    setAnchorEl(null);
  };

  const serviceBms = () => {
    navigate("/service-bms");
    setAnchorEl(null);
  };

  useEffect(() => {
    setRotateArrow(!rotateArrow);
  }, [anchorEl]);

  const id = open ? "simple-popover" : undefined;
  const classes = useStyles({ rotateArrow });
  return (
    <div className={classes.headerNavBar}>
      <img
        className="bgImg"
        onClick={() => navigate("/")}
        src={backgroundImg}
      />
      <div className={classes.menuOptions}>
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            onClick={() => navigate("/")}
            startIcon={<Home />}
          >
            Home
          </Button>
          <Button variant="text" onClick={() => navigate("/about-us")}>
            About Us
          </Button>
          <Button variant="text">Products</Button>
          <Button
            variant="text"
            aria-describedby={id}
            onClick={handleClick}
            className={classes.service}
            endIcon={<KeyboardArrowDownIcon className={classes.downArrow} />}
          >
            Services
          </Button>
          <Button variant="text">Contact</Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={serviceHvac}>HVAC Services</MenuItem>
            <MenuItem onClick={serviceBms}>BMS Services</MenuItem>
          </Popover>
        </Stack>
      </div>
    </div>
  );
};
