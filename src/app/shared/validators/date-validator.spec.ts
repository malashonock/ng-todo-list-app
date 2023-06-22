import { AbstractControl, ValidatorFn } from '@angular/forms';
import { DateValidator } from './date-validator';

describe('DateValidator', () => {
  let today = new Date();
  let validator: ValidatorFn;

  describe('min() static method', () => {
    beforeEach(() => {
      validator = DateValidator.min(today);
    });

    it('given an undefined value, should return null', () => {
      const control = { value: undefined } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
    
    it('given a null value, should return null', () => {
      const control = { value: null } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
    
    it('given a non-date value, should throw an error', () => {
      const control = { value: 12345 } as AbstractControl;
      expect(() => validator(control)).toThrowError('Control should be of date type');
    });

    it('given a date earlier than minDate, should return an error object', () => {
      const earlierDate = new Date(Date.now() - 1_000_000);
      const control = { value: earlierDate } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toEqual({
        minDate: {
          actualDate: earlierDate,
          minDate: today,
        }
      });
    });

    it('given the same date as minDate, should return null', () => {
      const control = { value: today } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });

    it('given a date later than minDate, should return null', () => {
      const laterDate = new Date(Date.now() + 1_000_000);
      const control = { value: laterDate } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
  });

  describe('max() static method', () => {
    beforeEach(() => {
      validator = DateValidator.max(today);
    });

    it('given an undefined value, should return null', () => {
      const control = { value: undefined } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
    
    it('given a null value, should return null', () => {
      const control = { value: null } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
    
    it('given a non-date value, should throw an error', () => {
      const control = { value: '01 January 1970, 00:00:00' } as AbstractControl;
      expect(() => validator(control)).toThrowError('Control should be of date type');
    });

    it('given a date later than maxDate, should return an error object', () => {
      const laterDate = new Date(Date.now() + 1_000_000);
      const control = { value: laterDate } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toEqual({
        maxDate: {
          actualDate: laterDate,
          maxDate: today,
        }
      });
    });

    it('given the same date as maxDate, should return null', () => {
      const control = { value: today } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });

    it('given a date earlier than maxDate, should return null', () => {
      const earlierDate = new Date(Date.now() - 1_000_000);
      const control = { value: earlierDate } as AbstractControl;
      const validationResult = validator(control);
      expect(validationResult).toBeNull();
    });
  });
});
