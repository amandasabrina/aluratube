import React from 'react';
import config from '../config.json';
import styled, { ThemeProvider } from 'styled-components';

import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import Header from '../src/components/Header';
import Favorites from '../src/components/Favorites';

import { GlobalStyles } from '../src/components/globalStyles';
import { lightTheme, darkTheme } from '../src/components/Themes';

export const StyledHomePage = styled.div`
  display: 'flex';
  flex-direction: 'column';
  flex: 1;
  // background-color: "red";
`;

function HomePage() {
  // console.log(config.playlists);

  const [valorDoFiltro, setValorDoFiltro] = React.useState('');

  const [theme, setTheme] = React.useState('light');
  const themeToggler = () => {
    console.log('fui clicado');
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <CSSReset />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledHomePage>
          {/* Prop Drilling (vc vai perfurando a aplicação passando as propriedades ali) */}
          <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} themeToggler={themeToggler} theme={theme} />
          <Header config={config} />
          <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
            Oi
          </Timeline>
          <Favorites config={config} />
        </StyledHomePage>
      </ThemeProvider>
    </>
  );
}

export default HomePage;
