import React from 'react';

import Feed from '../Feed'

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage, 
  EditButton, 
  } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
      
        <h1>Bryan Verneck</h1>
        <h2>@Bryan_Verneck</h2>

        <p>
          Developer at <a href="https://www.wipro.com/">@WiproLimited </a>
        </p>
      

        <ul>
          <li>
            <LocationIcon/>
            Curitiba, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 01 de fevereiro de 2000
          </li>
        </ul>

        <Followage>
          <span>
            <strong>21</strong> Seguindo 
          </span>
          <span>
            <strong>102 </strong> Seguidores 
          </span>
        </Followage>

      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage;