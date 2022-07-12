import React, { useContext } from 'react';

export const DarkModeContext = React.createContext<{
  isDarkMode?: boolean;
  toggle?: () => void;
}>({
  isDarkMode: undefined,
  toggle: undefined,
});

export const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};
