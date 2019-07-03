import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TestRenderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TodoItem from './TodoItem';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('it matches the snapshot', () => {
    const app = TestRenderer.create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });
  // it('has all cards returned', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find('div.card').length).toEqual(6);
  //   expect(wrapper.find('div.card-returned').length).toEqual(0);
  // });
  // it('has a returned card when clicked', () => {
  //   const wrapper = mount(<App />);
  //   const myFn = jest.fn();
  //   wrapper.instance().handleReturned = myFn;

  //   wrapper
  //     .find(Card)
  //     .at(0)
  //     .simulate('click');

  //   expect(myFn).toHaveBeenCalled();

  //   expect(
  //     wrapper
  //       .find(Card)
  //       .at(0)
  //       .props().isReturned
  //   ).toEqual(true);
  // });
});
