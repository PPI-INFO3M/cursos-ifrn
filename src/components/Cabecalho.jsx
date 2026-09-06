import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Cabecalho.css'

function Cabecalho() {
    return (
        <header>
            <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
            </Link>
            
            <nav>
                <Link to="/">
                    Início
                </Link>
                <Link to="/informatica">
                    Informática
                </Link>
                <Link to="/alimentos">
                    Alimentos
                </Link>
                <Link to="/apicultura">
                    Apicultura
                </Link>
            </nav>
        </header>
    )
};

export default Cabecalho;