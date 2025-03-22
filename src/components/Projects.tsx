import { Box, Typography, Container, Grid } from '@mui/material';

const projects = [
    { title: "Social Media Analytics Tool", description: "Analyzes reach, impressions, and engagement." },
    { title: "Chat Application", description: "Real-time chat using WebSockets and Node.js." }
];

const Projects: React.FC = () => {
    return (
        <Container id="projects" sx={{ paddingTop: 5 }}>
            <Box textAlign="center">
                <Typography variant="h4">Projects</Typography>
                <Grid container spacing={3} sx={{ marginTop: 3 }}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Typography variant="h6">{project.title}</Typography>
                            <Typography variant="body1">{project.description}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Projects;
