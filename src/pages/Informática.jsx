import './Curso.css'

function Informática() {
    return(
        <div className="card card-informatica">
            <h2>Informática</h2>
            <div className="cont-apresentacao">
                <h3>Apresentação do curso</h3>
                <p>O Curso Técnico Integrado em Informática forma profissionais que desenvolvem programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação; utilizam ambientes de desenvolvimentos de sistemas, sistemas operacionais e banco de dados; realizam testes de software, mantendo registro que possibilitem análises e refinamento dos resultados; executam manutenção de programas de computadores implantados. Possibilidades de atuação: Instituições públicas, privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores.</p>
            </div>
            <div className="cont-atuacao">
                <h3>Possibilidades de atuação</h3>
                <p>Instituições públicas, privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores.</p>
            </div>
        </div>
    )
};

export default Informática;