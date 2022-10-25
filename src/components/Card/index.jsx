import React from 'react'
import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    UserInfo,
    Postinfo,
    UserPicture
} from './style'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground/>
            <Content>
                <UserInfo>
                    <UserPicture/>
                    <div>
                        <h4>Lazaro</h4>
                        <p>8 minutos</p>
                    </div>
                </UserInfo>
                <Postinfo>
                    <h4>Projeto inter tech +</h4>
                    <p>10 minutos atras... <strong>Saiba mais</strong></p>
                </Postinfo>
                <HasInfo>
                    <h4> HTML, CSS, JS</h4>
                    <p>
                        
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export { Card }
