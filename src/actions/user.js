export const createUser = ({username, password, password_confirmation}) => {

  return (dispatch, history) => {
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
        if(json.errors) {
          console.log(json.errors)
        } else {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'CREATE_USER',
            payload: json.user
          })
          history.push('/')
        }
      })
  }
}

export const loginUser = ({username, password}, history) => {
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
        if(json.errors) {
          console.log(json.errors)
        } else {
          localStorage.setItem('token', json.token)
          dispatch({
            type: 'CREATE_USER',
            payload: json.user
          })
          history.push('/')
        }
      })
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const getUser = () => {
  const token = localStorage.getItem('token')
  return (dispatch) => {
    fetch('http://localhost:3000/get_user', {
      headers: {
        "Authorization": token
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json["error"]) {
        console.log(json)
      } else {
        dispatch({
          type: 'GET_USER',
          payload: json
        })
      }
    })
  }
}
