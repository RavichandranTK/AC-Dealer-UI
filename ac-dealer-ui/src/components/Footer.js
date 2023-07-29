import { makeStyles } from "@material-ui/core";
import cbLogo from "../../src/assets/images/brandLogo.png";
import { useNavigate } from "react-router-dom";
import indianFlag from "../../src/assets/images/indianFlag.png";
import {
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    width: "100%",
    height: 300,
    backgroundColor: "#e2e1d5",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  footerFirst: {
    display: "flex",
    padding: 20,
    paddingLeft: theme.spacing(20),
    paddingTop: 0,
    width: "40%",
    flexDirection: "column",
    height: "inherit",
  },
  footerSecond: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: theme.spacing(30),
    padding: theme.spacing(2),
    width: "30%",
    "& .links": {
      cursor: "pointer",
      padding: theme.spacing(1),
      "&:hover": {
        textDecoration: "underline",
      },
    },
    "& .quick-link": {
      cursor: "default",
      fontSize: theme.spacing(2),
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
  footerThird: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "30%",
    "& .address-title": {
      fontSize: theme.spacing(2),
      fontWeight: "bold",
      textDecoration: "underline",
    },
    "& .address": {
      padding: theme.spacing(0.5, 0, 0.5, 0),
    },
    "& .contact": {
      paddingTop: theme.spacing(3),
    },
  },
  logoContainer: {
    marginTop: 20,
    "& .bgImg": {
      width: 100,
      height: 100,
    },
    "& p": {
      margin: theme.spacing(1, 0),
    },
  },
  socialMedia: {
    "& .social": {
      padding: theme.spacing(1, 1.25),
    },
    "& .faceBook": {
      paddingLeft: theme.spacing(0),
      "& path": {
        fill: "#1977f2",
      },
    },
    "& .twitter": {
      "& path": {
        fill: "#1da1f2",
      },
    },
    "& .youtube": {
      "& path": {
        fill: "#ff001b",
      },
    },
    "& .linkedIn": {
      "& path": {
        fill: "#0966c2",
      },
    },
  },
  weReInContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(1),
    "& p": {
      marginRight: theme.spacing(2),
    },
    "& .indianFlag": {
      width: 36,
      height: 36,
    },
  },
}));

export const Footer = () => {
  const classes = useStyles({});
  const navigate = useNavigate();
  return (
    <div className={classes.footer}>
      <div className={classes.footerFirst}>
        <div className={classes.logoContainer}>
          <img
            className="bgImg"
            onClick={() => navigate("/")}
            alt="logo"
            rel="noreferrer"
            src={cbLogo}
          ></img>
          <p>
            CB Control system Providing top-notch HVAC & BMS solutions and
            services
          </p>
        </div>
        <div className={classes.socialMedia}>
          <a
            className="social faceBook"
            href="https://www.facebook.com"
            target="_blank"
            alt="fb"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            className="social twitter"
            href="https://www.twitter.com"
            target="_blank"
            alt="twitter"
            rel="noreferrer"
          >
            <Twitter />
          </a>
          <a
            className="social youtube"
            href="https://www.youtube.com"
            target="_blank"
            alt="youtube"
            rel="noreferrer"
          >
            <YouTube />
          </a>
          <a
            className="social linkedIn"
            href="https://www.linkedin.com"
            target="_blank"
            alt="linkedin"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </div>
        <div className={classes.weReInContainer}>
          <p>We are in:</p>
          <img className="indianFlag" alt="flag" rel="noreferrer" src={indianFlag}></img>
        </div>
      </div>
      <br />
      <div className={classes.footerSecond}>
        <span className="links quick-link">Quick Links</span>
        <span className="links about-us" onClick={() => navigate("/about-us")}>About Us</span>
        <span className="links blogs">Blogs</span>
        <span className="links contact-us">Contact Us</span>
        <span className="links faqs">FAQs</span>
        <span className="links privacy-policy">Privacy Policy</span>
        <span className="links terms-conditions">Terms & Conditions</span>
      </div>
      <div className={classes.footerThird}>
        <span className="address-title">Address</span>
        <span className="address">Ground Floor No.6 Chikkalsandra</span>
        <span className="address">1st Main Road 2nd Cross</span>
        <span className="address">BIP school Manjunatha Nagar</span>
        <span className="address">Bengaluru 560061</span>
        <span className="contact address-title">Contact Us</span>
        <span className="address">Email: cbcontrolsystems@gmail.com</span>
        <span className="address">Phone: +91 XXXXXXXXXX</span>
      </div>
    </div>
  );
};
