import { Block, Field } from 'payload';

export function generateCheatsheet(): string {
	const example = {
		title: 'Example Landing Page - All Blocks Demo',
		slug: 'example-page-with-all-blocks',
		meta: {
			title: 'Example Page | All Blocks Demo | Site Name',
			description:
				'This is an example meta description for SEO purposes. Replace with your actual page description for better search engine visibility.',
			canonicalUrl: 'https://example.com/example-page-with-all-blocks',
		},
		noindex: false,
		blocks: [
			{
				blockType: 'hero',
				title: 'This is an Example Hero Section',
				description:
					'This text serves as a demonstration of the hero block layout. Replace with your actual content.',
				bullets: [
					{ text: 'Example benefit point one' },
					{ text: 'Example benefit point two' },
					{ text: 'Example benefit point three' },
					{ text: 'Example benefit point four' },
				],
				image: 1,
				primaryCta: {
					label: 'Example Button',
					link: '#',
				},
				secondaryCta: {
					label: 'Secondary Button',
					link: '#',
				},
			},
			{
				blockType: 'feauters',
				title: 'Example Features Section',
				description:
					'This area showcases the features block layout. Add your feature descriptions here.',
				features: [
					{
						title: 'Example Feature One',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'BarChart3',
					},
					{
						title: 'Example Feature Two',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'Zap',
					},
					{
						title: 'Example Feature Three',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'Link2',
					},
					{
						title: 'Example Feature Four',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'Shield',
					},
					{
						title: 'Example Feature Five',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'Brain',
					},
					{
						title: 'Example Feature Six',
						description: 'This is a sample feature description. Replace with your actual content.',
						icon: 'Users2',
					},
				],
			},
			{
				blockType: 'testimonials',
				title: 'Example Testimonials',
				description: 'This area demonstrates the testimonials block',
				testimonials: [
					{
						name: 'John Doe',
						role: 'Example Role, Example Company',
						avatar: 1,
						testimonial:
							'This is an example testimonial text. Replace with real customer feedback when ready.',
					},
					{
						name: 'Jane Smith',
						role: 'Example Role, Example Company',
						avatar: 1,
						testimonial:
							'This is an example testimonial text. Replace with real customer feedback when ready.',
					},
					{
						name: 'Bob Johnson',
						role: 'Example Role, Example Company',
						avatar: 1,
						testimonial:
							'This is an example testimonial text. Replace with real customer feedback when ready.',
					},
					{
						name: 'Alice Brown',
						role: 'Example Role, Example Company',
						avatar: 1,
						testimonial:
							'This is an example testimonial text. Replace with real customer feedback when ready.',
					},
				],
			},
			{
				blockType: 'pricing',
				title: 'Example Pricing Plans',
				description: 'This section demonstrates the pricing block layout',
				plans: [
					{
						name: 'Example Plan 1',
						price: 49,
						description: 'Sample plan description goes here',
						isPopular: false,
						buttonText: 'Example Button',
						buttonLink: '#',
						features: [
							{ feature: 'Example feature A' },
							{ feature: 'Example feature B' },
							{ feature: 'Example feature C' },
							{ feature: 'Example feature D' },
							{ feature: 'Example feature E' },
						],
					},
					{
						name: 'Example Plan 2',
						price: 99,
						description: 'Sample plan description goes here',
						isPopular: true,
						buttonText: 'Example Button',
						buttonLink: '#',
						features: [
							{ feature: 'Example feature A' },
							{ feature: 'Example feature B' },
							{ feature: 'Example feature C' },
							{ feature: 'Example feature D' },
							{ feature: 'Example feature E' },
							{ feature: 'Example feature F' },
							{ feature: 'Example feature G' },
						],
					},
					{
						name: 'Example Plan 3',
						price: 199,
						description: 'Sample plan description goes here',
						isPopular: false,
						buttonText: 'Example Button',
						buttonLink: '#',
						features: [
							{ feature: 'Example feature A' },
							{ feature: 'Example feature B' },
							{ feature: 'Example feature C' },
							{ feature: 'Example feature D' },
							{ feature: 'Example feature E' },
							{ feature: 'Example feature F' },
							{ feature: 'Example feature G' },
							{ feature: 'Example feature H' },
							{ feature: 'Example feature I' },
						],
					},
				],
			},
			{
				blockType: 'team',
				eyebrow: 'Example Team Section',
				title: 'Team Members Demo',
				description: 'This block demonstrates how team member profiles are displayed',
				members: [
					{
						name: 'Example Name 1',
						title: 'Example Title',
						bio: 'Sample biography text. Replace with actual team member information.',
						image: 1,
					},
					{
						name: 'Example Name 2',
						title: 'Example Title',
						bio: 'Sample biography text. Replace with actual team member information.',
						image: 1,
					},
					{
						name: 'Example Name 3',
						title: 'Example Title',
						bio: 'Sample biography text. Replace with actual team member information.',
						image: 1,
					},
					{
						name: 'Example Name 4',
						title: 'Example Title',
						bio: 'Sample biography text. Replace with actual team member information.',
						image: 1,
					},
				],
				joinButton: {
					label: 'Example Button',
					link: '#',
				},
			},
			{
				blockType: 'faq',
				title: 'Example FAQ Section',
				description: 'This area demonstrates the FAQ accordion block',
				defaultOpenIndex: 0,
				items: [
					{
						question: 'Example Question 1?',
						answer: 'This is an example answer. Replace with your actual FAQ content.',
					},
					{
						question: 'Example Question 2?',
						answer: 'This is an example answer. Replace with your actual FAQ content.',
					},
					{
						question: 'Example Question 3?',
						answer: 'This is an example answer. Replace with your actual FAQ content.',
					},
					{
						question: 'Example Question 4?',
						answer: 'This is an example answer. Replace with your actual FAQ content.',
					},
					{
						question: 'Example Question 5?',
						answer: 'This is an example answer. Replace with your actual FAQ content.',
					},
				],
			},
			{
				blockType: 'cta',
				title: 'Example Call to Action Section',
				description: 'This block demonstrates the CTA layout. Add your promotional content here.',
				button: 'Example Button',
				href: '#',
			},
			{
				blockType: 'contactSection',
				title: 'Example Contact Section',
				text: 'This area demonstrates the contact form block. Replace with your contact information.',
				form: 1,
			},
		],
	};
	return JSON.stringify(example);
}
