import { Box, Container, Grid, Typography } from "@mui/material"

const skills = ["Java", "Node.js", "React.js", "MongoDB", "AWS", "Docker"];
const Skills: React.FC = () => {
    return (
        <Container id="skills" sx={{ paddingTop: 5 }}>
            <Box textAlign="center">
                <Typography variant="h4">Skills</Typography>
                <Grid container spacing={3} sx={{ marginTop: 3 }}>
                    {skills.map((skill, index) => (
                        <Grid item xs={6} sm={4} key={index}>
                            <Typography variant="h6">{skill}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default Skills;