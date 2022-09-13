// React Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// MUI Imports
import { Tabs, Tab, ThemeProvider } from "@mui/material";
// Component Imports
import ColorTheme from "../../utils/muiColorTheme/colorTheme";


// Exported component
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
        <ThemeProvider theme={ColorTheme}>
            <Tabs 
                value={viewList}
                onChange={handleChange}
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    maxWidth: 'min-content',
                }}
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab value="/" label="About" sx={{fontWeight: 'bold'}}/>
                <Tab value="/projects" label="Projects" sx={{fontWeight: 'bold'}}/>
            </Tabs>
        </ThemeProvider>
    )
}
export default NavTabs;