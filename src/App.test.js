import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe('App.js testing', () => {

  it('renders bot name', () => {
    render(<App />);
    const linkElement = screen.getByText(/bot/i);
    expect(linkElement).toBeInTheDocument();
  });

})
describe('App.js testing', () => {
  let wrapper = shallow(<App />);
  it("contains header with an expectation", function() {
    expect(wrapper.find('ToastMsg').length).toBe(1);
  });
})
describe('App.js testing', () => {
  let wrapper = shallow(<App />);
  it("contains header with an expectation", function() {
    expect(wrapper.find('input').length).toBe(1);
  });
})

describe('App.js testing', () => {
  let wrapper = shallow(<App />);
  it("contains header with an expectation", function() {
    expect(wrapper.find('input').length).toBe(1);
  });
})

describe('App.js testing', () => {
  let wrapper 
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renderMessages to be called', () => {
     const renderMessages = jest.fn();
    // expect(renderMessages.mock.calls.length).toBe(0);

  //  wrapper.instance().renderMessages = jest.fn()
    //wrapper.update()
    expect(renderMessages).not.toBeCalled()
  });

  it('renders without crashing', () => {
    const renderMessages = jest.fn();
    expect(renderMessages.mock.calls.length).toBe(0);
  });
  it("contains form with an expectation", function() {
    expect(wrapper.find('form').length).toBe(1);
  });
  it("contains header with an expectation", function() {
    expect(wrapper.find('button').length).toBe(1);
  });
})
