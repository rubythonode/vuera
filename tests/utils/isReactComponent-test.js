import isReactComponent from '../../src/utils/isReactComponent'
import ReactComponent from '../fixtures/ReactComponent'
import ReactPureFunctionalComponent from '../fixtures/ReactPureFunctionalComponent'
import VueComponent from '../fixtures/VueComponent'
import VueRegisteredComponent from '../fixtures/VueRegisteredComponent'
import VueSingleFileComponent from '../fixtures/VueSingleFileComponent.vue'

describe('isReactComponent', () => {
  it('returns true for React components', () => {
    expect(isReactComponent(ReactComponent)).toBe(true)
    expect(isReactComponent(ReactPureFunctionalComponent)).toBe(true)
  })

  it('returns false for Vue components', () => {
    expect(isReactComponent(VueComponent)).toBe(false)
    expect(isReactComponent(VueRegisteredComponent)).toBe(false)
    expect(isReactComponent(VueSingleFileComponent)).toBe(false)
  })
})
