import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
	return (
		<Wrapper className='full-page'>
			<div>
				<img src={img} alt='not found' />
				<h3>Oops!</h3>
				<p>Sorry, but the page was not found</p>
				<Link to='/'>back home</Link>
			</div>
		</Wrapper>
	);
};

export default Error;
