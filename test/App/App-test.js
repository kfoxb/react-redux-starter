import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/app';


describe('<App />', function() {

  it('should render', function() {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(
      <h1> react redux starter </h1>
    )).to.equal(true);
  });

});