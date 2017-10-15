import { calculateVisibles } from './calculateVisibles';


describe('calculateVisibles', () => {

    it('detects from upper left corner', () => {
        const result = [[1, 1], [1, 0], [0, 1]];
        const columns = 2;
        const rows = 2;
        const currentX = 0;
        const currentY = 0;

        expect(calculateVisibles(currentX, currentY, columns, rows)).toEqual(result);
    });

    it('detects from upper right corner', () => {
        const result = [[0, 1], [0, 0], [1, 1]];
        const columns = 2;
        const rows = 2;
        const currentX = 1;
        const currentY = 0;

        expect(calculateVisibles(currentX, currentY, columns, rows)).toEqual(result);
    });

    it('detects from lower left corner', () => {
        const result = [[1, 0], [1, 1], [0, 0]];
        const columns = 2;
        const rows = 2;
        const currentX = 0;
        const currentY = 1;

        expect(calculateVisibles(currentX, currentY, columns, rows)).toEqual(result);
    });

    it('detects from lower right corner', () => {
        const result = [[0, 0], [0, 1], [1, 0]];
        const columns = 2;
        const rows = 2;
        const currentX = 1;
        const currentY = 1;

        expect(calculateVisibles(currentX, currentY, columns, rows)).toEqual(result);
    });

    it('detects from the middle', () => {
        const result = [[0, 0], [0, 2], [0, 1], [2, 0], [2, 2], [2, 1], [1, 0], [1, 2]];
        const columns = 3;
        const rows = 3;
        const currentX = 1;
        const currentY = 1;

        expect(calculateVisibles(currentX, currentY, columns, rows)).toEqual(result);
    });
});
