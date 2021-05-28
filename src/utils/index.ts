import { JSON_ARRAY_MAX_LENGTH, NAME_MAX_LENGTH } from './constant'

export const checkJSONFormat = (json: string) => {
  try {
    const jsonToArray = JSON.parse(json)
    if (
      Array.isArray(jsonToArray) &&
      isLengthValid(jsonToArray) &&
      isNameValid(jsonToArray) &&
      isWeightValid(jsonToArray) &&
      isValueValid(jsonToArray)
    )
      return jsonToArray
  } catch (ex) {}
  return false
}

export const isLengthValid = (array: ITreeMapObj[]) => {
  return array.length <= JSON_ARRAY_MAX_LENGTH
}

export const isNameValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.name !== 'string' || val.name.length > NAME_MAX_LENGTH
  })
}

export const isWeightValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.weight !== 'number'
  })
}

export const isValueValid = (array: ITreeMapObj[]) => {
  return !array.some((val) => {
    return typeof val.value !== 'number'
  })
}

export const isNumber = (input: string) => {
  try {
    return (
      !Array.from(input).some((val) => {
        const num = parseInt(val, 10)
        return typeof num !== 'number' || isNaN(num)
      }) && parseInt(input, 10) > 0
    )
  } catch (ex) {
    return false
  }
}
