import "../styles/global.css"

//importing images
import tshirt1 from "../assets/tshirt_1.png"
import tshirt2 from "../assets/tshirt_2.png"
import tshirt3 from "../assets/tshirt_3.png"
import tshirt4 from "../assets/tshirt_4.png"
import hoodie1 from "../assets/hoodie_1.png"
import hoodie2 from "../assets/hoodie_2.png"
import hoodie3 from "../assets/hoodie_3.png"
import hoodie4 from "../assets/hoodie_4.png"
const Order = () => {
    return(
        <>
        <div className="main">
            <div className="card">
                <div className="tshirts">
                    <img src={tshirt1} alt="" />
                    <img src={tshirt2} alt="" />
                    <img src={tshirt3} alt="" />
                    <img src={tshirt4} alt="" />
                </div>
                <div className="hoodies">
                    <img src={hoodie1} alt="" />
                    <img src={hoodie2} alt="" />
                    <img src={hoodie3} alt="" />
                    <img src={hoodie4} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Order;