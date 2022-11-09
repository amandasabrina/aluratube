import React from 'react';
import config from '../config.json';

import styled from 'styled-components';
import Menu from '../src/components/Menu';
import Timeline from '../src/components/Timeline';
import Header from '../src/components/Header';
import Favorites from '../src/components/Favorites';

import { parseCookies } from 'nookies';

export const StyledHomePage = styled.div`
  display: 'flex';
  flex-direction: 'column';
  flex: 1;
  width: 100vw;
`;

export default function HomePage() {
  // console.log(config.playlists);
  const [valorDoFiltro, setValorDoFiltro] = React.useState('');

  return (
    <>
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

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// essa função só rodará: uma vez enquanto vc está em servidor de desenvolvimento (toda vez q vc acessa), eee
// tb quando ta em tempo de build, no momento que for buildada a aplicação
// export async function getStaticProps() {
//   return {
//     props: {
//       msg: '[STATIC] Woooba',
//     },
//   };
// }

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// qnd sua aplicação estiver no ar, essa daqui vai rodar pra cada requisição que tiver
export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  return {
    props: {
      user_theme: cookies.user_theme || 'light',
    },
  };
}
