import './Curso.css'

function Alimentos() {
    return(
        <div className="card card-alimentos">
            <h2>Alimentos</h2>
            <div className="cont-apresentacao">
                <h3>Apresentação do curso</h3>
                <p>O Curso Técnico Integrado em Alimentos forma profissionais que atuam no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, realizando análises físico-químicas, microbiológicas e sensoriais; auxiliam no planejamento, coordenação e controle de atividades do setor; realizam a sanitização das indústrias alimentícias e de bebidas; controlam e corrigem desvios nos processos manuais e automatizados; acompanham a manutenção de equipamentos; participam do desenvolvimento de novos produtos e processos.</p>
            </div>
            <div className="cont-atuacao">
                <h3>Possibilidades de atuação</h3>
                <p>Indústrias de alimentos e bebidas;  Entrepostos de armazenamento e beneficiamento;  Laboratórios, institutos de pesquisa e consultoria;  Órgãos de fiscalização sanitária e proteção ao consumidor;  Indústria de insumos para processos e produtos.</p>
            </div>
        </div>
    )
};

export default Alimentos;