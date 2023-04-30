import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 3%;

    @media screen and (max-width: 1200px) {
        padding: 14px 2%;
    }
`
export const Logo = styled.a`
    color: var(--text-color);
    font-size: 1.8rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    i {
        margin-right: 5px;
        color: var(--main-color);
    }

    @media screen and (max-width: 370px) {
        font-size: 1.5rem;
    }
`
export const NavBar = styled.nav`
    @media screen and (max-width: 980px) {
        position: absolute;
        top: -500px;
        right: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 1000;
        background-color: var(--main-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        transition: top 0.5s ease;

        &.open {
            top: 10%;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 980px) {
        flex-direction: column;
        gap: 1rem;
    }
`
export const List = styled.li`
    padding: 0 1.8rem;
    margin: 0 5px;

    @media screen and (max-width: 980px) {
        padding: 1rem 0;
        margin: 0;
    }
`
export const Link = styled.a`
    color: var(--other-color);
    font-size: var(--p-font);
    font-weight: 500;
    transition: all 0.5s ease;

    &.active {
        color: var(--main-color);
    }

    &:hover {
        color: var(--main-color);
    }

    @media screen and (max-width: 980px) {
        display: block;
        color: var(--background);

        &.active {
            color: var(--background);
        }
        &:hover {
            color: var(--background);
        }
    }
`
export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    i {
        color: var(--text-color);
        font-size: 30px;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover {
            color: var(--main-color);
            transform: translateY(-4px);
        }
    }
`
export const MenuIcon = styled.div`
    color: var(--text-color);
    font-size: 36px;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 980px) {
        display: inline-flex;
        align-items: center;
        z-index: 1001;
    }
`