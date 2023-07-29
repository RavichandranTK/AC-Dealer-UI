import { Typography, createStyles, makeStyles } from "@material-ui/core";
import { CarouselPage } from "../carousel/CarouselPage";
import { Vision } from "../Vision";
import { Mission } from "../Mission";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    companyDetails: {
      fontSize: 24,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2, 12),
    },
    acImg: {
      width: "99%",
      height: 500,
      padding: 4,
      boxShadow: "0 0 4px 1px rgb(113 59 12)",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      fontWeight: "bold",
    },
    vision: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      "& .MuiCard-root": {
        width: 1000,
      },
    },
    mission: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      "& .MuiCard-root": {
        width: 1000,
      },
    },
    subTitle: {
      padding: 20,
      margin: 30,
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      "& span": {
        fontSize: 16,
        color: "blue",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  })
);
export const ComponeyDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <CarouselPage />
      <Typography variant="h3" gutterBottom className={classes.title}>
        We Are
      </Typography>
      <div className={classes.companyDetails}>
        CB Control Systems is a cutting-edge startup dedicated to providing
        top-notch HVAC & BMS solutions and services. With a passion for customer
        satisfaction and a team of highly skilled professionals, we aim to
        become a leading player in the HVAC and BMS industry. Our core focus is
        on delivering efficient, sustainable, and cost-effective heating,
        ventilation, and air conditioning solutions to residential, commercial,
        and industrial clients.
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        Vision
      </Typography>
      <div className={classes.vision}>
        <div className={classes.visionCard}>
          <Vision />
        </div>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        Mission
      </Typography>
      <div className={classes.mission}>
        <div className={classes.missionCard}>
          <Mission />
        </div>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        Why Choose us?
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        With an unwavering dedication to excellence, CB Control Systems stands
        as a trusted provider of HVAC solutions and reliable Building Management
        System solutions. Our expertise, combined with a passion for
        sustainability and energy efficiency, ensures that our clients'
        buildings operate at their full potential, creating comfortable and
        efficient spaces for occupants while driving lasting value for their
        investments<span className={classes.readMore} onClick={() => navigate("/why-choose-us")}>...more</span>
      </Typography>
    </div>
  );
};
