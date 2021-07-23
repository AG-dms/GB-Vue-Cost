import {
    mount
} from '@vue/test-utils'


import calc from '../components/calc.vue'

describe('Calculator input test', () => {
    it("test operand inpunt value", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        expect(wrapper.vm.operand1).toBe(1)
    })


    it("test operand2 inpunt value", () => {
        const wrapper = mount(calc)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        expect(wrapper.vm.operand2).toBe(1)
    })

    it("test sum", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const sum = wrapper.find('button[name="+"]');

        sum.trigger('click')

        expect(wrapper.vm.result).toBe(2)
    })

    it("test substract", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('1')

        const substract = wrapper.find('button[name="-"]');

        substract.trigger('click')

        expect(wrapper.vm.result).toBe(0)
    })

    it("test multiply", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')

        const multiply = wrapper.find('button[name="*"]');

        multiply.trigger('click')

        expect(wrapper.vm.result).toBe(4)
    })

    it("test devide", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('15')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')

        const devide = wrapper.find('button[name="/"]');

        devide.trigger('click')
        expect(wrapper.vm.result).toBe(5)
    })
    it("test degree", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('2')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('3')

        const degree = wrapper.find('button[name="degree"]');

        degree.trigger('click')
        expect(wrapper.vm.result).toBe(8)
    })

    it("test Zero devide", () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('30')

        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('8')

        const zero = wrapper.find('button[name="zero%"]');

        zero.trigger('click')
        expect(wrapper.vm.result).toBe(3)
    })

    it("test delete button", async () => {
        const wrapper = mount(calc)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('123')

        // const openKey = wrapper.find('input[name="keyboard"]')
        // openKey.trigger('click')
        // openKey.setChecked()
        const radioInput = wrapper.find('input[type="radio"]')
        await radioInput.setChecked()

        const deleteBtn = wrapper.find('button[name="delete"]')
        await deleteBtn.trigger('click')


        expect(wrapper.vm.operand1).toBe('12')
    })


})

// describe("Calculator keyboard test", () => {

// })