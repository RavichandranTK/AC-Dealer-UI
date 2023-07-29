import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import vision from "../assets/images/vision.jpg";
export const Vision = () => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={vision}
          alt="vision"
        />
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            We envision becoming the most trusted and sought-after HVAC & BMS
            company, recognized for our commitment to excellence, reliability,
            and superior customer service.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
