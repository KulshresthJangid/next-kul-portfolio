import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import Link from "next/link"

const Header: React.FC = () => {
    return (
        <AppBar position="sticky" >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }} >
                    Kulshresth Jangid
                </Typography>
                <Link href="#about" passHref>
                    <Button color="inherit">About</Button>
                </Link>
                <Link href="#experience" style={{ textDecoration: "none" }} passHref><Button color="inherit">Experience</Button></Link>
                <Link href="#skills" passHref><Button color="inherit">Skills</Button></Link>
                <Link href="#projects" passHref><Button color="inherit">Projects</Button></Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;