import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        list-style-type: none;
        text-decoration: none;
    }

    :root {
        --background: #101113;
        --text-color: #fff;
        --main-color: #34e7f8;
        --other-color: #fcfcfc;
        --big-font: 4rem;
        --p-font: 1rem;
    }

    #root {
        background: radial-gradient(50.53% 50.53% at 50.23% 49.47%, #414d59 0%, #1d2631 100%);
    }

`