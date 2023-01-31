import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu__options'>
        <div>Bowls</div>
        <div>Pitas</div>
        <div>Kid's Meal</div>
        <div>Drinks</div>
        <div>Sides</div>
        <div>Desserts</div>
      </div>
      <h1>BOWLS</h1>
      <div className='menu__grid'>
          <Link className='link' to='/balsamicdatechicken'>
            <div className='menu__item'>
              <img src={process.env.PUBLIC_URL + '/balsamicbowl.avif'} alt='menuitem'/>
              <h2>BALSAMIC DATE CHICKEN</h2>
              <h3>$10.95 ● 645 Cal</h3>
              <p>Grilled chicken, eggplant dip, red pepper hummus, corn, brown rice, spinach,
                balsamic date vinaigrette, more.</p>
            </div>
          </Link>
          <Link className='link' to='/harissaavocadobowl'>
            <div className='menu__item'>
              <img src={process.env.PUBLIC_URL + '/harissabowl.avif'} alt='menuitem'/>
              <h2>HARISSA AVOCADO BOWL</h2>
              <h3>$14.60 ● 880 Cal</h3>
              <p>Harissa honey chicken + hot harissa vinaigrette. Crazy Feta, hummus, corn, 
                avocado, rice, SuperGreens, more.</p>
            </div>
          </Link>
          <Link className='link' to='/lentilavocadobowl'>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL +'/lentilbowl.avif'} alt='menuitem'/>
            <h2>LENTIL AVOCADO BOWL</h2>
            <h3>$13.35 ● 770 Cal</h3>
            <p>Falafel, roasted veg, roasted eggplant, hummus, avocado, lentil tabbouleh, 
              spinach, SuperGreens, skhug, more.</p>
          </div>
          </Link>
          <Link className='link' to='/chickenrightricebowl'>
            <div className='menu__item'>
              <img src={process.env.PUBLIC_URL + '/rightbowl.avif'} alt='menuitem'/>
              <h2>CHICKEN + RIGHTRICE</h2>
              <h3>$11.60 ● 750 Cal</h3>
              <p>Built on a base of high-protein RightRice with grilled chicken, tzatziki, 
                hummus, feta, tomato, arugula, more.</p>
            </div>
          </Link>
          <Link className='link' to='/greeksalad'>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL + '/greeksalad.avif'} alt='menuitem'/>
            <h2>GREEK SALAD</h2>
            <h3>$10.95 ● 600 Cal</h3>
            <p>Grilled chicken, hummus, tzatziki, feta, cucumber, tomato, Kalamata olives, 
              romaine, arugula, and vinaigrette.</p>
          </div>
          </Link>
      </div>

      <h1>PITAS</h1>
      <div className='menu__grid'>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL + '/sweetpita.avif'} alt='menuitem'/>
            <h2>SWEET + SPICY CHICKEN</h2>
            <h3>$12.20 ● 740 Cal</h3>
            <p>Harissa honey chicken meets balsamic date vinaigrette. Plus, tzatziki, tomato + onion, 
              pickles, romaine.</p>
          </div>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL + '/crispypita.avif'} alt='menuitem'/>
            <h2>CRISPY FALAFEL</h2>
            <h3>$10.95 ● 955 Cal</h3>
            <p>Falafel, hummus, roasted eggplant, pickles, cabbage slaw, tomato + onion, garlic dressing, 
              skhug.</p>
          </div>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL + '/spicypita.avif'} alt='menuitem' /> 
            <h2>SPICY CHICKEN + AVOCADO</h2>
            <h3>$14.60 ● 1030 Cal</h3>
            <p>Harissa honey chicken, Crazy Feta, hummus, avocado, pickles, corn, pickled onions, 
              hot harissa vinaigrette.</p>
          </div>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL +'/lambpita.avif'} alt='menuitem'/>
            <h2>SPICY LAMB MEATBALL</h2>
            <h3>$13.15 ● 865 Cal</h3>
            <p>Lamb meatballs, hummus, tomato + cucumber, pickled onions, cabbage slaw, pickles, 
              garlic dressing, skhug.</p>
          </div>
          <div className='menu__item'>
            <img src={process.env.PUBLIC_URL + '/greekpita.avif'} alt='menuitem'/>
            <h2>GREEK CHICKEN</h2>
            <h3>$10.95 ● 895 Cal</h3>
            <p>Grilled chicken, hummus, tzatziki, pickles, tomato + onion, olives, feta, 
              shredded romaine, Greek Vinaigrette.</p>
          </div>
      </div>
    </div>
  )
}

export default Menu