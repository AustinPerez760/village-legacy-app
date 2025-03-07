'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactCTA() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
		service: 'general',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError('');

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);

			// Reset form after submission
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
				service: 'general',
			});
		}, 1500);
	};

	return (
		<section className='py-20 bg-green-800 text-white' id='contact'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column - Text */}
					<div>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Ready to Transform Your Outdoor Space?
						</h2>
						<p className='text-lg text-green-50 mb-8'>
							Schedule a free consultation with our expert team. We'll discuss
							your vision, assess your space, and provide personalized
							recommendations.
						</p>

						<div className='space-y-6'>
							<div className='flex items-start'>
								<div className='bg-green-700 p-3 rounded-full mr-4'>
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
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-medium text-xl mb-1'>Call Us</h3>
									<p className='text-green-100'>714-673-9833</p>
								</div>
							</div>

							<div className='flex items-start'>
								<div className='bg-green-700 p-3 rounded-full mr-4'>
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
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-medium text-xl mb-1'>Email Us</h3>
									<p className='text-green-100'>
										villagelegacylandscaping@gmail.com
									</p>
								</div>
							</div>

							<div className='flex items-start'>
								<div className='bg-green-700 p-3 rounded-full mr-4'>
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
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-medium text-xl mb-1'>Serving</h3>
									<p className='text-green-100'>Orange County, California</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column - Form */}
					<div className='bg-white text-gray-900 rounded-xl p-8 shadow-lg'>
						{isSubmitted ? (
							<div className='text-center py-8'>
								<div className='bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										className='w-8 h-8'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-bold mb-2'>Thank You!</h3>
								<p className='text-gray-600 mb-6'>
									We've received your message and will get back to you shortly.
								</p>
								<button
									onClick={() => setIsSubmitted(false)}
									className='bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors'>
									Send Another Message
								</button>
							</div>
						) : (
							<>
								<h3 className='text-2xl font-bold mb-6'>Get in Touch</h3>
								<form
									action='https://formsubmit.co/villagelegacylandscaping@gmail.com'
									method='POST'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
										<div>
											<label
												htmlFor='name'
												className='block text-sm font-medium text-gray-700 mb-1'>
												Name
											</label>
											<input
												type='text'
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors'
												required
											/>
										</div>
										<div>
											<label
												htmlFor='email'
												className='block text-sm font-medium text-gray-700 mb-1'>
												Email
											</label>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors'
												required
											/>
										</div>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='phone'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Phone Number
										</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											value={formData.phone}
											onChange={handleChange}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors'
										/>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='service'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Service Interested In
										</label>
										<select
											id='service'
											name='service'
											value={formData.service}
											onChange={handleChange}
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors'>
											<option value='consultation'>Consultation</option>
											<option value='general'>General Inquiry</option>
											<option value='maintenance'>Landscape Maintenance</option>
											<option value='design'>Landscape Design</option>
											<option value='junk-removal'>Junk Removal</option>
											<option value='demolition'>Demolition</option>
										</select>
									</div>

									<div className='mb-6'>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											rows='4'
											className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors'
											required></textarea>
									</div>

									{error && (
										<div className='mb-4 p-3 bg-red-50 text-red-600 rounded-lg'>
											{error}
										</div>
									)}

									<button
										type='submit'
										disabled={isSubmitting}
										className={`w-full bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-colors ${
											isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
										}`}>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</button>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
