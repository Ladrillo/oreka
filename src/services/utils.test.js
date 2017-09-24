import { calculateVisible } from './utils';

describe('calculateVisible', () => {

    it('detects from upper left corner', () => {
        const result = [[1, 0], [0, 1]];
        const width = 2;
        const height = 2;
        const currentX = 0;
        const currentY = 0;

        expect(calculateVisible(currentX, currentY, width, height)).toEqual(result);
    });

    it('detects from upper right corner', () => {
        const result = [[0, 0], [1, 1]];
        const width = 2;
        const height = 2;
        const currentX = 1;
        const currentY = 0;

        expect(calculateVisible(currentX, currentY, width, height)).toEqual(result);
    });

    it('detects from lower left corner', () => {
        const result = [[1, 1], [0, 0]];
        const width = 2;
        const height = 2;
        const currentX = 0;
        const currentY = 1;

        expect(calculateVisible(currentX, currentY, width, height)).toEqual(result);
    });

    it('detects from lower right corner', () => {
        const result = [[0, 1], [1, 0]];
        const width = 2;
        const height = 2;
        const currentX = 1;
        const currentY = 1;

        expect(calculateVisible(currentX, currentY, width, height)).toEqual(result);
    });

    it('detects from the middle', () => {
        const result = [[0, 1], [2, 1], [1, 0], [1, 2]];
        const width = 3;
        const height = 3;
        const currentX = 1;
        const currentY = 1;

        expect(calculateVisible(currentX, currentY, width, height)).toEqual(result);
    });
});