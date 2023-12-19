import whatsapp from "./images/whatsapp.png"
import ig from "./images/instagram.png"

const Footer = () =>{
    return(
        <footer id="footer">
      
            <div >
            <a href={"/"}><img src={whatsapp} alt={"whatsapp"} className="icono" /></a>
            <a href={"/"}><img src={ig} alt={"ig"} className="icono" /></a>
            
            </div>
        </footer>
        
    )
}

export default Footer;