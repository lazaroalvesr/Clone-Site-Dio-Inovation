import { Link } from 'react-router-dom'

import banner  from '../../assets/banner-home.png'
import { Button} from "../../components/Button";
import { Header } from "../../components/Header";

import { Container , TextContent, Title, TitleHighlight} from './styles';

const Home =() => {
    return (<>
        <Header />
        <Container>
            <div>
              <Title>
              <TitleHighlight>
               Implemente 
               <br/>
                </TitleHighlight>
                O seu futuro Global Agora
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo    
                </TextContent>
                <Button tittle="Começar agora" variant="secondary" onclick={() => null}/>
            </div>
            <div>
                <img src={banner} alt="Banner Dio" />
            </div>
        </Container>
        
    </>)
}

export { Home }