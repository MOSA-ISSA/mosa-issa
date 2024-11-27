import styled from "styled-components";

export const Page = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    display: flex;
    flex: 1;
    height: 100dvh;
    width: 100%;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    transition: all 0.3s ease;
`;

export const ThemeDiv = styled.div`
    background: linear-gradient(
        ${(props) => props.theme.deg}deg, 
        ${(props) => props.theme.sky0},
        ${(props) => props.theme.sky1},
        ${(props) => props.theme.sky2}, 
        ${(props) => props.theme.sky3}, 
        ${(props) => props.theme.sky4} 
    );
    background-size: 400% 400%;
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
`;

export const Container = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    margin: 0px;
    padding: 0px;
    transition: all 0.3s ease;
`;

export const Button = styled.button`
    background-color: ${(props) => `${props.theme.button}80`};
    color: ${(props) => props.theme.text};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: clamp(10px, 1vw, 16px);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${(props) => props.theme.text};
        color: ${(props) => props.theme.body};
    }
`;

export const H1 = styled.h1`
    color: ${(props) => props.theme.text};
    font-size: clamp(26px, 5vw, 50px);
    margin: 0px;
    padding: 5px;
    transition: all 0.3s ease;
    textShadow: 2px #000000;
    // -webkit-text-stroke: 1px black;
    // text-stroke: 1px black;
    background-color: ${(props) => `${props.theme.body}80`};
    border-radius: 10px;
    &:hover {
        font-size: 4rem;
        color: ${(props) => props.theme.button};
        background-color: ${(props) => props.theme.body};
        padding: 0.5rem;
        border-radius: 1rem;
    }
`;

export const P = styled.p`
    color: ${(props) => props.theme.text2};
    font-size: 1.25rem;
    margin: 0px;
    padding: 0px;
    transition: all 0.3s ease;
    &:hover {
        font-size: 1.3rem;
        color: ${(props) => props.theme.button};
    }
`;

export const Text = styled.div`
    color: ${(props) => props.theme.text2};
`

export const Dot = styled.div`
    background-color: ${(props) => `${props.theme.text}50`};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
`