export const normalizeValue = (value) => {
  const output = value.replace(/_/g, ' ').toLocaleLowerCase()
  return output.charAt(0).toLocaleUpperCase() + output.slice(1)
}

export const localizeTimeStamp = (timestamp) =>
  new Date(timestamp).toLocaleString()
