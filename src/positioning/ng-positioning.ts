/**
 * @copyright Valor Software
 * @copyright popper.js team
 */

import {
  computeAutoPlacement,
  getOffsetParent,
  getPopperOffsets,
  getBoundingClientRect,
  getReferenceOffsets
} from 'ngx-bootstrap/popper';

// previous version:`
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
export class Positioning {
  public position(element: HTMLElement, round = true): ClientRect {
    let elPosition: ClientRect;
    // let parentOffset: ClientRect = {
    //   width: 0,
    //   height: 0,
    //   top: 0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0
    // };
    //
    // if (this.getStyle(element, 'position') === 'fixed') {
    //
    //   const bcRect = element.getBoundingClientRect();
    //   elPosition = {
    //     width: bcRect.width,
    //     height: bcRect.height,
    //     top: bcRect.top,
    //     bottom: bcRect.bottom,
    //     left: bcRect.left,
    //     right: bcRect.right
    //   };
    // } else {
    //   const offsetParentEl = this.offsetParent(element);
    //
    //   elPosition = this.offset(element, false);
    //
    //   if (offsetParentEl !== document.documentElement) {
    //     parentOffset = this.offset(offsetParentEl, false);
    //   }
    //
    //   parentOffset.top += offsetParentEl.clientTop;
    //   parentOffset.left += offsetParentEl.clientLeft;
    // }
    //
    // elPosition.top -= parentOffset.top;
    // elPosition.bottom -= parentOffset.top;
    // elPosition.left -= parentOffset.left;
    // elPosition.right -= parentOffset.left;
    //
    // if (round) {
    //   elPosition.top = Math.round(elPosition.top);
    //   elPosition.bottom = Math.round(elPosition.bottom);
    //   elPosition.left = Math.round(elPosition.left);
    //   elPosition.right = Math.round(elPosition.right);
    // }
    //
    return elPosition;
  }

  // public offset(element: HTMLElement, round = true): ClientRect {
  //   const elBcr = element.getBoundingClientRect();
  //   const viewportOffset = {
  //     top: window.pageYOffset - document.documentElement.clientTop,
  //     left: window.pageXOffset - document.documentElement.clientLeft
  //   };
  //
  //   let elOffset = {
  //     height: elBcr.height || element.offsetHeight,
  //     width: elBcr.width || element.offsetWidth,
  //     top: elBcr.top + viewportOffset.top,
  //     bottom: elBcr.bottom + viewportOffset.top,
  //     left: elBcr.left + viewportOffset.left,
  //     right: elBcr.right + viewportOffset.left
  //   };
  //
  //   if (round) {
  //     elOffset.height = Math.round(elOffset.height);
  //     elOffset.width = Math.round(elOffset.width);
  //     elOffset.top = Math.round(elOffset.top);
  //     elOffset.bottom = Math.round(elOffset.bottom);
  //     elOffset.left = Math.round(elOffset.left);
  //     elOffset.right = Math.round(elOffset.right);
  //   }
  //
  //   return elOffset;
  // }

