import React, { useState, useMemo, useEffect } from 'react';
import useUtils from './useUtils';

const SETTING_KEY = 'dev-hikun-blog';
type BlogSettings = { systemDarkMode?: boolean; manualDarkMode?: boolean };
const useBlogSettings = (): [typeof isDarkMode, typeof setDarkMode] => {
  const { useIsSsr } = useUtils();
  const isSsr = useIsSsr();
  const [settings, setSettings] = useState<BlogSettings>(() => {
    if (isSsr) {
      return {
        manualDarkMode: undefined,
        systemDarkMode: false,
      };
    }

    // 시스템 다크모드가 활성화 되어 있는지
    const { matches: systemDarkMode } = window.matchMedia('(prefers-color-scheme: dark)');
    // 로컬 스토리지에 저장된 값이 있다면 불러오고, 없다면 초기값을 설정
    const savedSettings = JSON.parse(window.localStorage.getItem(SETTING_KEY) || '{}') as BlogSettings;
    // 빈 객체면 manualDarkMode 초기화
    // 시스템 다크모드는 항상 최신으로 갱신
    if (typeof savedSettings.manualDarkMode !== 'boolean') {
      return {
        manualDarkMode: undefined,
        systemDarkMode,
      };
    }

    return {
      ...savedSettings,
      systemDarkMode,
    };
  });

  const isDarkMode = useMemo(() => {
    if (typeof settings.manualDarkMode === 'boolean') return settings.manualDarkMode;
    return settings.systemDarkMode;
  }, [settings]);

  const setDarkMode = (isDarkMode: boolean) => {
    const { systemDarkMode } = settings;
    setSettings({
      manualDarkMode: isDarkMode,
      systemDarkMode,
    });
    if (isSsr) return;
    window.localStorage.setItem(
      SETTING_KEY,
      JSON.stringify({
        manualDarkMode: isDarkMode,
        systemDarkMode,
      }),
    );
  };

  useEffect(() => {
    if (!document) return;
    const wrapper = document.querySelector('body');
    if (isDarkMode) wrapper?.setAttribute('data-theme', 'dark');
    else wrapper?.removeAttribute('data-theme');
  }, [isDarkMode]);

  return [isDarkMode, setDarkMode];
};

export const BlogSettingsContext = React.createContext<{
  isDarkMode?: boolean;
  setDarkMode?: (isDarkMode: boolean) => void;
}>({
  isDarkMode: undefined,
  setDarkMode: undefined,
});

export default useBlogSettings;
