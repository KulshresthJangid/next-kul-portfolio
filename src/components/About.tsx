import { Box, Container, Typography } from "@mui/material"

const About: React.FC = () => {
    return (
        <Container id="about" sx={{ paddingTop: 5 }}>
            <Box textAlign="center" >
                <Typography variant="h4">About Me</Typography>
                <Typography variant="body1" sx={{ marginTop: 2 }} >
                    I'm Kulshresth Jangid, a Senior Software Engineer with experience in Full-Stack Development.
                    I have a passion for building scalable and effcient applications.
                </Typography>
            </Box>
        </Container>
    )
}

export default About;