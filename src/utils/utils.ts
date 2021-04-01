export const validateForAmountCharacteres = (
  str: string,
  endPosition: number
) => {
  if (str !== undefined && str !== null) {
    if (str.length > endPosition) {
      return str.slice(0, endPosition) + '...'
    } else {
      return str
    }
  }
}
