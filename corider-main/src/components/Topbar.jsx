import { Box, Typography } from '@mui/material'
import PropTypes from "prop-types";
import { FiEdit } from "react-icons/fi";
import { MdArrowBack } from "react-icons/md";

const Topbar = ({ tripName }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between",}}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <MdArrowBack style={{fontWeight: "800", fontSize: "1.9rem"}} />
                <Typography textTransform={"capitalize"} ml={1} fontSize={"1.7rem"} fontWeight={700}>{tripName}</Typography>
            </Box>
            <Box>
                <FiEdit style={{fontWeight: "800", fontSize: "1.9rem"}} />
            </Box>
        </Box>
    )
}

export default Topbar

Topbar.propTypes = {
    tripName: PropTypes.string.isRequired
}