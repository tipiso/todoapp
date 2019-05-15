import styled from 'styled-components';

const DeleteButton = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    top:50%;
    transform: translateY(-50%);
    margin-right: .5rem;
    transition: ease-in .3s all;
    cursor: pointer;


    &::after{
        content: '';
        background: black;
        position: absolute;
        width: 18px;
        height: 2px;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(45deg);
    }

    &::before{
        content: '';
        background: black;
        position: absolute;
        width: 18px;
        height: 2px;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(-45deg);
    }
    `;

const Header = styled.h1`
    letter-spacing: 2px;
    font-size: 2.5rem;
`;

const Error = styled.span`
    display: inline-block;
    color: red;
`;

const Task = styled.li`
    height: 4vh;
    font-size: 1.2rem;
    line-height: 4vh;
    margin: .2rem 0;
    background: gold;
    color: black;
    position: relative;
    opacity: ${props => props.completed ? '.4' : '1'};
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: .2rem;
    border: black 1px solid;
    height: 80%;
    width: 4%;
    border-radius: 3px;
    cursor: pointer;

    &::not(:checked):hover{
        opacity: .4;
    }

    &:checked{
        cursor: default;
    }

    &:checked{
        position: absolute;
        background-color: gold;
        color: gold;
        border-color: black;

        &:after{
            font-size: 25px;
            top: 0;
            left: 0;
            transform: translate(35%, -10%);
            content: '✔';                
            position: absolute;
            color: black;
            }
        }
    }
`;

const Input = styled.input`
    font-size: 1rem;
    padding: .8rem 1.2rem;
    border: solid 2px transparent;
    border-bottom: ${props => props.isEmpty ? 'red solid 2px' : 'gold solid 2px'};
    transition: ease-in .2s all; 

    :focus{
        border: black solid 2px;
        outline: none;
        color: black
        background: gold;
    }

    :hover{
        border: gold solid 2px;
    }

    ::placeholder{
        color:black;
    }
`;

const Button = styled.button`
    font-size: 1rem;
    padding: .8rem 1.2rem;
    text-transform: uppercase;
    background: #000;
    color: gold;
    outline: none;
    font-weight: bold;
    transition: ease-in .2s all;
    cursor: pointer;
    border: gold solid 2px;

    :hover{
        color: black;
        background: gold;
        border: black solid 2px;
    }
`;

const ActiveButton = styled.button`
    font-size: .8rem;
    padding: .6rem 1rem;
    text-transform: uppercase;
    outline: none;
    font-weight: bold;
    transition: ease-in .2s all;
    cursor: pointer;
    background: ${props => props.active ? 'black' : 'gold'};
    color: ${props => props.active ? 'gold' : 'black'};
    border: ${props => props.active ? 'gold solid 2px' : 'black solid 2px'};
    margin-right: .5rem;

    &:hover{
        opacity: .8;
    }
`;

const Wrapper = styled.div`
    width: 60%;
    margin: 50px  auto 0;
    padding: 2rem 1rem;
    text-align: center;
    border: solid 2px black;
    background: white;
`;

const InputWrapper = styled(Wrapper)`
    height: 5vh;
    padding: 1rem;
    margin: 1rem auto;
    border: none;
`;

const UnorderedList = styled.ul`
    width: 80%;
    margin: 1rem auto;
    list-style: none;
    padding: 1.5rem;
    border: 1px solid #444;
    background: #eee;
`;

export { Wrapper, InputWrapper, UnorderedList, Button, Input, Error, CheckBox, Task, Header, DeleteButton, ActiveButton };