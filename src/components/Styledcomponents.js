
import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: minmax(120px, auto) repeat(5, 60px);
    justify-content: center;
    align-content: center;

    width: 300px;
    margin: 70px auto;
    box-shadow: 0px 0px 0px 10px rgba(100, 100, 100, 0.6);

`


export const Screen = styled.div`
    border: 4px outset rgba(200, 200, 200);
    grid-column: 1/-1;
    background-color: rgba(60, 60, 67, 0.75);
    background-color: rgba(100, 100, 100, 0.6);
    background-color: rgba(230, 230, 230);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break word; 
    word-break: break-all;
    text-align: right;
    font-weight: 600;

`


export const Previous = styled.div`
    color: black;
    font-size: 1rem;
    border-bottom: 1px solid grey;
`


export const Current = styled.div`
    color: black;
    font-size: 1.4rem;
`

export const Button = styled.button`
    grid-column: span 1;
    display: block;
    cursor: pointer;
    font-size: 1.4rem;
    border: 4px outset rgba(200, 200, 200);
    background-color: rgba(230, 230, 230);
    &:hover {
        background-color: red;
    };
    
    ${ ({gridSpan}) => gridSpan && `grid-column: span ${gridSpan}`}
    ${ ({operation}) => operation && `background-color: grey`}
    ${ ({doubleRow}) => doubleRow && `grid-row: 5/7;`}
    ${ ({doubleRow}) => doubleRow && `grid-column: 5 / 6;`}


`