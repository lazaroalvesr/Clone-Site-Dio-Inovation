import styled from "styled-components";

export const CardContainer = styled.div`
width: 100%;
background-color: #384651;
position: relative;
margin-bottom: 24px;

`

export const ImageBackground = styled.img`
height: 100px;
width: 100%;

`

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: 12px;

`
export const UserInfo = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 12px;

div{
    margin-left: 12px;
}
h4{
    font-family: 'Opens Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffff;
}
p{
    font-family: 'Opens Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffff;
}
`

export const UserPicture = styled.img`
width: 32px;
height: 32px;
border-radius: 22px;
border: 3px solid #ffff;

`

export const Postinfo = styled.div`

margin-bottom: 12px;

h4{
    font-family:'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #ffff;
}
p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px
    line-height: 14px;
}
`

export const HasInfo = styled.div`
margin-top: 12px;

h4{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffffffff;
}
p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
}
`