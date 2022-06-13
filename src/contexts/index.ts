import { BlogSettingsContext } from 'hooks/useBlogSettings';
import { useContext } from 'react';

export const useBlogSettingsContext = () => {
  return useContext(BlogSettingsContext);
};
