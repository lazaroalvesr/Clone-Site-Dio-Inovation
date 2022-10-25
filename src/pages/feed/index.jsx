import { Link } from 'react-router-dom'

import banner  from '../../assets/banner-home.png'
import { Button} from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from '../../components/Card';
import { UserInfo } from "../../components/Userinfo"


import { Container , Column, Title, TitleHighlight} from './styles';

const Feed =() => {
    return (<>
        <Header  autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </Column>
            <Column flex={1}>
<TitleHighlight>#Ranking top 5</TitleHighlight>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>
<UserInfo percentual={35} nome="lazaro"/>

            </Column>
            <UserInfo percentual={35} nome="lazaro"/>
        </Container>
        
    </>)
}

export { Feed }