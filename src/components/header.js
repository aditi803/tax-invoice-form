import { Link, useNavigate } from 'react-router-dom'
import { userInfo } from '../redux/slices/auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Header = () => {
  const token = localStorage.getItem("authToken")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(token, "token");

  const getUser = () => {

    let params = {

    }
    dispatch(userInfo({
      ...params, cb(res) {
        if (res.status) {

        }
      }
    }))
  }

  const handleProfile = () => {
    navigate("/user-info")
  }

  const handleDocument = () => {
    console.log("token in document ",token)
    if (token === null) {
      navigate("/signup")
    }
    else {
      navigate("/all-documents")
    }
  }

  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Your Logo</a>
        <ul className="navbar-nav">
          {token === null ?
            <li className="nav-item">
              <Link to='/signup' className="nav-link">Signup</Link>
              {/* <a href="/signup" className="nav-link">Signup</a> */}
            </li>

            : <p onClick={() => handleProfile()}>Hello</p>}
          <li className="nav-item" onClick={() => handleDocument()}>
            <Link className="nav-link">
              Documents

            </Link>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Save Online</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Download</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header