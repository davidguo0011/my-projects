import React from 'react';
import useResizeObserver from '@react-hook/resize-observer';
export function useListenResize(target) {
  const [size, setSize] = React.useState();

  React.useLayoutEffect(() => {
    target && setSize(target.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
}
