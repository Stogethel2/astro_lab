import _ from 'lodash';

export interface ItemFilter {
  filter(items: string[], input: string): string[];
}

export class LodashFilter implements ItemFilter {
  private normalize(input: string): string[] {
    return _(input.split(/\s+/))
      .map(s => s.trim())
      .filter(Boolean)
      .value();
  }

  filter(originalList: string[], input: string): string[] {
    const inputs = this.normalize(input);
    if (inputs.length === 0) return [];

    const matchList = new Set<string>();
    const partList = new Set<string>();

    for (const input of inputs) {
      _(originalList).forEach(originalItem => {
        if (originalItem === input) matchList.add(originalItem);
        else if (originalItem.includes(input)) partList.add(originalItem);
      });
    }

    if (matchList.size > 0) {
      return _(originalList).filter(id => matchList.has(id)).value();
    }

    return _(originalList).filter(id => partList.has(id)).value();
  }
}
