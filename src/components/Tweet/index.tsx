import React from 'react';

import { 
  Container, 
  Retweeted, 
  RocketseatIcon, 
  Body,
  Avatar, 
  Content,
  Header, 
  Description, 
  ImageContent, 
  Icons,
  Status, 
  CommentIcon, 
  LikeIcon, 
  RetweetIcon, 
  Dot
  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Você retweetou
      </Retweeted>

      <Body>
         <Avatar/>
         <Content>
           <Header>
             <strong>Rocketseat</strong>
             <span>@Rocketseat</span>
             <Dot />
             <time>30 de julho</time>
           </Header>

           <Description>Foguete não tem ré 🚀</Description>

           <ImageContent />

           <Icons>
             <Status>
               <CommentIcon />
               18
             </Status>
             <Status>
               <RetweetIcon />
               23
             </Status>
             <Status>
               <LikeIcon />
               596
             </Status>
           </Icons>
         </Content>
      </Body>

    </Container>
  )
}

export default Tweet;
