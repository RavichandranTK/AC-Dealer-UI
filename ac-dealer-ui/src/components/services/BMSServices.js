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
    bms: {
      margin: 40,
      "& span": {
        width: 1000,
        display: "flex",
        margin: theme.spacing(4, 10),
      },
    },
  })
);
export const BMSServices = () => {
  const classes = useStyles();
  return (
    <div className={classes.bms}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        BMS Services
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Comprehensive System Integration:
      </Typography>
      <span>
      We possess extensive experience in integrating diverse building systems, such as HVAC, lighting, access control, and security, into a centralized BMS platform. This streamlines operations and ensures optimal resource utilization.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Real-time Monitoring and Analytics:
      </Typography>
      <span>
      Our BMS solutions provide real-time monitoring and analytics, empowering clients to make data-driven decisions that improve energy efficiency, occupant comfort, and maintenance effectiveness.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Remote Access and Control:
      </Typography>
      <span>
      With our advanced BMS offerings, clients can remotely access and control building systems, allowing for proactive adjustments and immediate responses to changing conditions.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Customized Reporting and Dashboards:
      </Typography>
      <span>
      We design intuitive reporting interfaces and dashboards that offer valuable insights into building performance, enabling stakeholders to identify trends and make informed decisions.
      </span>
      <Typography
        className={classes.subTitle}
        variant="h5"
        color="text.secondary"
      >
        Energy Efficiency and Sustainability:
      </Typography>
      <span>
      As part of our commitment to sustainability, we focus on optimizing energy consumption through intelligent control strategies, resulting in reduced operating costs and a reduced environmental footprint.
      </span>
    </div>
  );
};
