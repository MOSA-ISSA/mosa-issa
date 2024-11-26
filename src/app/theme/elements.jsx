import styled from "styled-components";

export const Page = styled.div`
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    display: flex;
    flex: 1;
    height: 100dvh;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
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
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.text};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${(props) => props.theme.text};
        color: ${(props) => props.theme.body};
    }
`;

export const H1 = styled.h1`
    color: ${(props) => props.theme.text};
    font-size: 3rem;
    // font-size: clamp(1.5rem, 5vw, 3rem);
    margin: 0px;
    padding: 0px;
    transition: all 0.3s ease;
    textShadow: '1px 1px 2px rgba(255,255,255,5)';
    -webkit-text-stroke: 1.5px black;
    text-stroke: 2px black;
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