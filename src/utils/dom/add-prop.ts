import { uniGetTargetElements } from './get-target-elements';

export function uniAddProp(el: HTMLElement, prop: string, value: any, all?: boolean, selector?: string): void {
  Array.from(uniGetTargetElements(el, all, selector))
    .forEach((element: HTMLElement): void => {
      if (element) {
        element[prop] = value;
      }
    });
}
