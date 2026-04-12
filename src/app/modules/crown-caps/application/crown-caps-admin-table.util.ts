import { CrownCaps } from '../domain/crown-caps';

/** Assignee letters from Firebase (H = Heini, K = Keks). */
export type AssigneeFilter = 'any' | 'heini' | 'keks' | 'both';

export type CrownCapsSortField = 'name' | 'count';

export type SortDirection = 'asc' | 'desc';

export function filterCapsByAssignee(caps: CrownCaps[], filter: AssigneeFilter): CrownCaps[] {
  if (filter === 'any') {
    return caps;
  }
  return caps.filter((c) => {
    const a = c.assignees ?? [];
    const hasH = a.includes('H');
    const hasK = a.includes('K');
    switch (filter) {
      case 'heini':
        return hasH;
      case 'keks':
        return hasK;
      case 'both':
        return hasH && hasK;
      default:
        return true;
    }
  });
}

export function sortCapsList(
  caps: CrownCaps[],
  field: CrownCapsSortField,
  dir: SortDirection
): CrownCaps[] {
  const mul = dir === 'asc' ? 1 : -1;
  return [...caps].sort((a, b) => {
    if (field === 'name') {
      const cmp = a.name.localeCompare(b.name, 'de', { sensitivity: 'base' });
      return mul * (cmp !== 0 ? cmp : a.identifier.localeCompare(b.identifier));
    }
    const ac = a.count ?? 0;
    const bc = b.count ?? 0;
    if (ac !== bc) {
      return mul * (ac - bc);
    }
    return a.name.localeCompare(b.name, 'de', { sensitivity: 'base' });
  });
}
