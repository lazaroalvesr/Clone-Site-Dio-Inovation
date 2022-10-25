import React from "react";

import { Container, NameText, Progress, UserPicture } from "./style";
const UserInfo = ( nome, image, percentual) => {
    return(
        <Container>
        <UserPicture scr={image}/>
            <div>
                <NameText>{nome}</NameText>
                <Progress percentual={percentual}/>
            </div>
        </Container>
    )
}

export { UserInfo }