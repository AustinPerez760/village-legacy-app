'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 100,
				behavior: 'smooth',
			});
		}
	};

	return (
		<section className='relative h-screen flex items-center' id='hero'>
			{/* Background Image with Overlay */}
			<div
				className='absolute inset-0 bg-cover bg-center z-0'
				style={{
					backgroundImage: "url('/images/lawn-plan.jpg')",
					backgroundPosition: 'center',
				}}>
				<div className='absolute inset-0 bg-black/40 z-0'></div>
			</div>

			{/* Content */}
			<div className='container mx-auto px-4 md:px-6 relative z-10'>
				<div
					className={`max-w-3xl transition-all duration-1000 ${
						isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
					}`}>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
						Transform Your Outdoor Space
					</h1>
					<p className='text-xl md:text-2xl text-white/90 mb-8'>
						The Village Legacy Landscaping has been serving local residents with
						exceptional landscaping services since 2024.
					</p>
					<div className='flex flex-col sm:flex-row gap-4'>
						<button
							onClick={() => scrollToSection('contact')}
							className='bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-colors text-center cursor-pointer'>
							Schedule a Free Appointment
						</button>
						<button
							onClick={() => scrollToSection('services')}
							className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium px-8 py-3 rounded-full transition-colors border border-white/30 text-center cursor-pointer'>
							View Our Services
						</button>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
				<div className='text-white text-sm font-medium text-center'>
					<p className='mb-2'>Scroll to explore</p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='w-6 h-6 mx-auto'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M19 14l-7 7m0 0l-7-7m7 7V3'
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
