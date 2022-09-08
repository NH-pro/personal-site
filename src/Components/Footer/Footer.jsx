// MUI Imports
import { Typography } from "@mui/material";

const theYear = new Date().getFullYear()

function Footer() {
    return (
        <Typography
            sx={{
                margin: '1em 0em'
            }}
        >
             © Neil Hanson {theYear}
        </Typography>
    )
}
export default Footer;