import React from 'react'
import { mount, ReactWrapper} from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App component rendering testing', () => {
    let container: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => (container = mount(<App/>)))

    it('should render a <div/>', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })

    it('should render the Timer Component', () => {
        expect(container.containsMatchingElement(<Timer time={container.props().time}/>)).toEqual(true)
    })

    it("should render the text 'start'", () => {
        expect(container.find("button").text()).toContain("Start")
    })
})