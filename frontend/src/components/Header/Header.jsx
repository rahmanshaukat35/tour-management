import React from 'react';
import './header.css';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
	return (
		<header className='header'>
			<Container>
				<Row>
					<div className='nav__wrapper d-flex align-items-center justify-content-between'>
						{/* ===========logo========== */}
						<div className='logo'>
							<img src={logo} alt='' />
						</div>
						{/* ===========logo end========== */}
						{/* ===========menu start========== */}
						<div className='navigation'>
							<ul className='menu d-flex align-items-center gap-5'>
								<li className='nav__item'>
									<Link
										to='/home'
										className={(navClass) =>
											navClass.isActive ? 'active__link' : ''
										}
									>
										Home
									</Link>
								</li>
								<li className='nav__item'>
									<Link
										to='/about'
										className={(navClass) =>
											navClass.isActive ? 'active__link' : ''
										}
									>
										About
									</Link>
								</li>
								<li className='nav__item'>
									<Link
										to='/tours'
										className={(navClass) =>
											navClass.isActive ? 'active__link' : ''
										}
									>
										Tours
									</Link>
								</li>
							</ul>
						</div>
						{/* ===========menu end========== */}
						<div className='nav__right d-flex align-items-center gap-4'>
							<div className='nav__btns d-flex align-items-center gap-4'>
								<Button className='btn secondary__btn'>
									<Link to='/login'>Login</Link>
								</Button>
								<Button className='btn primary__btn'>
									<Link to='/register'>Register</Link>
								</Button>
							</div>
							<span className='mobile__menu'>
								<i className='ri-menu-line'></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
