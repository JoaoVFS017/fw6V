import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import { useState } from "react";

export default function Promessa(){
    const [divida, setDivida] = useState("")
    setTimeout(() => {
        document.title = "Minha promessa"
        setDivida("da minha vida")
    }, 3000);
    return <><Menu/>
    <Container>
        Promessas {(divida==="" ? " carregando...": divida)}
    </Container>
    <Footer/>
    </>
}