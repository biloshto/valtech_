export const trackBy =
  <T>(trackByProp: keyof T) =>
  (_: number, item: T) =>
    item[trackByProp];

export const trackByIdx = (index: number) => index;

export const onLargeDevice = () =>
  Boolean(window?.innerWidth && window.innerWidth > 992); // Taken from our '@l-devices' variable (that's the breakpoint when we switch from displaying the menu in one row, visible at all times, to displaying it vertically upon clicking on the hamburger icon).

export const smoothScrollToElement = (elementId: string) => {
  const elementToScrollTo: HTMLElement | null =
    document.getElementById(elementId);

  if (!elementToScrollTo) {
    console.error(
      `Element with ID ${elementId} we want to scroll to  was not found in the DOM.`
    );
    return;
  }

  elementToScrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};
