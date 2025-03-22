import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <Experience />
            <Skills />
            <Projects />
        </div>
    );
}
