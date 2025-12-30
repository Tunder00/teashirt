import "../styles/global.css"
import Gmail from "../assets/Gmail.png"
import Instagram from "../assets/Instagram.png"
import reddit from "../assets/reddit.png"
const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="contact">
                <h3>Contact Us: 8010203040</h3>
            </div>
            <div className="imgs">
                <img src={Gmail} alt="" />
                <img src={Instagram} alt="" />
                <img src={reddit} alt="" />
            </div>
        </div>
        </>
    )
}
export default Footer;