import { Box, Typography, Menu, MenuItem } from '@mui/material';
import PropTypes from "prop-types";
import { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import members from "../assets/members.svg";
import sharenumber from "../assets/number.svg";
import report from "../assets/report.svg";

const SelfBanner = ({ data, image }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1);", marginTop: "1vmax" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <img src={image} alt={data.name} style={{ width: "5rem", height: "5rem", borderRadius: "100%" }} />

                <Box ml={2}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", }}>
                        <Typography textTransform={"capitalize"} ml={1} fontSize={"1.4rem"} fontWeight={400}>From</Typography>
                        <Typography textTransform={"capitalize"} ml={1} fontSize={"1.5rem"} fontWeight={600}>{data.from}</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                        <Typography textTransform={"capitalize"} ml={1} fontSize={"1.4rem"} fontWeight={400}>To</Typography>
                        <Typography textTransform={"capitalize"} ml={1} fontSize={"1.5rem"} fontWeight={600}>{data.to}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <BsThreeDotsVertical style={{ fontWeight: "800", fontSize: "1.9rem" }} onClick={handleClick} />
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    elevation={3}
                    // sx={{ padding: "12em", width: "30vw" }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid #E5E5E0", paddingX: "2rem", paddingY: "1rem", zIndex: 999 }}>
                        <img src={members} alt="Members" />
                        <Typography style={{ fontSize: "1.4rem", fontWeight: 400, marginLeft: "1rem", color: "#141E0D" }}>Members</Typography>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid #E5E5E0", paddingX: "2rem", paddingY: "1rem" }}>
                        <img src={sharenumber} alt="Share Number" />
                        <Typography style={{ fontSize: "1.4rem", fontWeight: 400, marginLeft: "1rem", color: "#141E0D" }}>Share number</Typography>
                    </MenuItem>

                    <MenuItem onClick={handleClose} sx={{ paddingX: "2rem", paddingY: "1rem" }}>
                        <img src={report} alt="Report" />
                        <Typography style={{ fontSize: "1.4rem", fontWeight: 400, marginLeft: "1rem", color: "#141E0D" }}>Report</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default SelfBanner

SelfBanner.propTypes = {
    data: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired
}