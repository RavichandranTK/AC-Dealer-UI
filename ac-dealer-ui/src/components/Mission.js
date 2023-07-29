import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import mission from "../assets/images/mission.jpeg";

export const Mission = () => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={mission} alt="mission" />
        <CardContent>
          <Typography variant="h5" color="text.secondary">
            At CB Control Systems, our mission is to enhance the comfort,
            health, and productivity of our clients by offering innovative HVAC
            and BMS solutions while ensuring environmental sustainability and
            energy efficiency.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
