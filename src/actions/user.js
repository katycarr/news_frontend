export const createUser = ({username, password, password_confirmation}) => {

  return (dispatch) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({user: {username, password, password_confirmation}})
    }
    fetch('http://localhost:3000/users', options)
      .then(res => res.json())
      .then(json => {
        if(json.id) {
          dispatch({
            type: 'CREATE_USER',
            payload: json
          })
        }
      })
  }
}

export const loginUser = ({username, password}) => {
  return (dispatch) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({username, password})
    }
    fetch('http://localhost:3000/login', options)
      .then(res => res.json())
      .then(json => {
        if(json.id) {
          dispatch({
            type: 'CREATE_USER',
            payload: json
          })
        }
      })

  }
}
