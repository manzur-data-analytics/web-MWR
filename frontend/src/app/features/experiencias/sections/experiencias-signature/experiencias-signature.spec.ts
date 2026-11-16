import { ExperienciasSignature } from './experiencias-signature';

describe('ExperienciasSignature gallery navigation', () => {
  for (const count of [4, 5]) {
    for (const direction of [1, -1] as const) {
      it(`continues for three loops with ${count} photos in direction ${direction} without scrollend`, () => {
        const component = new ExperienciasSignature();
        const destinations: number[] = [];
        const carousel = {
          clientWidth: 400,
          children: Array(count + 2),
          scrollLeft: 400,
          scrollTo(options: ScrollToOptions) {
            this.scrollLeft = options.left!;
            if (options.behavior === 'smooth') destinations.push(this.scrollLeft / 400);
          },
        };

        for (let step = 1; step <= count * 3; step++) {
          component.moveGallery(carousel as unknown as HTMLElement, direction);
          const expectedPhoto = ((step * direction) % count + count) % count;
          const actualPhoto = (destinations[step - 1] - 1 + count) % count;
          expect(actualPhoto).toBe(expectedPhoto);
          expect(carousel.scrollLeft).toBeGreaterThanOrEqual(0);
          expect(carousel.scrollLeft).toBeLessThanOrEqual((count + 1) * 400);
        }
        expect(destinations.length).toBe(count * 3);
      });
    }
  }
});
