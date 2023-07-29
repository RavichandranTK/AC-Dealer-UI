import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    margin: 40,
    marginLeft: 400,
    width: 1000,
    fontFamily: "'Merriweather', serif"
  },
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
    margin: 30,
  },
}));

export const AboutUs = () => {
  const classes = useStyles({});
  return (
    <div className={classes.about}>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h3"
        component="div"
      >
        About US
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h6"
        color="text.secondary"
      >
        A Leading Bluestar AC Dealers in Mumbai, Expert Aircon specializes in
        providing end-to-end heating, ventilation, and air conditioning (HVAC)
        solutions to a range of commercial, institutional, and industrial
        projects. Being a highly-rated channel partner in the West region for
        Blue Star, India’s leading HVAC company, we have successfully planned,
        designed, and implemented centralized as well as packaged air
        conditioning solutions for entertainment parks, large commercial
        establishments, corporate workplaces, hotels, educational institutions,
        and other commercial complexes in and around Mumbai and Pune.
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h6"
        color="text.secondary"
      >
        Led by a team having an in depth knowledge, Expert Aircon draws immense
        pride from the fact that we are amongst the selected few commercial air
        conditioning solutions providers that has successfully delivered HVAC
        solutions for scales ranging from 1 ton to 1800 tons all within time and
        budget. Our diverse work portfolio is a living testimony to our
        credentials as a top-class air conditioning contractor in Mumbai.
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h6"
        color="text.secondary"
      >
        Apart from providing turnkey solutions encompassing designing,
        installing and servicing HVAC and refrigeration systems for our clients,
        Expert Aircon, one of the effective AC Maintenance Contractors
        undertakes work for large-scale projects. So, whether you need uniform
        cooling for your sprawling corporate office or wish to design, service,
        and repair the entire HVAC system of a huge mall, we can serve as a
        strategic HVAC partner that you can rely on throughout the lifespan of
        your air conditioning systems.
      </Typography>
      <Typography
        className={classes.subTitle}
        variant="h6"
        color="text.secondary"
      >
        As a socially and environmentally responsible business, we, one of the established HVAC service providers create sustainable value for our customers, staff and society in everything we do. Our design engineers have been trained so that our designs and our consultation can adhere to the concepts of environmental sustainability and assist our customers to improve their green credibility.
      </Typography>
    </div>

    // Led by a team having an in depth knowledge, Expert Aircon draws immense pride from the fact that we are amongst the selected few commercial air conditioning solutions providers that has successfully delivered HVAC solutions for scales ranging from 1 ton to 1800 tons all within time and budget. Our diverse work portfolio is a living testimony to our credentials as a top-class air conditioning contractor in Mumbai.
    // Apart from providing turnkey solutions encompassing designing, installing and servicing HVAC and refrigeration systems for our clients, Expert Aircon, one of the effective AC Maintenance Contractors undertakes work for large-scale projects. So, whether you need uniform cooling for your sprawling corporate office or wish to design, service, and repair the entire HVAC system of a huge mall, we can serve as a strategic HVAC partner that you can rely on throughout the lifespan of your air conditioning systems.
    // As a socially and environmentally responsible business, we, one of the established HVAC service providers create sustainable value for our customers, staff and society in everything we do. Our design engineers have been trained so that our designs and our consultation can adhere to the concepts of environmental sustainability and assist our customers to improve their green credibility.
  );
};
