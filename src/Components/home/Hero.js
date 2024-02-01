import {Link} from "react-router-dom";
import restaurantFood from '../../assets/restauranfood.jpg'
import './Hero.css'

const Hero = () => {
  return <section className='hero'>
  <div className='hero-info'>
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <p className='description'>
      We are a family owned Mediterranean restaurant, focused on traditional
      recipes served with a modern twist.
    </p>
    <Link className="action-button" to="/reservations">Reserve a table</Link>
  </div>
  <div className='hero-image'>
    <img
      src={restaurantFood}
      alt='Restaurant food'
    />
  </div>
</section>;
};

export default Hero;