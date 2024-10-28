import React from 'react';

export const useResize = (ref, options, mainSize) => {
  ref = ref || {};
  const { step = 1, axis = 'both' } = options || {};
  const [coords, setCoords] = React.useState({ x: Infinity, y: Infinity });
  const [dims, setDims] = React.useState({ width: Infinity, height: Infinity });
  const [size, setSize] = React.useState({ width: Infinity, height: Infinity });

  const initResize = (event) => {
    if (!ref.current) return;
    setCoords({ x: event.clientX, y: event.clientY });
    const { width, height } = window.getComputedStyle(ref.current);
    setDims({ width: parseInt(width, 10), height: parseInt(height, 10) });
  };

  React.useEffect(() => {
    // Round the size based to `props.step`.
    const getValue = (input) => Math.ceil(input / step) * step;

    const doDrag = (event) => {
      if (!ref.current) return;
      // Calculate the box size.
      const width = getValue(dims.width + event.clientX - coords.x);
      const height = getValue(dims.height + event.clientY - coords.y);

      // Set the box size.
      if (axis === 'both') {
        ref.current.style.width = width + 'px';
        ref.current.style.height = height + 'px';
      }
      if (
        axis === 'horizontal' &&
        width > mainSize * 0.3 &&
        width < mainSize * 0.7
      ) {
        setSize({ width, height });
      }
      if (
        axis === 'vertical' &&
        height > mainSize * 0.3 &&
        height < mainSize * 0.7
      ) {
        ref.current.style.height = height + 'px';
        setSize({ width, height });
      }
    };

    const stopDrag = () => {
      document.removeEventListener('mousemove', doDrag, false);
      document.removeEventListener('mouseup', stopDrag, false);
    };

    document.addEventListener('mousemove', doDrag, false);
    document.addEventListener('mouseup', stopDrag, false);
  }, [dims, coords, step, ref, axis, mainSize]);

  return { initResize, size };
};
