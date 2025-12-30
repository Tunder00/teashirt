import "../styles/global.css"
import logo from "../assets/logo.png"
const Home = ()=>{
    return(
        <>
        <div className="home">
            <div className="img">
                <img src={logo} alt=""/>
            </div>
            <div className="text">
            <h2>Welcome to Tea Shirt: Wear Your Art. Live the Quality.</h2> <br /><br />

            <p>
                Tired of the ordinary? At Tea Shirt, we merge exclusive, design-first aesthetics with uncompromising quality to create premium t-shirts and hoodies that are meant to stand out and last. Each piece in our collection is conceived as wearable art, featuring original, curated graphics that ensure your style is as unique as you are. We believe your clothing should reflect your taste and values, which is why we obsess over every detail, from the graphic's concept to its final application. If you’re looking for apparel that goes beyond basic to make a thoughtful statement, explore our latest designs in The T-Shirt Gallery and The Hoodie Haven.
            </p>  <br /><br />
            <p>
                This commitment to design is matched only by our dedication to superior craftsmanship and materials. We reject fast-fashion fabrics, opting instead for luxuriously soft, heavy-weight cotton blends that provide exceptional comfort and durability. This is the premium difference you can instantly feel—a quality garment that maintains its perfect fit and vibrant print through countless wears and washes. Investing in a Tea Shirt item is investing in a piece of your wardrobe that you’ll rely on for years. Experience the blend of exceptional style and lasting quality today.
            </p> <br /><br />
            <p style={{fontWeight:"bolder"}}>
                - The Tea Shirt Team
            </p>
            </div>
        </div>
        </>
    )
}
export default Home;