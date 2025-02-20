import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Message = ({ message, isSelf, imageURL }) => {
    return (
        <Box
            // id={id}
            sx={{
                display: "flex",
                justifyContent: isSelf ? "flex-end" : "flex-start",
                marginY: "1.5rem"
            }}
        >
            {!isSelf && <img src={imageURL} alt="Hey" style={{ width: "1.625rem", height: "1.625rem", borderRadius: "100%", marginRight: "0.7rem", marginLeft: "0.5rem" }} />}
            <Box
                sx={{
                    backgroundColor: isSelf ? "#1C63D5" : "#FFFFFF", // Set background color based on isSelf
                    padding: "0.5rem",
                    borderTopLeftRadius: !isSelf ? "0px" : "0.5rem",
                    borderTopRightRadius: "0.5rem",
                    borderBottomLeftRadius: "0.5rem",
                    borderBottomRightRadius: isSelf ? "0px" : "0.5rem",
                    marginBottom: "0.5rem",
                    maxWidth: "70%",
                    wordWrap: "break-word",
                    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    marginRight: "0.9rem"
                }}
            >
                <Typography
                    sx={{
                        color: isSelf ? "#FFFFFF" : "#606060"
                    }}
                >{message}</Typography>
            </Box>
        </Box>
    )
}

export default Message;

Message.propTypes = {
    message: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired,
    imageURL: PropTypes.string.isRequired,
    id: PropTypes.string,
}