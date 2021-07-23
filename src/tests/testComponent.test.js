// import {
//     test
// } from '@jest/globals';
import {
    expect
} from '@jest/globals';
import {
    mount
} from '@vue/test-utils';

import testComponent from './testComponent'

describe('TestComponent', () => {
    test("Test Content Component", () => {
        const wrapper = mount(testComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })
        expect(wrapper.text()).toEqual(
            'The message is: Hello from test!'
        )
    });

    test("Test Content Component", () => {
        const wrapper = mount(testComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })
        expect(wrapper.html()).toEqual(
            'The message is: Hello from test!'
        )
    });

    test("Test Content Contain", () => {
        const wrapper = mount(testComponent, {
            propsData: {
                message: 'Hello from test!'
            }
        })
        expect(wrapper.text()).toContain(
            'The message is: Hello from test!'
        )
    });
})