/** Count how many consecutive items share the first row’s top (flex/grid row wrap). */
export function estimateItemsPerRow(elements: HTMLElement[]): number {
  if (elements.length === 0) {
    return 1;
  }
  const firstTop = elements[0].getBoundingClientRect().top;
  const tolerance = 8;
  let count = 0;
  for (const el of elements) {
    if (Math.abs(el.getBoundingClientRect().top - firstTop) <= tolerance) {
      count++;
    } else {
      break;
    }
  }
  return Math.max(1, count);
}

/** Next index after arrow / Home / End, or null if unchanged or unknown key. */
export function nextCapNavIndex(
  current: number,
  length: number,
  key: string,
  itemsPerRow: number
): number | null {
  if (length === 0 || current < 0 || current >= length) {
    return null;
  }

  const row = Math.max(1, itemsPerRow);
  let next = current;

  switch (key) {
    case 'ArrowRight':
      next = Math.min(length - 1, current + 1);
      break;
    case 'ArrowLeft':
      next = Math.max(0, current - 1);
      break;
    case 'ArrowDown':
      next = Math.min(length - 1, current + row);
      break;
    case 'ArrowUp':
      next = Math.max(0, current - row);
      break;
    case 'Home':
      next = 0;
      break;
    case 'End':
      next = length - 1;
      break;
    default:
      return null;
  }

  return next === current ? null : next;
}

export function isCapNavKey(key: string): boolean {
  return (
    key === 'ArrowLeft' ||
    key === 'ArrowRight' ||
    key === 'ArrowUp' ||
    key === 'ArrowDown' ||
    key === 'Home' ||
    key === 'End'
  );
}
