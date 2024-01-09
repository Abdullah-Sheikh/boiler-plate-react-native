/**
 * @format
 */
import { filterArray } from '../src/utils/HelperFunctions';
import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});





describe('filterArray function', () => {
// Mocked data example
  const mockArray = [
    { id: 1, name: 'Appartment' },
    { id: 2, name: 'Building' },
    { id: 3, name: 'Office' },
  ];


  it('should filter the array based on the provided value (case-insensitive)', () => {
    const result = filterArray(mockArray, 'Ap');
    expect(result).toEqual([{ id: 1, name: 'Appartment' }]);
  });
  it('should handle an empty filter value and return the original array', () => {
    const result = filterArray(mockArray, '');
    expect(result).toEqual(mockArray);
  });
  it('should handle a filter value that does not match any items and return an empty array', () => {
    const result = filterArray(mockArray, 'Home Office');
    expect(result).toEqual([]);
  });
  it('should handle a filter value with different letter casing', () => {
    const result = filterArray(mockArray, 'oFfi');
    expect(result).toEqual([{ id: 3, name: 'Office' }]);
  });
  it('should handle an empty array and return an empty array', () => {
    const result = filterArray([], 'Office');
    expect(result).toEqual([]);
  });
});
