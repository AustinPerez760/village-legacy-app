'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Services() {
	const sectionRef = useRef(null);
	const scrollContainerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalCards = 6; // Total number of service cards
	const [visibleCards, setVisibleCards] = useState(1);

	// Update visible cards based on screen size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setVisibleCards(2); // Show 2 cards on medium and larger screens
			} else {
				setVisibleCards(1); // Show 1 card on smaller screens
			}
		};

		// Set initial value
		handleResize();

		// Add resize listener
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fade-in');
					}
				});
			},
			{ threshold: 0.1 }
		);

		const serviceCards = document.querySelectorAll('.service-card');
		serviceCards.forEach((card) => {
			observer.observe(card);
		});

		return () => {
			serviceCards.forEach((card) => {
				observer.unobserve(card);
			});
		};
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

	// Function to scroll the horizontal container
	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			let newIndex;

			if (direction === 'left') {
				// Move back one card, but not less than 0
				newIndex = Math.max(0, currentIndex - 1);
			} else {
				// Move forward one card, but not beyond total cards minus visible cards
				newIndex = Math.min(totalCards - visibleCards, currentIndex + 1);
			}

			// Only scroll if the index has changed
			if (newIndex !== currentIndex) {
				// Calculate the scroll position based on card width and gap
				const cardWidth =
					scrollContainerRef.current.querySelector('.service-card').offsetWidth;
				const gap = 16; // Small gap between cards
				const scrollPosition = newIndex * (cardWidth + gap);

				scrollContainerRef.current.scrollTo({
					left: scrollPosition,
					behavior: 'smooth',
				});

				setCurrentIndex(newIndex);
			}
		}
	};

	// Add wheel event handler to control horizontal scrolling with vertical mouse wheel
	useEffect(() => {
		const handleWheel = (e) => {
			if (scrollContainerRef.current && e.deltaY !== 0) {
				// Prevent the default vertical scroll
				e.preventDefault();

				// Determine direction based on deltaY
				const direction = e.deltaY > 0 ? 'right' : 'left';

				// Use the existing scroll function to handle the scrolling logic
				scroll(direction);
			}
		};

		const container = scrollContainerRef.current;
		if (container) {
			// Add the wheel event listener
			container.addEventListener('wheel', handleWheel, { passive: false });

			// Clean up the event listener when component unmounts
			return () => {
				container.removeEventListener('wheel', handleWheel);
			};
		}
	}, [currentIndex]); // Re-add listener when currentIndex changes

	return (
		<section
			ref={sectionRef}
			className='py-16 sm:py-20 bg-gray-50'
			id='services'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center mb-10 sm:mb-12'>
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
						Our Services
					</h2>
					<p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto'>
						We provide comprehensive landscaping services to create and maintain
						beautiful outdoor spaces.
					</p>
				</div>

				{/* Responsive horizontal list - one card on mobile, two on larger screens */}
				<div className='relative max-w-4xl mx-auto'>
					<div
						ref={scrollContainerRef}
						className='overflow-hidden'
						style={{
							scrollSnapType: 'x mandatory',
							WebkitOverflowScrolling: 'touch',
						}}>
						<div className='flex gap-4'>
							<ServiceCard
								title='Maintenance'
								description='We use a simple yet effective maintenance program that produces a beautiful garden year-round.'
								imageSrc='/images/lawn-care.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={0}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>

							<ServiceCard
								title='Landscape Design'
								description='We have extensive experience in creating vibrant and elegant landscapes tailored to your vision.'
								imageSrc='/images/lawn-trim.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={200}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>

							<ServiceCard
								title='Consultation'
								description='Schedule a free appointment and see why local residents have trusted us for over a decade!'
								imageSrc='/images/lawn-service.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={400}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>

							<ServiceCard
								title='Demolition'
								description='We provide safe and efficient demolition services for your outdoor projects.'
								imageSrc='/images/demo.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={600}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>

							<ServiceCard
								title='Junk Removal'
								description='We offer reliable junk removal services to help you declutter your outdoor space.'
								imageSrc='/images/removal.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={800}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>

							<ServiceCard
								title='Stonework'
								description='We offer reliable stonework services to help you create a beautiful outdoor space.'
								imageSrc='/images/path.jpg'
								targetSection='contact'
								onClick={() => scrollToSection('contact')}
								delay={800}
								className='service-card w-full md:w-[calc(50%-8px)] flex-shrink-0 scroll-snap-align-center'
							/>
						</div>
					</div>

					{/* Minimal modern navigation buttons */}
					<div className='flex justify-between mt-6'>
						<button
							onClick={() => scroll('left')}
							className={`p-2 rounded-full ${
								currentIndex === 0
									? 'text-gray-300 cursor-not-allowed'
									: 'text-gray-700 hover:bg-gray-100'
							}`}
							aria-label='Previous service'
							disabled={currentIndex === 0}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>

						{/* Card indicator dots */}
						<div className='flex items-center space-x-2'>
							{Array.from({ length: totalCards - visibleCards + 1 }).map(
								(_, index) => (
									<button
										key={index}
										onClick={() => {
											if (scrollContainerRef.current) {
												const cardWidth =
													scrollContainerRef.current.querySelector(
														'.service-card'
													).offsetWidth;
												const gap = 16;
												const scrollPosition = index * (cardWidth + gap);

												scrollContainerRef.current.scrollTo({
													left: scrollPosition,
													behavior: 'smooth',
												});

												setCurrentIndex(index);
											}
										}}
										className={`w-2 h-2 rounded-full transition-all ${
											currentIndex === index ? 'bg-gray-700 w-4' : 'bg-gray-300'
										}`}
										aria-label={`Go to service ${index + 1}`}
									/>
								)
							)}
						</div>

						<button
							onClick={() => scroll('right')}
							className={`p-2 rounded-full ${
								currentIndex >= totalCards - visibleCards
									? 'text-gray-300 cursor-not-allowed'
									: 'text-gray-700 hover:bg-gray-100'
							}`}
							aria-label='Next service'
							disabled={currentIndex >= totalCards - visibleCards}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
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
			</div>
		</section>
	);
}

function ServiceCard({
	title,
	description,
	imageSrc,
	targetSection,
	onClick,
	delay,
	className = '',
}) {
	return (
		<div
			className={`service-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden opacity-0 cursor-pointer ${className}`}
			style={{ animationDelay: `${delay}ms` }}
			onClick={onClick}>
			<div className='relative h-60 w-auto'>
				<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
				<Image
					src={imageSrc}
					alt={title}
					fill
					className='object-cover'
					sizes='(max-width: 768px) 100vw, 33vw'
					priority={false}
				/>
			</div>
			<div className='p-6'>
				<h3 className='text-xl font-bold text-gray-900 mb-2'>{title}</h3>
				<p className='text-gray-600 mb-4'>{description}</p>
				{/* Uncomment and modify if you want to add a "Learn more" button
				<button
					className='inline-flex items-center text-green-700 hover:text-green-800 font-medium'>
					Learn more
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						className='w-5 h-5 ml-1'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M14 5l7 7m0 0l-7 7m7-7H3'
						/>
					</svg>
				</button>
				*/}
			</div>
		</div>
	);
}
