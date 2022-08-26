// Imports
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Api Imports
import { getProjectsFetch } from '../../redux/reducers/projectsSlice';

// MUI Imports
import { Grid, Stack, Card } from "@mui/material";

function Projects() {
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            getProjectsFetch()
        )
    }, [dispatch]);

    console.log('this is projects', projects);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Stack>
                <Card
                    elevation={4}
                    sx={{
                        padding: "1em",
                        margin: '1em',
                        width: '350px',
                        minHeight: '350px'
                    }}
                >
                    {projects.map((item) => {
                        return(
                            <div
                                key={item.id}
                            >
                                <h2>{item.name}</h2>
                                <ul>
                                    <li>Duration: {item.duration}</li>
                                    <li>{item.description}</li>
                                </ul>
                            </div>
                        )
                    })}
                </Card>
            </Stack>
        </Grid>
    )
}
export default Projects;