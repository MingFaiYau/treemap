import * as utils from '../index'

describe('Test Round Up Function', () => {
  let decimal = 2
  describe('decimal is 2', () => {
    beforeAll(() => {
      decimal = 2
    })
    it('PASS, value = 0.0111, expect 0.02', () => {
      expect(utils.roundUp(0.0111, decimal)).toEqual(0.02)
    })
    it('PASS, value = 0.01, expect 0.01', () => {
      expect(utils.roundUp(0.01, decimal)).toEqual(0.01)
    })
    it('PASS, value = 1, expect 1', () => {
      expect(utils.roundUp(1, decimal)).toEqual(1)
    })
  })

  describe('decimal is 1', () => {
    beforeAll(() => {
      decimal = 1
    })
    it('PASS, value = 0.0111, expect 0.1', () => {
      expect(utils.roundUp(0.0111, decimal)).toEqual(0.1)
    })
    it('PASS, value = 0.01, expect 0.1', () => {
      expect(utils.roundUp(0.01, decimal)).toEqual(0.1)
    })
    it('PASS, value = 1, expect 1', () => {
      expect(utils.roundUp(1, decimal)).toEqual(1)
    })
  })

  describe('decimal is -2', () => {
    beforeAll(() => {
      decimal = -2
    })
    it('PASS, value = 0.0111, expect 100', () => {
      expect(utils.roundUp(0.0111, decimal)).toEqual(100)
    })
    it('PASS, value = 0.01, expect 100', () => {
      expect(utils.roundUp(0.01, decimal)).toEqual(100)
    })
    it('PASS, value = 1, expect 100', () => {
      expect(utils.roundUp(1, decimal)).toEqual(100)
    })
  })
})
