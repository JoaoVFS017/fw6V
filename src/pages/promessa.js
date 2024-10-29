import { Container } from "react-bootstrap";
import Menu from "./components/navbar";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Promessa(){
    const [divida, setDivida] = useState("")
    useEffect(() =>{
        setTimeout(() => {
        document.title = "Minha promessa"
        setDivida(saoLonguinho("da minha vida"))
    }, 3000);
  })
    return <><Menu/>
    <Container>
        Promessas {(divida==="" ? <img src="gif1.gif" width={40} height={60}/>: divida)}
    </Container>
    <Footer/>
    </>
}
function saoLonguinho(texto) {
    setTimeout(()=>{
        return (texto)
    }, 2000)
}