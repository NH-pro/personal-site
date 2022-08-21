// Imports
import { useState } from "react";

// MUI Imports
import { Tabs, Tab } from "@mui/material";


function NavTabs() {

// Local state
const [viewList, setViewList] = useState('about');

// Event listener to show different booth lists and new events.
const handleChange = (event, newValue) => {
    setViewList(newValue);
}

    return (
        <Tabs value={viewList} onChange={handleChange}>
            <Tab value="about" label="About"/>
            <Tab value="projects" label="Projects"/>
            <Tab value="contact" label="Contact"/>
        </Tabs>
    )
}
export default NavTabs;