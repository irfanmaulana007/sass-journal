import React from 'react'
import { shallow } from 'enzyme'

import FormGroup from './FormGroup'

const props = {
    label: 'Input Email',
    name: 'email'
}
const wrapped = shallow(<FormGroup label={props.label} name={props.name} />)

describe('FormGroup', () => {
    it('should render the FormGroup Component correctly', () => {
        expect(wrapped).toMatchSnapshot();
    });
    it('renders the FormGroup Label', () => { 
        expect(wrapped.find('label').text()).toEqual(props.label);
    });
})