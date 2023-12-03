import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const AntennaCard = ({ antenna }) => {
    return; (
        <Card>
            <CardMedia
                component="img"
                alt={antenna.name}
                height="140"
                image={antenna.image}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {antenna.name || 'test'}
                </Typography>
                <Typography variant="body2" >
                    {antenna.description}
                </Typography>
                <Typography variant="body2" >
                    Materials Used: {antenna.materials}
                </Typography>
                <Typography variant="body2" >
                    Metrics: {antenna.metrics.gain}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AntennaCard;
