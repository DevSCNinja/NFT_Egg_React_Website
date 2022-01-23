import styled, { css } from 'styled-components'

const Card = styled.div`
    padding: 32px;
    background: #191921;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.03);
`;

const CardHeader = styled.div`
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 20px;
    svg {
        color: #373749;
    }
    .arrow-action {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(255, 255, 255, 0.55);

        ${props =>
            props.open &&
            css`
                transform: translateY(-50%) rotate(180deg);
            `};
    }
`;

const CardBody = styled.div`
    display: block;
    overflow: hidden;
    transition: max-height ease 0.5s;

    ${props =>
        props.open ?
        css`
            max-height: auto;
            padding: ${props.contentPaddingY ? props.contentPaddingY + 'px' : '29px'} ${props.contentPaddingX ? props.contentPaddingX + 'px' : '29px'};
            border: 1px solid rgba(255, 255, 255, 0.03);
            background: #1D1D26;
            border-radius: 10px;
            margin-top: 24px;
        ` : 
        css`
            max-height: 0;
            border: 0;
            margin: 0;
            padding: 0;
        `};
`;

export { Card, CardHeader, CardBody };

