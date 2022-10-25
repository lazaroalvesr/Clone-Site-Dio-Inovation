
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";



import { Column, Container, CriarText, EsqueciText, Row, Subtitlelogin, Title, TitleLogin, Wrapper } from './styles';

const Login = () => {
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma pra você aprender com experts
                </Title>
                
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <Subtitlelogin>Faça seu login</Subtitlelogin>
                <form>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha" type="password"/>
                    <Button title="Entrar" variant="secondary"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar contas</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>

    </>)
}

export { Login }