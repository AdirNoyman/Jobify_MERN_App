import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				{/* info */}
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Cred drinking vinegar meditation, kickstarter flannel
						ennui pok pok selfies praxis shabby chic blue bottle
						succulents vegan. Meh fanny pack organic biodiesel
						disrupt yuccie. Fingerstache austin raw denim meditation
						keytar shoreditch kickstarter humblebrag selvage freegan
						narwhal unicorn cliche. Gochujang pop-up tousled disrupt
						try-hard brooklyn fanny pack. Farm-to-table wayfarers.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login/Register
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
