import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

const props = {
    label: 'Submit'
}
const wrapped = shallow(<Button label={props.label} debug />)

describe('Button', () => {
    it('should render the Button Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
    it('renders the Button Label', () => { 
        expect(wrapped.text()).toEqual(props.label);
    });
});