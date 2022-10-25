import React from "react";
import logo from "../../assets/logo.png";
import { Button } from "../Button"

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./style";

const Header = ( {autenticado}    ) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    {autenticado ?  ( 
                    <>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />

                    </BuscarInputContainer>
                    <Menu>live Code</Menu>
                    <Menu>Global</Menu>
                    </>
                      )  :null}
                    </Row>
                    <Row>
                        {autenticado ?
                        <UserPicture/>
                        ( 
                            <>
                    <MenuRight href="#">Home</MenuRight>
                    <Button tittle="Entrar" />
                    <Button tittle="Cadastrar"/>
                    </>
                    )};
                    </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }