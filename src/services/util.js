
export function isBrowser () {
  try {
    return Boolean(window)
  } catch (error) {
    return false
  }
}
  