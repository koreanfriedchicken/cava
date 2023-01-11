const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <img src='heroimage.avif'/>
        <div className='hero__right'>
          <h1>ROASTED WHITE SWEET POTATOES</h1>
          <p>Back by popular demand - generous hunks of creamy white sweet potatoes, roasted with bold and savory
            Mediterranean spices
          </p>
          <div className='hero__build'>Build your custom bowl</div>
          <div className='hero__arrows'>
            <img src='leftarrow.svg'/>
            <img src='rightarrow.svg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero