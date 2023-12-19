import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const AntennaCard = ({ antenna, cardBackground }) => {
  return (
    <Card style={{ transition: "230ms" }}>
      <div className={cardBackground}>
        <CardMedia
          component="img"
          alt={antenna?.name || "test"}
          height="140"
          image={antenna?.imgSrc}
        />
        <CardContent>
          <Typography variant="h5" className="capitalize" component="div">
            {antenna?.name || "test"}
          </Typography>
          <Typography variant="body2">{antenna?.description}</Typography>
          <Typography variant="body2">
            Materials Used: {antenna?.materials}
          </Typography>
          <Typography variant="body2">
            Metrics: {antenna?.metrics.gain}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default AntennaCard;
