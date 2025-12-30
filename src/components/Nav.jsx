import "../styles/global.css"
import Search from "./Search";
const Nav = ()=>{
    return(
        <>
        <div className="nav">
            <div className="left">
                <h1>Tea Shirt</h1>
            </div>
            
            <div className="mid">
            <Search/>
            </div>

            <div className="right">
            <ul>
                <li>Home</li>
                <li>Order</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
        </>
    )
    }
export default Nav;