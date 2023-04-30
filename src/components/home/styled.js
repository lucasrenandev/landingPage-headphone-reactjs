import styled from "styled-components";

export const Home = styled.section`
    width: 100%;
    height: 89.25vh;
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    align-items: center;
    gap: 2rem;
    position: relative;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr;
        text-align: center;
        height: 100%;
    }

    @media screen and (max-width: 420px) {
        gap: 0;
    }
`
export const HomeImage = styled.figure`
    text-align: right;

    @media screen and (max-width: 1300px) {
        text-align: center;
    }
`
export const Image = styled.img`
    width: 460px;
    max-width: 100%;
    height: auto;

    @media screen and (max-width: 700px) {
        width: 360px;
    }

    @media screen and (max-width: 370px) {
        width: 260px;
    }
`
export const HomeText = styled.main`
    @media screen and (max-width: 1300px) {
        padding-bottom: 2rem;
    }
`
export const H1 = styled.h1`
    color: var(--text-color);
    font-size: 4rem;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 1rem;

    @media screen and (max-width: 700px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 370px) {
        font-size: 2rem;
    }
`
export const H3 = styled.h3`
    font-size: 14px;
    font-weight: 400;
    color: #ffffff99;
    line-height: 1;
`
export const Price = styled.div`
    margin-top: 4rem;

    span {
        color: var(--text-color);
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 2px;

        @media screen and (max-width: 700px) {
            font-size: 2rem;
        }
    }
`
export const Button = styled.a`
    display: inline-block;
    background-color: transparent;
    border: 2px solid var(--text-color);
    padding: 13px 4.4rem;
    margin-top: 2rem;
    color: var(--text-color);
    text-transform: capitalize;
    font-size: var(--p-font);
    font-weight: 500;
    transition: 0.5s ease;

    &:hover {
        background-color: var(--text-color);
        color: var(--background);
    }
`
export const Items = styled.div`
    position: absolute;
    content: '';
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    @media screen and (max-width: 1300px) {
        left: 2%;
    }

    @media screen and (max-width: 560px) {
        display: none;
    }
`
export const Item = styled.figure`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:nth-child(1) {
        background-color: var(--main-color);
    }
    &:nth-child(2) {
        background-color: #ff758d;
    }
    &:nth-child(3) {
        background-color: #ffd06d;
    }

    &:hover {
        transform: translateY(-5px);
    }
`
export const ItemImage = styled.img`
    width: 45px;
    height: auto;
`
export const ScrollDown = styled.div`
    position: absolute;
    right: 7rem;
    bottom: 2rem;

    @media screen and (max-width: 980px) {
        display: none;
    }
`
export const Link = styled.a`
    color: var(--text-color);
    font-size: 15px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 1rem;

    i {
        font-size: 1.6rem;
        color: var(--main-color);
        transition: 0.5s ease;

        &:hover {
            transform: translateY(-5px);
        }
    }
`