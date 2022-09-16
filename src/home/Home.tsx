import { ArrowRight, Build, Grade, School } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>HSMC, let's Code!</h1>
            <p>Here, you'll find instruction and developer sandboxes that help you learn to code, even outside club meetings.</p>
            <p>New to Coding Club? Try our beginner courses.</p>

            <div className="courseCards">
                <div className="courseCard">
                    <h2>Getting Started</h2>
                    <div className="icon">
                        <School />
                    </div>
                    <p>Great for those new to coding. Use block based coding and HTML to create basic games and websites!</p>
                    <div className="btn disabled">COMING SOON</div>
                </div>
                <div className="courseCard">
                    <h2>Intro to JS</h2>
                    <div className="icon">
                        <Grade />
                    </div>
                    <p>Build web apps and games with JavaScript! Perfect for those who want a hands on experience in web development.</p>
                    <Link to="/learn/intermediate/" className="btn primary">
                        Let's go
                        <ArrowRight />
                    </Link>
                </div>
                <div className="courseCard">
                    <h2>Sandbox</h2>
                    <div className="icon">
                        <Build />
                    </div>
                    <p>Play around and have fun in a JavaScript sandbox!</p>
                    <Link to="/sandbox" className="btn primary">
                        Let's go
                        <ArrowRight />
                    </Link>
                </div>
            </div>

            <hr style={{marginTop: '5em'}} />
            <a style={{color: 'white', fontWeight: 'normal'}} href="https://hsmc-coding-club.github.io">HSMC Coding Club, 2022-2023 -</a>
            <a target="noopener noreferrer" rel="_blank" href="https://discord.gg/HuCeNbqMCn"> Join our Discord!</a>
        </div>
    );
}

export default Home;