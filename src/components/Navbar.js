import { BagState } from "../context/BagContext"

import { Link } from "react-router-dom"

const Navbar = ({ setOrderModal }) => {

  const { state } = BagState()
  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__left'>
          <div className='navbar__hamburger'>
            <img src={process.env.PUBLIC_URL + '/hamburgermenu.svg'} alt='menu'/>
          </div>
          
          <Link to='/'>
            <div className='navbar__logo'>
            <img src={process.env.PUBLIC_URL + '/cavalogo.svg'} alt='logo'/>
            </div>
          </Link>
          <div className='navbar__links'>
            <Link className='link' to='/'>
              <div>Menu</div>
            </Link>
            <div>Gifting</div>
            <div>Rewards</div>
            <div>Catering</div>
            <div>Locations</div>
          </div>
      </div>
      <div className='navbar__right'>
        <div className='navbar__signin'>
          <img src={process.env.PUBLIC_URL + '/user.svg'} alt='user'></img>
          <div>Sign In</div>
        </div>
        {<div className='navbar__bag' onClick={() => setOrderModal(true)}>
          <img src={process.env.PUBLIC_URL + '/bag.svg'} alt='bag'></img>
          <div>{state.bag.length}</div>
        </div>
        }
        {
          state.bag.length === 0 && <div className='navbar__order'>Order</div>
        }
      </div>
      </div>
    </div>
  )
}

export default Navbar