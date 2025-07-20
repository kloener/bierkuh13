import { Injectable, inject } from '@angular/core';
import { CrownCaps } from '../domain/crown-caps';

export interface ISearchStrategy {
  matches(searchTerm: string, item: CrownCaps): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FuzzySearchStrategy implements ISearchStrategy {
  matches(searchTerm: string, item: CrownCaps): boolean {
    return this.fuzzyIncludes(searchTerm, item.name);
  }

  private createMatcherFor(search: string): RegExp | undefined {
    const cleanSearchTerm = search.match(/([a-z0-9]+)/ig)?.join('(.+)');
    return cleanSearchTerm ? new RegExp(`${cleanSearchTerm}`, 'i') : undefined;
  }

  private fuzzyIncludes(search: string, phrase: string): boolean {
    return this.createMatcherFor(search)?.test(phrase) ?? false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CrownCapsSearchService {
  private readonly searchStrategy = inject(FuzzySearchStrategy);


  filterItems(items: CrownCaps[], searchTerm?: string): CrownCaps[] {
    if (!searchTerm) {
      return items;
    }

    return items.filter(item => this.searchStrategy.matches(searchTerm, item));
  }
}