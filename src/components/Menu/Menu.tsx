import './Menu.css';
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import lessons from '../../learn/intermediate/lessons';
import { Cancel, CancelOutlined, CheckCircle } from '@mui/icons-material';

function Menu({visible, setVisible} : {visible: boolean, setVisible: any}) {
    useEffect(() => {
        const clickOff = (e:any) => {
            if (e.target.closest('.menu') || !visible) return;
            setVisible(false);
        }

        window.addEventListener('click', clickOff)

        return () => {
            window.removeEventListener('click', clickOff)
        }
    }, [setVisible, visible])

    let location = useLocation();
    const intermediateStats = JSON.parse(localStorage.getItem('hsmccc-progress-intermediate') || '{}');
    const intermediatePtsEarned: number = Object.values(intermediateStats).reduce((a: any, b: any) => a + b, 0) as number;
    const intermediatePtsTotal: number = Object.values(lessons).reduce((a: any, b: any) => a + b.details.points, 0);

    return (
        <div className={visible ? "menu" : "menu hidden"} onClick={(e) => e.stopPropagation()}>
            <Link
                to="/"
                onClick={() => setVisible(false)}
                className={location.pathname === '/' ? 'active' : ''}
            >
                    <h1>HSMC Code</h1>
            </Link>
            <h2>Getting Started</h2>
            <h2>Intro to JS</h2>
            <div className="progressBar">
                <span>{intermediatePtsEarned} pts earned!</span>
                <div className="progress" style={{width: `${intermediatePtsEarned / intermediatePtsTotal * 100}%`}}></div>
            </div>
            {
                lessons.map((lesson, i) => (
                    <Link
                        to={`/learn/intermediate/${i}`}
                        onClick={() => setVisible(false)}
                        key={i}
                        className={(location.pathname === `/learn/intermediate/${i}` ? 'lesson active' : 'lesson') + (intermediateStats[i] ? ' completed' : '')}
                    >
                        {intermediateStats[i] ? <CheckCircle /> : <CancelOutlined />}
                        <h3>{lesson.details.title}</h3>
                    </Link>
                ))
            }
            <p>2. IF Statements</p>
            <p>3. ELSE Statements</p>
            <p>4. Functions</p>
            <p>5. Loops</p>
            <Link
                to="/sandbox"
                onClick={() => setVisible(false)}
                className={location.pathname === '/sandbox' ? 'active' : ''}
            >
                    <h2>Sandbox</h2>
            </Link>
            <hr />
            <a style={{color: 'white', fontWeight: 'normal'}} href="https://hsmc-coding-club.github.io">HSMC Coding Club, 2022-2023 by Hersh and Alex -</a>
            <a target="noopener noreferrer" rel="_blank" href="https://discord.gg/HuCeNbqMCn"> Discord Server</a>
        </div>
    )
}

export default Menu;