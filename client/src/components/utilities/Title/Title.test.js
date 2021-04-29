import React from 'react'
import { shallow } from 'enzyme'

import Title from './Title'

const props = {
    title: 'Test Title',
    subTitle: 'This is Sub Title',
}
const wrapped = shallow(<Title title={props.title} subTitle={props.subTitle} />)

describe('Title Component', () => {
    it('should render the Title Component correctly', () => {   
        expect(wrapped).toMatchSnapshot();
    });

    it('renders the Titles Label', () => { 
        expect(wrapped.find('h3').text()).toEqual(props.title);
        expect(wrapped).toMatchSnapshot();
    });

    it('renders the Titles Sub Label', () => { 
        expect(wrapped.find('h6').text()).toEqual(props.subTitle);
        expect(wrapped).toMatchSnapshot();
    });
});