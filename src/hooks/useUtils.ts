import { useCallback, useState } from 'react';

const useThrottle = () => {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttle = useCallback(
    (f: () => void, ms = 300) => {
      if (isThrottled) return;
      setIsThrottled(true);
      setTimeout(() => {
        f();
        setIsThrottled(false);
      }, ms);
    },
    [isThrottled],
  );

  return throttle;
};

const utils = () => {
  const useClassName = useCallback((classNames: string[]) => {
    return classNames.filter(a => a).join(' ') || undefined;
  }, []);

  return { useClassName, useThrottle };
};
export default utils;
