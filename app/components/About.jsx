'use client';

import Image from 'next/image';

export default function About() {
	return (
		<section className='py-20 bg-white' id='about'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Image */}
					<div className='relative'>
						<div className='relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg'>
							<Image
								src='/images/panel-lawns.jpg'
								alt='Village Legacy team'
								fill
								className='object-cover'
								sizes='(max-width: 1024px) 100vw, 50vw'
								priority
							/>
						</div>
						{/* Decorative Elements */}
						<div className='absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-xl -z-10'></div>
						<div className='absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-xl -z-10'></div>
					</div>

					{/* Content */}
					<div>
						<div className='inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4'>
							About Us
						</div>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
							Commited to fulfill client visions
						</h2>
						<div className='prose prose-lg text-gray-600 mb-8'>
							<p>
								Village Legacy Landscaping established itself in 2024 with the
								aim of providing our clients with the best possible service
								using the latest landscaping technologies and practices.
							</p>
							<p>
								Dedicated to creating beautiful outdoor spaces, we strive to
								make customers happy and satisfied with every project we
								undertake.
							</p>
							<p>
								Our business would not be where it is today if it weren't for
								our wonderful clients who have trusted us with their outdoor
								spaces for over a decade!
							</p>
						</div>

						{/* Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							<div className='text-center p-4 bg-gray-50 rounded-lg'>
								<div className='text-3xl font-bold text-green-600 mb-1'>5+</div>
								<div className='text-sm text-gray-500'>Years Experience</div>
							</div>
							<div className='text-center p-4 bg-gray-50 rounded-lg'>
								<div className='text-3xl font-bold text-green-600 mb-1'>
									100+
								</div>
								<div className='text-sm text-gray-500'>Projects Completed</div>
							</div>
							<div className='text-center p-4 bg-gray-50 rounded-lg'>
								<div className='text-3xl font-bold text-green-600 mb-1'>5</div>
								<div className='text-sm text-gray-500'>Team Members</div>
							</div>
							<div className='text-center p-4 bg-gray-50 rounded-lg'>
								<div className='text-3xl font-bold text-green-600 mb-1'>
									98%
								</div>
								<div className='text-sm text-gray-500'>Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
