'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'Public Space Transformation',
		location: 'San Rafael',
		description:
			'Complete maitenance and landscaping transformation for a public space.',
		imageSrc: '/images/large-landscape.jpg',
		category: 'Lawn Care',
	},
	{
		id: 2,
		title: 'Elegant Backyard Installation',
		location: 'Mill Valley',
		description: 'Elegant backyard installation with custom stone and wood.',
		imageSrc: '/images/backyard.jpg',
		category: 'Hardscaping',
	},
	{
		id: 3,
		title: 'Sustainable Irrigation System',
		location: 'Sausalito',
		description:
			'Water-efficient irrigation system installation for a large residential property.',
		imageSrc: '/images/irrigation.jpg',
		category: 'Irrigation',
	},
];

export default function RecentProjects() {
	const [activeProject, setActiveProject] = useState(projects[0]);

	return (
		<section className='py-20 bg-white' id='recent-projects'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
						Recent Projects
					</h2>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Take a look at some of our recent landscaping transformations
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Featured Project Image */}
					<div className='relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg'>
						<Image
							src={activeProject.imageSrc}
							alt={activeProject.title}
							fill
							className='object-cover transition-all duration-500'
							sizes='(max-width: 1024px) 100vw, 50vw'
							priority
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
						<div className='absolute bottom-0 left-0 p-6 text-white'>
							<span className='inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full mb-3'>
								{activeProject.category}
							</span>
							<h3 className='text-2xl font-bold mb-1'>{activeProject.title}</h3>
							<p className='text-white/80 mb-2'>{activeProject.location}</p>
						</div>
					</div>

					{/* Project Selection and Description */}
					<div className='space-y-8'>
						<div className='prose prose-lg max-w-none'>
							<h3 className='text-2xl font-bold text-gray-900'>
								{activeProject.title}
							</h3>
							<p className='text-gray-600'>{activeProject.description}</p>
						</div>

						{/* Project Selector */}
						<div className='space-y-4'>
							<h4 className='font-medium text-gray-900'>Browse Projects</h4>
							<div className='space-y-3'>
								{projects.map((project) => (
									<button
										key={project.id}
										onClick={() => setActiveProject(project)}
										className={`w-full text-left p-4 rounded-lg transition-all ${
											activeProject.id === project.id
												? 'bg-green-50 border-l-4 border-green-600'
												: 'bg-gray-50 hover:bg-gray-100'
										}`}>
										<h5 className='font-medium text-gray-900'>
											{project.title}
										</h5>
										<p className='text-sm text-gray-500'>{project.location}</p>
									</button>
								))}
							</div>
						</div>

						<Link
							href='/projects'
							className='inline-flex items-center text-green-700 hover:text-green-800 font-medium'>
							View all projects
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
			</div>
		</section>
	);
}
