import { Link } from 'react-router-dom'
import './Inicio.css'
import imgInformatica from '../assets/informatica.png'
import imgAlimentos from '../assets/alimentos.jpg'
import imgApicultura from '../assets/apicultura.png'

function Inicio() {
    return(
        <div className="inicio">
            <div className="inicio-introducao">
                <h1>Bem-vindo ao Campus Pau dos Ferros!</h1>
                <p>O IFRN é uma instituição pública federal de ensino, presente em várias cidades do Rio Grande do Norte. O Campus Pau dos Ferros fica no interior do estado, na região Oeste Potiguar, e atende a comunidade oferecendo cursos técnicos gratuitos e de qualidade nas áreas de Informática, Alimentos e Apicultura, contribuindo para o desenvolvimento profissional e econômico da região.</p>
            </div>

            <div className="inicio-cursos">
                <div className="card">
                    <img src={imgInformatica} alt="Informática" />
                    <Link to="/informatica" className="curso informatica">
                        <h2>Informática</h2>
                    </Link>
                </div>

                <div className="card">
                    <img src={imgAlimentos} alt="Alimentos" />
                    <Link to="/alimentos" className="curso alimentos">
                        <h2>Alimentos</h2>
                    </Link>
                </div>

                <div className="card">
                    <img src={imgApicultura} alt="Apicultura" />
                    <Link to="/apicultura" className="curso apicultura">
                        <h2>Apicultura</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Inicio;