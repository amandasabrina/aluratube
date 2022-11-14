import React from 'react';
import Head from 'next/head';

import { GlobalStyles } from '../src/components/globalStyles';
import { ColorModeStorageProvider, ColorModeContext } from '../src/contexts/ColorContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/components/Themes';
import { CSSReset } from '../src/components/CSSReset';

import RegisterVideo from '../src/components/RegisterVideo';

// _app.js -> Definições globais do NextJS
// Provider -> Uma estrutura global que "amarra" a aplicação. Ele prove pra aplicação
// Contexto -> Ele guarda infos pra aplicação. Quem tiver acesso ao contexto, tem acesso ao que ta guardado
// ThemeProvider -> Prover o tema para a app toda ( faz o styled components ter acesso aos valores de qualquer canto ), toma conta do tema
// ColorModeStorageProvider -> Prove o state de light ou dark para todo mundo, toma conta de saber se ta no modo claro ou escuro

function ProviderWrapper(props) {
  return <ColorModeStorageProvider>{props.children}</ColorModeStorageProvider>;
  // return <ColorModeStorageProvider initialMode={'light'}>{props.children}</ColorModeStorageProvider>;
}

function MyApp({ Component, pageProps }) {
  const colorContext = React.useContext(ColorModeContext);

  return (
    <>
      <Head>
        <title>AluraTube</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ThemeProvider theme={colorContext.theme === 'light' ? lightTheme : darkTheme}>
        <CSSReset />
        <GlobalStyles />
        <Component {...pageProps} />
        <RegisterVideo />
      </ThemeProvider>
    </>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}

// export default MyApp;
