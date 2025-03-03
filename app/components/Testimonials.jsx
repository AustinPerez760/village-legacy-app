'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
	{
		id: 1,
		name: 'Sarah Johnson',
		role: 'Homeowner',
		content:
			"Village Legacy completely transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations. We couldn't be happier with the results!",
	},
	{
		id: 2,
		name: 'Michael Chen',
		role: 'Business Owner',
		content:
			'We hired Village Legacy to redesign the landscaping around our office building. They created a welcoming and low-maintenance environment that has received countless compliments from clients and employees alike.',
	},
	{
		id: 3,
		name: 'Emily Rodriguez',
		role: 'Homeowner',
		content:
			'The team at Village Legacy has been maintaining our garden for over 2 years now. They are reliable, thorough, and truly care about the health and appearance of our outdoor space. Highly recommended!',
	},
];

export default function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isAnimating, setIsAnimating] = useState(false);
	const intervalRef = useRef(null);

	const nextTestimonial = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setActiveIndex((prev) => (prev + 1) % testimonials.length);

		setTimeout(() => {
			setIsAnimating(false);
		}, 500);
	};

	const prevTestimonial = () => {
		if (isAnimating) return;

		setIsAnimating(true);
		setActiveIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length
		);

		setTimeout(() => {
			setIsAnimating(false);
		}, 500);
	};

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			nextTestimonial();
		}, 8000);

		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<section className='py-20 bg-green-50' id='testimonials'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						What Our Clients Say
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Don't just take our word for it - hear from our satisfied clients
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='relative bg-white rounded-2xl shadow-md p-8 md:p-12'>
						{/* Quote Icon */}
						<div className='absolute top-6 left-6 text-green-100'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='48'
								height='48'
								viewBox='0 0 24 24'
								fill='currentColor'>
								<path d='M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z' />
							</svg>
						</div>

						{/* Testimonial Content */}
						<div className='relative z-10'>
							<div
								className={`transition-opacity duration-500 ${
									isAnimating ? 'opacity-0' : 'opacity-100'
								}`}>
								<p className='text-xl text-gray-700 mb-8 italic'>
									{testimonials[activeIndex].content}
								</p>

								<div className='flex items-center'>
									<div className='relative w-12 h-12 rounded-full overflow-hidden mr-4'>
										<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
									</div>
									<div>
										<h4 className='font-bold text-gray-900'>
											{testimonials[activeIndex].name}
										</h4>
										<p className='text-sm text-gray-500'>
											{testimonials[activeIndex].role}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Navigation Buttons */}
						<div className='absolute bottom-8 right-8 flex space-x-2'>
							<button
								onClick={prevTestimonial}
								className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
								aria-label='Previous testimonial'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-gray-600'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 19l-7-7 7-7'
									/>
								</svg>
							</button>
							<button
								onClick={nextTestimonial}
								className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors'
								aria-label='Next testimonial'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-gray-600'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Indicators */}
					<div className='flex justify-center mt-6 space-x-2'>
						{testimonials.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`w-2.5 h-2.5 rounded-full transition-colors ${
									index === activeIndex
										? 'bg-green-600'
										: 'bg-gray-300 hover:bg-gray-400'
								}`}
								aria-label={`Go to testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
