import styled from 'styled-components';
import backgroundPic from '../img/bg.png';



export const Wrap = styled.div`
    width: 100%;
    height: 774px;
    background: url(${backgroundPic});
    background-repeat: no-repeat;
   `

export const Mask = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 515px;
    `
export const Left = styled.div`
    width: 50%;
    height: 100%;
    background: url(${backgroundPic})
    `

export const Right = styled.div`
    padding-top: 144px;
    padding-left: 84px;
    width: 50%;
    `
export const Text = styled.h2`
    font-family: Poppins;
    font-weight: bold;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    color: #000000;
    `
export const Paragrah = styled(Text)`
    font-size: 24px;
    font-weight: 500;
    line-height: 1.5;
    `
export const NumberText = styled.div`
    padding: 0 188px;
    height: 259px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    `
export const Item = styled.div`
   `
export const Number = styled.p`
    margin-top: 79px;
    margin-bottom: 0;
    color: #3ab2b3;
    line-height: 0.75;
    font-family: Poppins;
    font-size: 48px;  
    font-weight: bold;
    text-align: center;
}`

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: #000000;
    font-family: Poppins;
    `