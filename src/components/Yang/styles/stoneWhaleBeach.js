import styled from 'styled-components';
import beachPic from '../img/beach.png';
import stonePic from '../img/stones.png';
import whale from '../img/whale.png';

export const Wrap = styled.div`
    width: 100%;
    height: 495px;
    display: flex;
    `
export const Stone = styled.img`
    background: url(${stonePic});
    background-repeat: no-repeat;
    width: 33%;
`
export const Beach = styled.img`
    background: url(${beachPic});
    background-repeat: no-repeat;
    width: 33%;
`
export const Whale = styled.img`
    background: url(${whale});
    background-repeat: no-repeat;
    width: 34%;
`