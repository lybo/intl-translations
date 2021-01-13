import parser from 'fast-xml-parser'

export default function validate(text) {
  const res = parser.validate(`<intl-validation>${text}</intl-validation>`)
  if (res.err) {
    return {
      result: false,
      message: res.msg,
    }
  }
  return {
    result: true,
  }
}
