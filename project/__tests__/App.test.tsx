/**
 * @format
 */
import { filterArray } from '../src/utils/HelperFunctions';
import 'react-native';
import React from 'react';
import App from '../App';


import { render, fireEvent } from '@testing-library/react-native';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Button } from 'react-native';

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



//Describing a test suite
describe('ButtonComponent', () => {
/*  in our case, let's say we have defined style for ButtonComponent, with padding==10, for component test, we test the style as well
*/ 
it('should render with text', async () => {
  const { getByText } = render(<Button
    title="Learn More"
   
  />);

});
 
  it('calls onPress when the button is pressed', () => {
    // Mocking onPress method so we can check if its called or not
    const onPressMock = jest.fn();
    // Rendering Button component using react-native-test-renderer.
    const { getByTestId } = render(<Button onPress={onPressMock} title="Click me" testID='button-1' />);
    // Grabbing our button component to perform actions on it.
    const button = getByTestId('button-1');
    /**
     * RNTL gives us API to fire events on node
     * Here we are firing on press event
     */
    fireEvent.press(button);
   // Asserting if given mock method is called or not.
   
    expect(onPressMock).toHaveBeenCalled();
  });

  

});

