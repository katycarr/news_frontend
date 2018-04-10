
export const toggleCheck = (source, isChecked) => {
  let actionType = 'CHECK'
  if (isChecked) {
    actionType = 'UNCHECK'
  } 
  return {
    type: actionType,
    payload: source
  }
}
