'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
	const sectionRef = useRef(null);

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

	return (
		<section ref={sectionRef} className='py-20 bg-gray-50' id='services'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Our Services
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						We provide comprehensive landscaping services to create and maintain
						beautiful outdoor spaces.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<ServiceCard
						title='Maintenance'
						description='We use a simple yet effective maintenance program that produces a beautiful garden year-round.'
						imageSrc='/images/lawn-care.jpg'
						href='/maintenance'
						delay={0}
					/>

					<ServiceCard
						title='Landscape Design'
						description='We have extensive experience in creating vibrant and elegant landscapes tailored to your vision.'
						imageSrc='/images/lawn-trim.jpg'
						href='/landscape'
						delay={200}
					/>

					<ServiceCard
						title='Consultation'
						description='Schedule a free appointment and see why local residents have trusted us for over a decade!'
						imageSrc='/images/lawn-service.jpg'
						href='/contact'
						delay={400}
					/>
				</div>
			</div>
		</section>
	);
}

function ServiceCard({ title, description, imageSrc, href, delay }) {
	return (
		<div
			className='service-card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden opacity-0'
			style={{ animationDelay: `${delay}ms` }}>
			<div className='relative h-64 w-full'>
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
				<Link
					href={href}
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
				</Link>
			</div>
		</div>
	);
}