  public positionElements(
    hostElement: HTMLElement,   // button
    targetElement: HTMLElement, // tooltip or popper
    placement: string,
    appendToBody?: boolean
  ): ClientRect {

    console.dir(hostElement);
    console.dir(targetElement);

    const referenceOffsets = getReferenceOffsets({}, targetElement, hostElement);

    const boundariesElement = getOffsetParent(targetElement);

    const autoPlacement = computeAutoPlacement(
      placement,
      referenceOffsets,
      hostElement,
      targetElement,
      boundariesElement,
      null // this.options.modifiers.flip.padding
    );

    const popperOffsets: any = getPopperOffsets(targetElement, referenceOffsets, autoPlacement);

    // const hostElPosition = appendToBody
    //   ? this.offset(hostElement, false)
    //   : this.position(hostElement, false);
    // const targetElStyles = this.getAllStyles(targetElement);
    // const targetElBCR = targetElement.getBoundingClientRect();
    // let placementPrimary = placement.split(' ')[0] || 'top';
    // const placementSecondary = placement.split(' ')[1] || 'center';

    let targetElPosition: any = {
      height: 0,
      width: 0,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    // const shiftHeight: any = {
    //   top: hostElPosition.top,
    //   center:
    //     hostElPosition.top +
    //     hostElPosition.height / 2 -
    //     targetElPosition.height / 2,
    //   bottom: hostElPosition.top + hostElPosition.height
    // };
    // const shiftWidth: any = {
    //   left: hostElPosition.left,
    //   center:
    //     hostElPosition.left +
    //     hostElPosition.width / 2 -
    //     targetElPosition.width / 2,
    //   right: hostElPosition.left + hostElPosition.width
    // };

    // if (placementPrimary === 'auto33333') {
    //   let newPlacementPrimary = this.autoPosition(
    //     targetElPosition,
    //     hostElPosition,
    //     targetElement,
    //     placementSecondary
    //   );
    //   if (!newPlacementPrimary)
    //     newPlacementPrimary = this.autoPosition(
    //       targetElPosition,
    //       hostElPosition,
    //       targetElement
    //     );
    //   if (newPlacementPrimary) placementPrimary = newPlacementPrimary;
    //   targetElement.classList.add(placementPrimary);
    // }

    // switch (placementPrimary) {
    //   case 'top':
    //     targetElPosition.top =
    //       hostElPosition.top -
    //       (targetElPosition.height +
    //         parseFloat(targetElStyles.marginBottom));
    //     targetElPosition.bottom +=
    //       hostElPosition.top - targetElPosition.height;
    //     targetElPosition.left = shiftWidth[placementSecondary];
    //     targetElPosition.right += shiftWidth[placementSecondary];
    //     break;
    //   case 'bottom':
    //     targetElPosition.top = shiftHeight[placementPrimary];
    //     targetElPosition.bottom += shiftHeight[placementPrimary];
    //     targetElPosition.left = shiftWidth[placementSecondary];
    //     targetElPosition.right += shiftWidth[placementSecondary];
    //     break;
    //   case 'left':
    //     targetElPosition.top = shiftHeight[placementSecondary];
    //     targetElPosition.bottom += shiftHeight[placementSecondary];
    //     targetElPosition.left =
    //       hostElPosition.left -
    //       (targetElPosition.width + parseFloat(targetElStyles.marginRight));
    //     targetElPosition.right +=
    //       hostElPosition.left - targetElPosition.width;
    //     break;
    //   case 'right':
    //     targetElPosition.top = shiftHeight[placementSecondary];
    //     targetElPosition.bottom += shiftHeight[placementSecondary];
    //     targetElPosition.left = shiftWidth[placementPrimary];
    //     targetElPosition.right += shiftWidth[placementPrimary];
    //     break;
    // }

    // let targetElPosition: any;

    // targetElPosition.width = popperOffsets.width;
    // targetElPosition.height = popperOffsets.height;

    targetElPosition.top = popperOffsets.top; // Math.round(targetElPosition.top);
    // targetElPosition.bottom = Math.round(targetElPosition.bottom);
    targetElPosition.left = popperOffsets.left; // Math.round(targetElPosition.left);
    // targetElPosition.right = Math.round(targetElPosition.right);

    const offsetParent = getOffsetParent(hostElement);
    const offsetParentRect = getBoundingClientRect(offsetParent);

    const offsets: any = {
      width: popperOffsets.width,
      height: popperOffsets.height,
      left: Math.floor(popperOffsets.left),
      top: Math.round(popperOffsets.top),
      bottom: Math.round(popperOffsets.bottom),
      right: Math.floor(popperOffsets.right)
    };

    // const sideA = x === 'bottom' ? 'top' : 'bottom';
    // const sideB = y === 'right' ? 'left' : 'right';
    //
    // let left, top;
    // if (sideA === 'bottom') {
    //   // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    //   // and not the bottom of the html element
    //   if (offsetParent.nodeName === 'HTML') {
    //     top = -offsetParent.clientHeight + offsets.bottom;
    //   } else {
    //     top = -offsetParentRect.height + offsets.bottom;
    //   }
    // } else {
    //   top = offsets.top;
    // }
    // if (sideB === 'right') {
    //   if (offsetParent.nodeName === 'HTML') {
    //     left = -offsetParent.clientWidth + offsets.right;
    //   } else {
    //     left = -offsetParentRect.width + offsets.right;
    //   }
    // } else {
    //   left = offsets.left;
    // }

    return offsets;
  }

  // private autoPosition(
  //   targetElPosition: ClientRect,
  //   hostElPosition: ClientRect,
  //   targetElement: HTMLElement,
  //   preferredPosition?: string
  // ) {
  //   if (
  //     (!preferredPosition || preferredPosition === 'right') &&
  //     targetElPosition.left + hostElPosition.left - targetElPosition.width <
  //       0
  //   ) {
  //     return 'right';
  //   } else if (
  //     (!preferredPosition || preferredPosition === 'top') &&
  //     targetElPosition.bottom +
  //       hostElPosition.bottom +
  //       targetElPosition.height >
  //       window.innerHeight
  //   ) {
  //     return 'top';
  //   } else if (
  //     (!preferredPosition || preferredPosition === 'bottom') &&
  //     targetElPosition.top + hostElPosition.top - targetElPosition.height < 0
  //   ) {
  //     return 'bottom';
  //   } else if (
  //     (!preferredPosition || preferredPosition === 'left') &&
  //     targetElPosition.right +
  //       hostElPosition.right +
  //       targetElPosition.width >
  //       window.innerWidth
  //   ) {
  //     return 'left';
  //   }
  //   return null;
  // }

  // private getAllStyles(element: HTMLElement) {
  //   return window.getComputedStyle(element);
  // }

  // private getStyle(element: HTMLElement, prop: string): string {
  //   return (this.getAllStyles(element) as any)[prop];
  // }

  // private isStaticPositioned(element: HTMLElement): boolean {
  //   return (this.getStyle(element, 'position') || 'static') === 'static';
  // }

  // private offsetParent(element: HTMLElement): HTMLElement {
  //   let offsetParentEl =
  //     <HTMLElement>element.offsetParent || document.documentElement;
  //
  //   while (
  //     offsetParentEl &&
  //     offsetParentEl !== document.documentElement &&
  //     this.isStaticPositioned(offsetParentEl)
  //   ) {
  //     offsetParentEl = <HTMLElement>offsetParentEl.offsetParent;
  //   }
  //
  //   return offsetParentEl || document.documentElement;
  // }
}

const positionService = new Positioning();

export function positionElements(
  hostElement: HTMLElement,
  targetElement: HTMLElement,
  placement: string,
  appendToBody?: boolean
): void {
  const pos = positionService.positionElements(
    hostElement,
    targetElement,
    placement,
    appendToBody
  );

  targetElement.style.top = `${pos.top}px`;
  targetElement.style.left = `${pos.left}px`;
}
