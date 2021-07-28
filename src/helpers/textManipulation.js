export const normalizeValue = (value) => {
  const output = value.replace(/_/g, ' ').toLocaleLowerCase()
  return output.charAt(0).toLocaleUpperCase() + output.slice(1)
}

export const localizeTimeStamp = (timestamp) =>
  new Date(timestamp).toLocaleString()

export const findValueWithMeasureUnit = (str) => {
  const res = str.match(/^(-?[\d.]+)([a-z%]*)$/i)
  return {
    val: parseFloat(res[1]),
    unit: res[2]
  }
}

export const getMonthFromDate = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleString('en-EN', { month: 'long' })
}
