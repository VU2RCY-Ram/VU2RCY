import React from 'react';
import Grid from '@mui/material/Grid';
import AntennaCard from './AntennaCard';

const AntennaList = () => {

    const antennaTypes = {
        DipoleAntenna: {
            displayName: "Dipole Antenna",
            description: "Simple T-shaped antenna with two equal segments, commonly used and versatile."
        },
        YagiUdaAntenna: {
            displayName: "Yagi-Uda Antenna",
            description: "Directional antenna with multiple elements, providing gain and directivity."
        },
        VerticalAntenna: {
            displayName: "Vertical Antenna",
            description: "Consists of a vertical radiator over a ground plane, efficient for local communications."
        },
        LoopAntenna: {
            displayName: "Loop Antenna",
            description: "Closed circuit loop of wire or tubing, available in various sizes for different applications."
        },
        WireAntenna: {
            displayName: "Wire Antenna",
            description: "Simple and cost-effective antenna, including random wire antennas and long wire antennas."
        },
        LogPeriodicAntenna: {
            displayName: "Log-Periodic Antenna",
            description: "Wideband antenna with elements of varying lengths, covering a broad frequency range."
        },
        G5RVAntenna: {
            displayName: "G5RV Antenna",
            description: "Multi-band dipole antenna designed for efficient performance on several ham radio bands."
        },
        QuadAntenna: {
            displayName: "Quad Antenna",
            description: "Loop antenna with square or rectangular shapes, offering gain and directivity."
        },
        InvertedVAntenna: {
            displayName: "Inverted V Antenna",
            description: "Dipole antenna with ends elevated to form a V shape, suitable for limited-space installations."
        },
        JPoleAntenna: {
            displayName: "J-Pole Antenna",
            description: "Vertical or slanting dipole antenna with a matching section for compact and easy construction."
        },
        GroundPlaneAntenna: {
            displayName: "Ground Plane Antenna",
            description: "Vertical radiator over a ground plane, enhancing antenna efficiency."
        },
        RhombicAntenna: {
            displayName: "Rhombic Antenna",
            description: "High-gain wire antenna with diamond-shaped elements, directional for long-distance communication."
        },
        VerticalDipoleAntenna: {
            displayName: "Vertical Dipole Antenna",
            description: "Similar to a dipole but with one element pointing up and the other down, used in various scenarios."
        },
        MagneticLoopAntenna: {
            displayName: "Magnetic Loop Antenna",
            description: "Compact loop antenna with a tuning capacitor, suitable for limited-space environments."
        }
    }



    const antennas = [{
        name: 'test',
        description: 'test',
        materials: 'copper',
        type: 'MagneticLoopAntenna',
        metrics: {
            frequencyRange: "14 MHz - 30 MHz",
            resonantFrequency: "21 MHz",
            gain: "6 dBi",
            radiationPattern: "Directional",
            polarization: "Vertical",
            swr: 1.5,
            impedance: "50 ohms",
            bandwidth: "300 kHz",
            frontToBackRatio: "20 dB",
            powerHandling: "100 Watts",
            dimensions: {
                length: "5 meters",
                width: "2 meters",
                height: "1 meter"
            }
        }
    }]

    return (

        <Grid container spacing={2}>
            {antennas.map((antenna, id) => (
                <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
                    {/* <AntennaCard antenna={antenna} /> */}
                    Antenna card list here
                </Grid>
            ))}
        </Grid>

    )
};

export default AntennaList;
