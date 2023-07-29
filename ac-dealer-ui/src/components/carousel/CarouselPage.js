import bg1 from "../../assets/images/ac-1.jpg";
import bg2 from "../../assets/images/ac-2.jpg";
import bg3 from "../../assets/images/ac-3.jpg";
import bg4 from "../../assets/images/ac-4.jpg";
import bg5 from "../../assets/images/ac-5.jpg";
import bg6 from "../../assets/images/ac-6.jpg";
import Carousel from "react-material-ui-carousel";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { createStyles, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    carouselImg: {
      width: "99%",
      height: 500,
      padding: 4,
      boxShadow: "0 0 4px 1px rgb(113 59 12)",
    },
    carousel: {
      padding: theme.spacing(2),
    },
  })
);
export const CarouselPage = () => {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      className={classes.carousel}
      interval={2000}
      NextIcon={<ArrowRightOutlined />}
      PrevIcon={<ArrowLeftOutlined />}
    >
      <img className={classes.carouselImg} src={bg1} />
      <img className={classes.carouselImg} src={bg2} />
      <img className={classes.carouselImg} src={bg3} />
      <img className={classes.carouselImg} src={bg4} />
      <img className={classes.carouselImg} src={bg5} />
      <img className={classes.carouselImg} src={bg6} />
    </Carousel>
  );
};
