import { Box, Paper } from '@mui/material';
import clip from "../assets/clip.svg";
import send from "../assets/send.svg";
import camera from "../assets/camera.svg";
import video from "../assets/video.svg";
import chart from "../assets/chart.svg";
import { useState } from 'react';

const MessageBox = () => {
    const [open, setOpen] = useState(false);
    const imageStyle = { width: "1.5em", height: "1.5em" };
    return (
        <Paper elevation={2} sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: "5rem", backgroundColor: "#fff" }}>
            <Box sx={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", height: "4.5rem", display: "flex", alignItems: "center", paddingX: "1rem" }}>
                <input placeholder='Reply to @Elon Musk' style={{ border: "none", "&:focus": { border: "none" }, width: "100%", padding: "1rem", fontSize: "1.05rem" }} />
                <Box sx={{ display: "flex", width: "20%", paddingX: "0.2%", justifyContent: "space-between", alignItems: "center" }}>
                    <img src={clip} alt="" style={imageStyle} onClick={() => setOpen(!open)} />
                    <img src={send} alt="" style={imageStyle} />
                </Box>
            </Box>
            <Box display={open ? "flex" : "none"} sx={{ position: "absolute", right: "1rem", bottom: "4.7rem", backgroundColor: "#008000", padding: "0.5rem", borderRadius: "2rem" }}>
                <img src={camera} alt="" style={{...imageStyle, margin: "0.5rem"}} onClick={() => setOpen(!open)} />
                <img src={video} alt="" style={{...imageStyle, margin: "0.5rem"}} onClick={() => setOpen(!open)} />
                <img src={chart} alt="" style={{...imageStyle, margin: "0.5rem"}} onClick={() => setOpen(!open)} />
            </Box>
        </Paper>
    )
}


export default MessageBox