import { baseUrl } from './actionCreator'

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
    fetch(baseUrl+'/users', options)
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
    fetch(baseUrl+'/login', options)
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
  return (dispatch) => {
    fetch(baseUrl+'/get_user', {
      headers: {
        "Authorization": localStorage.getItem('token')
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
