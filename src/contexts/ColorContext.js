import { setCookie } from 'nookies';
import React from 'react';

export const ColorModeContext = React.createContext({
  theme: '',
  themeToggler: () => {},
});

export const ColorModeStorageProvider = (props) => {
  // const [theme, setTheme] = React.useState(props.initialMode);

  const [theme, setTheme] = React.useState(props.children.props.pageProps.user_theme);

  // console.log('tema ficou com: ', theme);

  const themeToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
      setCookie(null, 'user_theme', 'dark', {
        maxAge: 86400 * 7,
        path: '/',
      });
    } else {
      setTheme('light');
      setCookie(null, 'user_theme', 'light', {
        maxAge: 86400 * 7,
        path: '/',
      });
    }
  };

  return (
    // o valor de theme por exemplo vai passar de vazio (ali em cima no contexto) pro estado que estamos configurando com o useState
    <ColorModeContext.Provider value={{ theme, themeToggler }}>{props.children}</ColorModeContext.Provider>
  );
};
