import whatsapp from "./images/whatsapp.png"
import ig from "./images/instagram.png"

const Footer = () =>{
    return(
        <footer id="footer">
      
            <div >
            <a href="https://www.whatsapp.com"><img src={whatsapp} alt={"whatsapp"} className="icono" /></a>
            <a href="https://www.instagram.com/amarenatiendaorganica"><img src={ig} alt={"ig"} className="icono" /></a>
            
            </div>
        </footer>
        
    )
}

export default Footer;