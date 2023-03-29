export const addOrder = data => {
  return ({
    type: "ADD",
    payload: data
  })
}

export const delOrder = data => {
  return ({
    type: "DEL",
    palyload: data
  })
}