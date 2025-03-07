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

	const scrollToSection = (sectionId, isMobile = false) => {
		const element = document.getElementById(sectionId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 100, // Offset to account for navbar height
				behavior: 'smooth',
			});
		}

		// Close mobile menu if it's a mobile click
		if (isMobile) {
			setIsMobileMenuOpen(false);
		}
	};

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
						<span
							className={`text-2xl font-bold transition-colors duration-300 ${
								isScrolled ? 'text-green-800' : 'text-white'
							}`}>
							The Village Legacy
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						<NavLink
							sectionId='hero'
							label='Home'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('hero')}
						/>
						<NavLink
							sectionId='services'
							label='Services'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('services')}
						/>
						<NavLink
							sectionId='about'
							label='About'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('about')}
						/>
						{/* <NavLink
							sectionId='projects'
							label='Recent Projects'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('projects')}
						/> */}
						<NavLink
							sectionId='testimonials'
							label='Reviews'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('testimonials')}
						/>
						<NavLink
							sectionId='contact'
							label='Hire Us'
							className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors'
							isScrolled={isScrolled}
							onClick={() => scrollToSection('contact')}
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
							sectionId='hero'
							label='Home'
							onClick={() => scrollToSection('hero', true)}
						/>
						<MobileNavLink
							sectionId='services'
							label='Services'
							onClick={() => scrollToSection('services', true)}
						/>
						<MobileNavLink
							sectionId='about'
							label='About'
							onClick={() => scrollToSection('about', true)}
						/>
						<MobileNavLink
							sectionId='projects'
							label='Recent Projects'
							onClick={() => scrollToSection('projects', true)}
						/>
						<MobileNavLink
							sectionId='testimonials'
							label='Reviews'
							onClick={() => scrollToSection('testimonials', true)}
						/>
						<MobileNavLink
							sectionId='contact'
							label='Hire Us'
							onClick={() => scrollToSection('contact', true)}
							className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors w-fit'
						/>
					</nav>
				)}
			</div>
		</header>
	);
}

function NavLink({ sectionId, label, className = '', isScrolled, onClick }) {
	return (
		<button
			onClick={onClick}
			className={`font-medium transition-colors duration-300 ${
				isScrolled
					? 'text-gray-800 hover:text-green-700'
					: 'text-white hover:text-green-500'
			} ${className}`}>
			{label}
		</button>
	);
}

function MobileNavLink({ sectionId, label, onClick, className = '' }) {
	return (
		<button
			onClick={onClick}
			className={`text-gray-800 hover:text-green-700 font-medium transition-colors ${className}`}>
			{label}
		</button>
	);
}
