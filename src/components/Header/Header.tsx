import { PlayArrow, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';

function Header({runFn} : {runFn?: null|(() => void)}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <Link to="/" className="logo">
                <h1>
                    <span className="logo1">HSMC</span>
                    <span className="logo2">;</span>
                    <span className="logo3">CC</span>
                </h1>
                {runFn && <div>
                    <PlayArrow />
                    <span>Run</span>
                </div>}
            </Link>
            <button className={menuOpen ? 'primary' : ''} style={{margin: 5}} onClick={(e) => { setMenuOpen(!menuOpen); e.stopPropagation() }}>
                <MenuIcon />
                <span>Menu</span>
            </button>
            <Menu visible={menuOpen} setVisible={setMenuOpen} />
        </header>
    )
}

export default Header;