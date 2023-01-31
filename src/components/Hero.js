import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <img src={process.env.PUBLIC_URL + '/heroimage.avif'} alt='hero'/>
        <div className='hero__right'>
          <h1>ROASTED WHITE SWEET POTATOES</h1>
          <p>Back by popular demand - generous hunks of creamy white sweet potatoes, roasted with bold and savory
            Mediterranean spices
          </p>
          <Link className='link' to='/builder'><div className='hero__build'>Build your custom bowl</div></Link>
          <div className='hero__arrows'>
            <img src={process.env.PUBLIC_URL + '/leftarrow.svg'} alt='left'/>
            <img src={process.env.PUBLIC_URL + '/rightarrow.svg'} alt='right'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero