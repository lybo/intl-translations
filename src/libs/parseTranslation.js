export const getVariables = text => {
  const variables = text.match(/\{([^}]+)\}/g)

  if (!variables) {
    return []
  }

  return variables.map(variable => {
    return variable.replace('{', '').replace('}', '')
  })
}

const placeholders = (text, data) => {
  return text.replace(/\{([^}]+)\}/g, match => {
    const key = match.replace('{', '').replace('}', '')
    return data[key] || match
  })
}

export default placeholders

// HOW TO USE IT
//
// const text = 'lala {text} in {lala} {}'
// const variables = getVariables(text)
// const data = (() => {
//   return variables.reduce((acc, key) => {
//     return {
//       ...acc,
//       [key]: `TEXT${key}TEXT`,
//     }
//   }, {})
// })()
// return {
//   variables,
//   parsed: placeholders(text, data),
// }
