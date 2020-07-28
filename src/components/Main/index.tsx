import React from 'react';

import { Container, Header, BackIcon, ProfileInfo  } from './styles';

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

      {/* <ProfilePage/>

      <BottonMenu>
        <HomeIcon/>
        <SearchIcon/>
        <BellIcon/>
        <EmailIcon/>
      </BottonMenu> */}
    </Container>
  );
}

export default Main;