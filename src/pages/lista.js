import Accordion from 'react-bootstrap/Accordion';
import Menu from './components/navbar';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';

export default function lista() {
  var noticias=  
    [
        {
            id: 1,
            "titulo": "Avanços na Tecnologia de Inteligência Artificial",
            "conteudo": "Recentes inovações em inteligência artificial estão transformando diversas indústrias, desde saúde até transporte."
        },
        {
            id: 2,
            "titulo": "Mudanças Climáticas: Um Desafio Global",
            "conteudo": "Estudos recentes mostram que as mudanças climáticas estão afetando o clima global, exigindo ações imediatas."
        },
        {
            id: 3,
            "titulo": "Novos Tratamentos para Doenças Cardíacas",
            "conteudo": "Pesquisadores desenvolveram novas terapias que prometem melhorar o tratamento de doenças cardíacas em pacientes."
        },
        {
            id: 4,
            "titulo": "Exploração Espacial: Missão a Marte",
            "conteudo": "A NASA anunciou planos para uma nova missão a Marte, que irá explorar a possibilidade de vida no planeta vermelho."
        },
        {
            id: 5,
            titulo: "Tendências de Moda para 2024",
            conteudo: "Especialistas em moda revelam as principais tendências que dominarão as passarelas no próximo ano."
        }
    ]
    
  return (
    <>
    <Menu/>
    <Container>
    <Accordion>
        {noticias.map(noticia =>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{noticia.titulo}</Accordion.Header>
        <Accordion.Body>
            {noticia.conteudo}
        </Accordion.Body>
      </Accordion.Item>
    )}
    </Accordion>
    </Container>
    <Footer />
    </>
  );
}