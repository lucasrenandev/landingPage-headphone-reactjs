import { useEffect, useRef, useState } from "react"
import { Header, Logo, NavBar, NavList, List,
Link, Icons, MenuIcon } from "./styled"
import { BiMenu } from "react-icons/bi"
import { IoClose } from "react-icons/io5"

export default function header() {
    const [menuIcon, setMenuIcon] = useState(BiMenu)
    const navRef = useRef(null)

    const toggleMenu = () => {
        if(navRef.current.classList.contains("open")) {
            navRef.current.classList.remove("open")
            setMenuIcon(BiMenu)
        }
        else {
            navRef.current.classList.add("open")
            setMenuIcon(IoClose)
        }
    }

    const hidleMenu = () => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("open")
            setMenuIcon(BiMenu)
        })
    }

    useEffect(hidleMenu)

    return(
        <Header>
            <Logo href="/"><i className="bx bx-headphone"></i>Soundbox</Logo>

            <NavBar ref={navRef} onScroll={hidleMenu}>
                <NavList>
                    <List><Link href="#" className="active">Overview</Link></List>
                    <List><Link href="#">Teach Specs</Link></List>
                    <List><Link href="#">Reviews</Link></List>
                    <List><Link href="#">Contact Us</Link></List>
                </NavList>
            </NavBar>

            <Icons>
                <i className="bx bx-cart"></i>
                <MenuIcon onClick={toggleMenu}>{menuIcon}</MenuIcon>
            </Icons>
        </Header>
    )
}