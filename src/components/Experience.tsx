import { Box, Container, Typography } from "@mui/material"

const Experience: React.FC = () => {
    return (
        <Container id="experience" sx={{ paddingTop: 5 }}>
            <Box textAlign="center">
                <Typography variant="h4">Experience</Typography>
                <Typography variant="h6" sx={{ marginTop: 2 }}>Senior Software Engineer at Rampwin Technologies</Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }}>Led the transition from monolothic to microservices architecture, improving scalability.</Typography>
            </Box>
        </Container>
    )
}

export default Experience;