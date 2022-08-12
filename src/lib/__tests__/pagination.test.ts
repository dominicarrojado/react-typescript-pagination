import { getPaginationItems } from '../pagination';

describe('pagination utilities', () => {
  describe('getPaginationItems()', () => {
    it('should handle lastPage less than or equal to maxLength', () => {
      expect(getPaginationItems(1, 5, 7)).toEqual([1, 2, 3, 4, 5]);
      expect(getPaginationItems(5, 7, 7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('should handle ellipsis in the middle', () => {
      expect(getPaginationItems(1, 10, 7)).toEqual([1, 2, 3, NaN, 8, 9, 10]);
      expect(getPaginationItems(9, 10, 7)).toEqual([1, 2, 3, NaN, 8, 9, 10]);
    });

    it('should handle two ellipsis', () => {
      expect(getPaginationItems(5, 10, 7)).toEqual([1, NaN, 4, 5, 6, NaN, 10]);
      expect(getPaginationItems(6, 10, 7)).toEqual([1, NaN, 5, 6, 7, NaN, 10]);
    });

    it('handle ellipsis not in the middle', () => {
      expect(getPaginationItems(3, 10, 7)).toEqual([1, 2, 3, 4, NaN, 9, 10]);
      expect(getPaginationItems(4, 10, 7)).toEqual([1, 2, 3, 4, 5, NaN, 10]);
      expect(getPaginationItems(7, 10, 7)).toEqual([1, NaN, 6, 7, 8, 9, 10]);
      expect(getPaginationItems(8, 10, 7)).toEqual([1, 2, NaN, 7, 8, 9, 10]);
    });
  });
});
