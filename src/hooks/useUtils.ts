import { useCallback, useEffect, useState } from 'react';
const useUtils = () => {
  const useClassName = useCallback((classNames: (string | undefined | boolean)[]) => {
    return classNames.filter(a => a).join(' ') || undefined;
  }, []);

  const useIsSsr = useCallback(() => {
    const [isSsr, setIsSsr] = useState(true);
    // useEffect never runs on the server.
    useEffect(() => {
      setIsSsr(false);
    }, []);
    return isSsr;
  }, []);

  return { useClassName, useIsSsr };
};
export default useUtils;
