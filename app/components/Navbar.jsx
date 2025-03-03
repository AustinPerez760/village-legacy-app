'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-white shadow-md backdrop-blur-sm py-2'
					: 'bg-transparent py-4'
			}`}>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='flex items-center'>
						<span className={`text-2xl font-bold transition-colors duration-300 ${
							isScrolled ? 'text-green-800' : 'text-white'
						}`}>
							Village Legacy
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						<NavLink href='/' label='Home' isScrolled={isScrolled} />
						<NavLink href='/maintenance' label='Maintenance' isScrolled={isScrolled} />
						<NavLink href='/landscape' label='Landscape' isScrolled={isScrolled} />
						<NavLink href='/projects' label='Recent Projects' isScrolled={isScrolled} />
						<NavLink href='/reviews' label='Reviews' isScrolled={isScrolled} />
						<NavLink
							href='/contact'
							label='Hire Us'
							className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors'
							isScrolled={isScrolled}
						/>
					</nav>

					{/* Mobile Menu Button */}
					<button
						className={`md:hidden transition-colors duration-300 ${
							isScrolled ? 'text-green-800' : 'text-white'
						}`}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						{isMobileMenuOpen ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMobileMenuOpen && (
					<nav className='md:hidden mt-4 pb-4 space-y-3 flex flex-col bg-white rounded-lg p-4 shadow-lg'>
						<MobileNavLink
							href='/'
							label='Home'
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<MobileNavLink
							href='/maintenance'
							label='Maintenance'
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<MobileNavLink
							href='/landscape'
							label='Landscape'
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<MobileNavLink
							href='/projects'
							label='Recent Projects'
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<MobileNavLink
							href='/reviews'
							label='Reviews'
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						<MobileNavLink
							href='/contact'
							label='Hire Us'
							onClick={() => setIsMobileMenuOpen(false)}
							className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors w-fit'
						/>
					</nav>
				)}
			</div>
		</header>
	);
}

function NavLink({ href, label, className = '', isScrolled }) {
	return (
		<Link
			href={href}
			className={`font-medium transition-colors duration-300 ${
				isScrolled
					? 'text-gray-800 hover:text-green-700'
					: 'text-white hover:text-green-500'
			} ${className}`}>
			{label}
		</Link>
	);
}

function MobileNavLink({ href, label, onClick, className = '' }) {
	return (
		<Link
			href={href}
			className={`text-gray-800 hover:text-green-700 font-medium transition-colors ${className}`}
			onClick={onClick}>
			{label}
		</Link>
	);
}
