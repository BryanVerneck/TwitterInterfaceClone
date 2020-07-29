import React from 'react';

import { Container, Header, BackIcon, ProfileInfo, BottonMenu, HomeIcon, EmailIcon, BellIcon, SearchIcon } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Bryan Verneck</strong>
          <span>112 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage/> */}

      <BottonMenu>
        <HomeIcon className="active"/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottonMenu>
    </Container>
  );
}

export default Main;