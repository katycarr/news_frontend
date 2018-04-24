export const createUser = ({username, password, password_confirmation}, history) => {

  return (dispatch) => {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify({user: {username, password, password_confirmation}})
    }
    fetch('https://api-frontpage.herokuapp.com/users', options)
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
    fetch('https://api-frontpage.herokuapp.com/login', options)
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
    fetch('https://api-frontpage.herokuapp.com/get_user', {
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
