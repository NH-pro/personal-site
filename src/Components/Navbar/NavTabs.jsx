// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUI Imports
import { Tabs, Tab } from "@mui/material";

// Exported function component
function NavTabs() {

    // Local state
    const [viewList, setViewList] = useState('/');

    // Vars
    const navigate = useNavigate();

    // Event listener to change local state 'viewList'
    const handleChange = (event, newValue) => {
        setViewList(newValue);
        navigate(`${newValue}`);
    }
        
        return (
            <Tabs 
                value={viewList}
                onChange={handleChange}
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    maxWidth: 'min-content'
                }}
            >
                <Tab value="/" label="About"/>
                <Tab value="/projects" label="Projects"/>
                <Tab value="/contact" label="Contact"/>
            </Tabs>
        )
    }
export default NavTabs;