'use client';

import Link from 'next/link';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 100, // Offset to account for navbar height
				behavior: 'smooth',
			});
		}
	};

	return (
		<footer className='bg-gray-900 text-white pt-16 pb-8'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
					{/* Company Info */}
					<div>
						<h3 className='text-xl font-bold mb-4'>The Village Legacy</h3>
						<p className='text-gray-400 mb-4'>
							Transforming outdoor spaces with exceptional landscaping services
							since 2024.
						</p>
						<div className='flex space-x-4'>
							<SocialLink href='https://instagram.com' icon='instagram' />
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-xl font-bold mb-4'>Quick Links</h3>
						<ul className='space-y-2 cursor-pointer'>
							<FooterLink
								sectionId='hero'
								label='Home'
								onClick={() => scrollToSection('hero')}
							/>
							<FooterLink
								sectionId='about'
								label='About Us'
								onClick={() => scrollToSection('about')}
							/>
							<FooterLink
								sectionId='services'
								label='Services'
								onClick={() => scrollToSection('services')}
							/>
							{/* <FooterLink
								sectionId='projects'
								label='Recent Projects'
								onClick={() => scrollToSection('projects')}
							/> */}
							<FooterLink
								sectionId='testimonials'
								label='Reviews'
								onClick={() => scrollToSection('testimonials')}
							/>
							<FooterLink
								sectionId='contact'
								label='Contact Us'
								onClick={() => scrollToSection('contact')}
							/>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className='text-xl font-bold mb-4'>Our Services</h3>
						<ul className='space-y-2'>
							<FooterLink
								sectionId='services'
								label='Garden Maintenance'
								onClick={() => scrollToSection('services')}
							/>
							<FooterLink
								sectionId='services'
								label='Landscape Design'
								onClick={() => scrollToSection('services')}
							/>
							<FooterLink
								sectionId='services'
								label='Demolition'
								onClick={() => scrollToSection('services')}
							/>
							<FooterLink
								sectionId='services'
								label='Junk Removal'
								onClick={() => scrollToSection('services')}
							/>
							<FooterLink
								sectionId='services'
								label='Stonework'
								onClick={() => scrollToSection('services')}
							/>
							<FooterLink
								sectionId='services'
								label='Consultation'
								onClick={() => scrollToSection('services')}
							/>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className='text-xl font-bold mb-4'>Contact Us</h3>
						<ul className='space-y-3'>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-green-500 mr-2 mt-0.5'>
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
								<span className='text-gray-400'>Orange County, California</span>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-green-500 mr-2 mt-0.5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
								<span className='text-gray-400'>(714) 673-9833</span>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-green-500 mr-2 mt-0.5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
								<a
									href='mailto:info@villagelegacy.com'
									className='text-gray-400 hover:text-white transition-colors'>
									info@villagelegacy.com
								</a>
							</li>
							<li className='flex items-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='w-5 h-5 text-green-500 mr-2 mt-0.5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span className='text-gray-400'>
									Mon-Fri: 8am-6pm
									<br />
									Sat: 9am-4pm
									<br />
									Sun: Closed
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center'>
					<p className='text-gray-500 mb-4 md:mb-0'>
						&copy; {currentYear} The Village Legacy Landscaping. All rights
						reserved.
					</p>
					<div className='flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-500'>
						<Link
							href='/privacy'
							className='hover:text-white transition-colors cursor-pointer'>
							Privacy Policy
						</Link>
						<Link href='/terms' className='hover:text-white transition-colors cursor-pointer'>
							Terms of Service
						</Link>
						<Link
							href='/sitemap'
							className='hover:text-white transition-colors cursor-pointer'>
							Sitemap
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterLink({ sectionId, label, onClick }) {
	return (
		<li>
			<button
				onClick={onClick}
				className='text-gray-400 hover:text-white transition-colors text-left cursor-pointer'>
				{label}
			</button>
		</li>
	);
}

function SocialLink({ href, icon }) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className='bg-gray-800 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer'
			aria-label={`Follow us on ${icon}`}>
			{icon === 'facebook' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
				</svg>
			)}
			{icon === 'yelp' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
				</svg>
			)}
			{icon === 'instagram' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
				</svg>
			)}
			{icon === 'linkedin' && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					fill='currentColor'
					viewBox='0 0 24 24'>
					<path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
				</svg>
			)}
		</a>
	);
}
