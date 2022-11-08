import React from 'react';
import config from '../config.json';
import styled from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import Header from '../src/components/Header';
import Favorites from '../src/components/Favorites';

export const StyledHomePage = styled.div`
  display: 'flex';
  flex-direction: 'column';
  flex: 1;
  // background-color: "red";
`;

function HomePage() {
  // console.log(config.playlists);

  const [valorDoFiltro, setValorDoFiltro] = React.useState('');

  return (
    <>
      <CSSReset />
      <StyledHomePage>
        {/* Prop Drilling (vc vai perfurando a aplicação passando as propriedades ali) */}
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header config={config} />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
          Oi
        </Timeline>
        <Favorites config={config} />
      </StyledHomePage>
    </>
  );
}

export default HomePage;
