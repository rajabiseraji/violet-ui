import React from 'react';
import Input from '../components/Input';
import renderer from 'react-test-renderer';

/*
** This one is to make sure it later renders match the snapshot
*/

it('renders correctly', () => {
  const tree = renderer.create(<Input />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly in different sizes', () => {
  const sizes = ['sm', 'lg', 'md'];
  const component = renderer.create(<Input size="lg" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  sizes.forEach(size => {
    tree.props.size = size;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('Changes border color when valid changes in any size', () => {
  const sizes = ['sm', 'lg', 'md'];
  const component = renderer.create(<Input />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  sizes.forEach(size => {
    tree.props.size = size;
    tree.props.valid = true;
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.valid = false;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
