import * as utils from '../index'

describe('Test isNameValid Function', () => {
  it(`PASS, name length is 50, expect true`, () => {
    let name = '12345678901234567890123456789012345678901234567890'
    expect(utils.isNameValid(name)).toBeTruthy()
  })

  it(`PASS, name length is 51, expect false`, () => {
    let name = '123456789012345678901234567890123456789012345678901'
    expect(utils.isNameValid(name)).toBeFalsy()
  })
})

describe('Test isPositiveInteger Function', () => {
  it(`PASS, input is 10, expect true`, () => {
    expect(utils.isPositiveInteger('10')).toBeTruthy()
  })

  it(`PASS, input is 0, expect false`, () => {
    expect(utils.isPositiveInteger('0')).toBeFalsy()
  })
  it(`PASS, input is 0 and allow zero, expect true`, () => {
    expect(utils.isPositiveInteger('0', true)).toBeTruthy()
  })

  it(`PASS, input is 10, expect false`, () => {
    expect(utils.isPositiveInteger('-10')).toBeFalsy()
  })
})

describe('Test getNumberDetail Function', () => {
  it(`PASS, input is 11.11, expect ['11','11']`, () => {
    expect(utils.getNumberDetail(11.11)[0]).toBe('11')
    expect(utils.getNumberDetail(11.11)[1]).toBe('11')
  })

  it(`PASS, input is 11, expect ['11',undefined]`, () => {
    expect(utils.getNumberDetail(11)[0]).toBe('11')
    expect(utils.getNumberDetail(11)[1]).toBe(undefined)
  })

  it(`PASS, input is -0.1234, expect ['-0','1234']`, () => {
    expect(utils.getNumberDetail(-0.1234)[0]).toBe('-0')
    expect(utils.getNumberDetail(-0.1234)[1]).toBe('1234')
  })
})

describe('Test roundUp Function', () => {
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
    it('PASS, value = -0.0111, expect -0.02', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-0.02)
    })
    it('PASS, value = -0.0121, expect -0.02', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-0.02)
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
    it('PASS, value = -0.0111, expect -0.1', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-0.1)
    })
    it('PASS, value = -0.0121, expect -0.1', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-0.1)
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
    it('PASS, value = -0.0111, expect -100', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-100)
    })
    it('PASS, value = -0.0121, expect -100', () => {
      expect(utils.roundUp(-0.0111, decimal)).toEqual(-100)
    })
  })
})
