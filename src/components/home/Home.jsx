import { Home, HomeImage, Image, HomeText,
H1, H3, Price, Button, Items, Item, ItemImage,
ScrollDown, Link } from "./styled";
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png"
import product3 from "../../assets/product3.png"
import item1 from "../../assets/main1.png"
import item2 from "../../assets/main2.png"
import item3 from "../../assets/main3.png"
import { useEffect, useRef, useState } from "react";

export default function home() {
    const [product, setProduct] = useState(product1)
    const imageRef = useRef(null)

    useEffect(() => {
        const items = document.querySelectorAll(".item")
        
        items.forEach(item => {
            item.addEventListener("click", function(event){
                const target = event.currentTarget.id
                
                if(target === "item1") {
                    setProduct(imageRef.current.src = product1)
                }
                else if(target === "item2") {
                    setProduct(imageRef.current.src = product2)
                }
                else {
                    setProduct(imageRef.current.src = product3)
                }
            })
        })
    }, [])

    useEffect(() => {
        const sr = ScrollReveal({
            distance: "3rem",
            duration: 2500,
        })
        sr.reveal(".home-image", {delay: 550, origin: "top"})
        sr.reveal(".home-text", {delay: 300, origin: "top", interval: 600})
    }, [])

    return(
        <Home>
            <HomeImage className="home-image">
                <Image ref={imageRef} src={product} alt="Product 1"/>
            </HomeImage>

            <HomeText className="home-text">
                <H1>Wireless <br /> Headphones</H1>
                <H3>The smarter way to listen</H3>
                <Price>
                    <span>$199.00</span>
                </Price>
                <Button href="#">Shop now</Button>
            </HomeText>

            <Items className="items">
                <Item className="item" id="item1">
                    <ItemImage src={item1} alt="Product 1"/>
                </Item>
                <Item className="item" id="item2">
                    <ItemImage src={item2} alt="Product 2"/>
                </Item>
                <Item className="item" id="item3">
                    <ItemImage src={item3} alt="Product 3"/>
                </Item>
            </Items>

            <ScrollDown>
                <Link href="#">Scroll Down <i className="bx bx-down-arrow-circle"></i></Link>
            </ScrollDown>
        </Home>
    )
}