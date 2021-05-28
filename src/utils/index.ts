import { JSON_ARRAY_MAX_LENGTH, NAME_MAX_LENGTH } from './constant'

export const checkJSONFormat = (json: string) => {
  try {
    const jsonToArray = JSON.parse(json)
    if (
      Array.isArray(jsonToArray) &&
      isLengthValid(jsonToArray) &&
      isNameValid(jsonToArray) &&
      isWeightValid(jsonToArray)
    )
      return true
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
    return typeof val.value !== 'number'
  })
}
