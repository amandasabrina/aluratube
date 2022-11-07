import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Favorites from '../src/components/Favorites';

export const StyledHomePage = styled.div`
  display: 'flex';
  flex-direction: 'column';
  flex: 1;
  // background-color: "red";
`;

function HomePage() {
  // console.log(config.playlists);
  return (
    <>
      <CSSReset />
      <StyledHomePage>
        <Menu />
        <Banner />
        <Header config={config} />
        <Timeline playlists={config.playlists}>Oi</Timeline>
        <Favorites config={config} />
      </StyledHomePage>
    </>
  );
}

export default HomePage;
