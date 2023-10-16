import { Link, useNavigate } from 'react-router-dom'
import { userInfo } from '../redux/slices/auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Header = () => {
  const token = localStorage.getItem("authToken")
  const navigate = useNavigate()
  const dispatch = useDispatch()

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

  useEffect(() => {
    getUser()
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">Your Logo</a>
        <ul className="navbar-nav">
          {token != "" ?
          
          <p onClick={() => handleProfile()}>Hello</p> 
          : <li className="nav-item">
            <Link to='/signup' className="footerLinks">Signup</Link>
            {/* <a href="/signup" className="nav-link">Signup</a> */}
          </li>}

          <li className="nav-item">
            <a href="/about" className="nav-link">Save Online</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Download</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header