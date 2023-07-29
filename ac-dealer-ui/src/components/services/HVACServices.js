import { Typography, createStyles, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      fontWeight: "bold",
    },
    subTitle: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      margin: 30,
    },
    hvac: {
      margin: 40,
      "& span": {
        width: 1000,
        display: "flex",
        margin: theme.spacing(4, 10),
      },
    },
  })
);
export const HVACServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.hvac}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        HVAC Services
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Heating Solutions:
      </Typography>
      <span>
        Installation, repair, and maintenance of energy-efficient heating
        systems for homes, offices, and industrial facilities.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Ventilation Systems:
      </Typography>
      <span>
        Design and installation of custom ventilation systems to ensure proper
        air circulation, indoor air quality, and mold/moisture control.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Air Conditioning:
      </Typography>
      <span>
        Expertise in installing and servicing energy-efficient air conditioning
        systems to keep spaces cool during scorching summers.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Energy Auditing:
      </Typography>
      <span>
        Conducting energy audits to identify opportunities for optimizing HVAC
        systems, reducing energy consumption, and lowering utility costs.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Indoor Air Quality (IAQ) Solutions:
      </Typography>
      <span>
        Providing IAQ assessments and implementing solutions to ensure healthy
        and clean indoor air, improving the overall well-being of occupants.
        Robotic Duct Cleaning Service by offering Cleaner air ducts create a
        healthier environment for occupants, reducing the risk of allergies,
        respiratory issues, and other health concerns associated with poor
        indoor air quality.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        HVAC System Upgrades:
      </Typography>
      <span>
        We help clients upgrade their existing HVAC systems to the latest models
        that not only increase energy efficiency but also reduce their carbon
        footprint, thereby contributing to a greener planet.
      </span>
    </div>
  );
};
