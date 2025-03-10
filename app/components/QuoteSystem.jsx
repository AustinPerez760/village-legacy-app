'use client';

import { useState } from 'react';

export default function QuoteSystem() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		lawnCondition: '',
		lawnProblems: [],
		address: '',
		name: '',
		email: '',
		phone: '',
	});
	const [quoteResult, setQuoteResult] = useState(null);

	const lawnConditions = [
		{
			id: 'great',
			label: 'Great and I want to keep it that way',
			basePrice: 99,
		},
		{ id: 'okay', label: 'Not bad but would like some help', basePrice: 149 },
		{ id: 'help', label: 'Help me, Village Legacy!', basePrice: 199 },
	];

	const lawnProblems = [
		{ id: 'weeds', label: 'Weeds', price: 50 },
		{ id: 'bare-spots', label: 'Bare Spots', price: 75 },
		{ id: 'insects', label: 'Insects', price: 60 },
		{ id: 'disease', label: 'Disease', price: 85 },
		{ id: 'thin-grass', label: 'Thin Grass', price: 65 },
		{ id: 'drainage', label: 'Poor Drainage', price: 90 },
	];

	const handleLawnConditionSelect = (condition) => {
		setFormData({
			...formData,
			lawnCondition: condition,
		});
		setStep(2);
	};

	const handleProblemToggle = (problemId) => {
		if (formData.lawnProblems.includes(problemId)) {
			setFormData({
				...formData,
				lawnProblems: formData.lawnProblems.filter((id) => id !== problemId),
			});
		} else {
			setFormData({
				...formData,
				lawnProblems: [...formData.lawnProblems, problemId],
			});
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleNextStep = () => {
		setStep(step + 1);
	};

	const handlePrevStep = () => {
		setStep(step - 1);
	};

	const calculateQuote = () => {
		// Find the base price from the selected lawn condition
		const conditionObj = lawnConditions.find(
			(c) => c.id === formData.lawnCondition
		);
		let total = conditionObj ? conditionObj.basePrice : 0;

		// Add prices for each selected problem
		formData.lawnProblems.forEach((problemId) => {
			const problem = lawnProblems.find((p) => p.id === problemId);
			if (problem) {
				total += problem.price;
			}
		});

		// Generate the treatment plan based on selections
		const selectedProblems = formData.lawnProblems
			.map((problemId) => {
				const problem = lawnProblems.find((p) => p.id === problemId);
				return problem ? problem.label : '';
			})
			.filter(Boolean);

		// Create the quote result
		setQuoteResult({
			customerName: formData.name,
			customerEmail: formData.email,
			customerPhone: formData.phone,
			customerAddress: formData.address,
			lawnCondition: conditionObj ? conditionObj.label : '',
			selectedProblems,
			totalPrice: total,
			discount: Math.round(total * 0.5), // 50% off first service
			finalPrice: Math.round(total * 0.5),
		});

		setStep(4);
	};

	const renderStepIndicator = () => {
		return (
			<div className='flex items-center justify-center mb-8'>
				{[1, 2, 3, 4].map((num) => (
					<div key={num} className='flex items-center'>
						<div
							className={`rounded-full h-8 w-8 flex items-center justify-center ${
								step === num
									? 'bg-green-600 text-white'
									: step > num
									? 'bg-green-200 text-green-800'
									: 'bg-gray-200 text-gray-800'
							}`}>
							{step > num ? '✓' : num}
						</div>
						{num < 4 && (
							<div
								className={`h-1 w-10 ${
									step > num ? 'bg-green-600' : 'bg-gray-200'
								}`}></div>
						)}
					</div>
				))}
			</div>
		);
	};

	const renderStep1 = () => {
		return (
			<div className='text-center text-gray-800'>
				<h2 className='text-2xl font-bold mb-6 text-gray-800'>
					How would you describe your lawn?
				</h2>
				<div className='grid gap-4 md:grid-cols-3'>
					{lawnConditions.map((condition) => (
						<button
							key={condition.id}
							onClick={() => handleLawnConditionSelect(condition.id)}
							className='p-4 border-2 border-green-600 rounded-lg hover:bg-green-50 transition-colors text-gray-800'>
							{condition.label}
						</button>
					))}
				</div>
			</div>
		);
	};

	const renderStep2 = () => {
		return (
			<div className='text-gray-800'>
				<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
					What is your yard's biggest problem?
				</h2>
				<p className='text-gray-800 mb-4 text-center'>Select all that apply</p>
				<div className='grid gap-4 md:grid-cols-2 mb-8'>
					{lawnProblems.map((problem) => (
						<div
							key={problem.id}
							onClick={() => handleProblemToggle(problem.id)}
							className={`p-4 border-2 rounded-lg cursor-pointer transition-colors text-gray-800 ${
								formData.lawnProblems.includes(problem.id)
									? 'border-green-600 bg-green-50'
									: 'border-gray-300 hover:border-green-400'
							}`}>
							<div className='flex items-center'>
								<div
									className={`w-5 h-5 mr-3 border rounded flex items-center justify-center ${
										formData.lawnProblems.includes(problem.id)
											? 'bg-green-600 border-green-600 text-white'
											: 'border-gray-400'
									}`}>
									{formData.lawnProblems.includes(problem.id) && '✓'}
								</div>
								<span className='text-gray-800'>{problem.label}</span>
							</div>
						</div>
					))}
				</div>
				<div className='flex justify-between'>
					<button
						onClick={handlePrevStep}
						className='px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-gray-800'>
						Back
					</button>
					<button
						onClick={handleNextStep}
						className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
						disabled={formData.lawnProblems.length === 0}>
						Next
					</button>
				</div>
			</div>
		);
	};

	const renderStep3 = () => {
		return (
			<div className='text-gray-800'>
				<h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
					Ready to love your lawn?
				</h2>
				<p className='text-gray-800 mb-6 text-center'>
					Fill in your details to see the right plan for you and start living
					life outside.
				</p>
				<div className='space-y-4 mb-6'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-800 mb-1'>
							Full Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800'
							placeholder='Your name'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-800 mb-1'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800'
							placeholder='Your email'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='phone'
							className='block text-sm font-medium text-gray-800 mb-1'>
							Phone
						</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							value={formData.phone}
							onChange={handleInputChange}
							className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800'
							placeholder='Your phone number'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='address'
							className='block text-sm font-medium text-gray-800 mb-1'>
							Address
						</label>
						<input
							type='text'
							id='address'
							name='address'
							value={formData.address}
							onChange={handleInputChange}
							className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-800'
							placeholder='Your address'
							required
						/>
					</div>
				</div>
				<div className='text-xs text-gray-800 mb-6'>
					By continuing, you agree to our{' '}
					<a href='#' className='text-green-600 underline'>
						Privacy Policy
					</a>{' '}
					and{' '}
					<a href='#' className='text-green-600 underline'>
						Terms and Conditions
					</a>
					.
				</div>
				<div className='flex justify-between'>
					<button
						onClick={handlePrevStep}
						className='px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors text-gray-800'>
						Back
					</button>
					<button
						onClick={calculateQuote}
						className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'
						disabled={
							!formData.name ||
							!formData.email ||
							!formData.phone ||
							!formData.address
						}>
						See My Results
					</button>
				</div>
			</div>
		);
	};

	const renderStep4 = () => {
		if (!quoteResult) return null;

		return (
			<div className='text-gray-800'>
				<div className='text-center mb-8'>
					<h2 className='text-3xl font-bold text-green-600 mb-2'>
						Your Customized Lawn Plan
					</h2>
					<p className='text-xl text-gray-800'>
						Thank you for choosing Village Legacy!
					</p>
					<div className='mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold'>
						50% OFF Your First Service!
					</div>
				</div>

				<div className='bg-white shadow-lg rounded-lg overflow-hidden mb-8'>
					<div className='bg-green-600 text-white p-4'>
						<h3 className='text-xl font-bold'>Your Personalized Quote</h3>
					</div>
					<div className='p-6 space-y-4'>
						<div>
							<h4 className='font-medium text-gray-800'>
								Customer Information
							</h4>
							<p className='text-gray-800'>{quoteResult.customerName}</p>
							<p className='text-gray-800'>{quoteResult.customerEmail}</p>
							<p className='text-gray-800'>{quoteResult.customerPhone}</p>
							<p className='text-gray-800'>{quoteResult.customerAddress}</p>
						</div>

						<div className='border-t border-gray-200 pt-4'>
							<h4 className='font-medium text-gray-800'>Lawn Assessment</h4>
							<p className='text-gray-800'>
								Current Condition: {quoteResult.lawnCondition}
							</p>
							<div>
								<p className='font-medium mt-2 text-gray-800'>
									Issues to Address:
								</p>
								{quoteResult.selectedProblems.length > 0 ? (
									<ul className='list-disc pl-5 text-gray-800'>
										{quoteResult.selectedProblems.map((problem, index) => (
											<li key={index} className='text-gray-800'>
												{problem}
											</li>
										))}
									</ul>
								) : (
									<p className='text-gray-800'>No specific issues selected</p>
								)}
							</div>
						</div>

						<div className='border-t border-gray-200 pt-4'>
							<h4 className='font-medium text-gray-800'>Pricing</h4>
							<div className='flex justify-between mt-2'>
								<span className='text-gray-800'>Regular Price:</span>
								<span className='text-gray-800'>${quoteResult.totalPrice}</span>
							</div>
							<div className='flex justify-between text-green-600 font-medium'>
								<span>First Service Discount (50%):</span>
								<span>-${quoteResult.discount}</span>
							</div>
							<div className='flex justify-between font-bold text-lg mt-2 pt-2 border-t border-gray-200'>
								<span className='text-gray-800'>Your Price:</span>
								<span className='text-gray-800'>${quoteResult.finalPrice}</span>
							</div>
						</div>
					</div>
				</div>

				<div className='text-center space-y-4'>
					<button className='w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold'>
						Schedule Your First Service
					</button>
					<button
						onClick={() => {
							setStep(1);
							setFormData({
								lawnCondition: '',
								lawnProblems: [],
								address: '',
								name: '',
								email: '',
								phone: '',
							});
							setQuoteResult(null);
						}}
						className='w-full py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors'>
						Start Over
					</button>
				</div>
			</div>
		);
	};

	const renderCurrentStep = () => {
		switch (step) {
			case 1:
				return renderStep1();
			case 2:
				return renderStep2();
			case 3:
				return renderStep3();
			case 4:
				return renderStep4();
			default:
				return null;
		}
	};

	return (
		<section id='quote' className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-10'>
					<h1 className='text-4xl font-bold text-gray-800'>
						Get Your Instant Quote
					</h1>
					<p className='mt-4 text-xl text-gray-800'>
						Sign up Today and Get 50% Off Your First Service
					</p>
				</div>

				<div className='bg-white rounded-xl shadow-xl p-8'>
					{renderStepIndicator()}
					{renderCurrentStep()}
				</div>

				<div className='mt-12'>
					<h3 className='text-2xl font-bold text-center mb-6 text-gray-800'>
						What your neighbors say
					</h3>
					<div className='grid md:grid-cols-3 gap-6'>
						<div className='bg-white p-6 rounded-lg shadow'>
							<div className='text-green-600 text-4xl mb-2'>"</div>
							<p className='italic mb-4 text-gray-800'>
								My lawn is much greener and more lush than before. I love how
								they leave feedback and tips on how to improve my lawn!
							</p>
							<p className='font-bold text-gray-800'>- Justin P.</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow'>
							<div className='text-green-600 text-4xl mb-2'>"</div>
							<p className='italic mb-4 text-gray-800'>
								My grass looks great since we did the aeration and seeding! I
								gave your number to my neighbor.
							</p>
							<p className='font-bold text-gray-800'>- Leslie L.</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow'>
							<div className='text-green-600 text-4xl mb-2'>"</div>
							<p className='italic mb-4 text-gray-800'>
								The curbside appeal of my home has dramatically improved which
								increases the value of my home, should I ever consider selling.
							</p>
							<p className='font-bold text-gray-800'>- Glen M.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
