import { useLayoutEffect } from 'react';

// shrink the title until it (plus the rest of the hero) fits on one screen,
// so long titles don't overflow past the hero box / overlay
function fitTitle(container, title) {
  title.style.fontSize = '';
  let size = parseFloat(getComputedStyle(title).fontSize);
  const minSize = 28; // px floor
  while (container.scrollHeight > container.clientHeight && size > minSize) {
    size -= 2;
    title.style.fontSize = size + 'px';
  }
}

export default function useFitTitle(containerRef, titleRef) {
  useLayoutEffect(() => {
    const fit = () => fitTitle(containerRef.current, titleRef.current);
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [containerRef, titleRef]);
}
