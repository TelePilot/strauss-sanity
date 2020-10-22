export default {
	title: 'Header',
	name: 'header',
	type: 'document',
	fields: [
		{
			title: 'Logo',
			name: 'logo',
			type: 'image',
		},
		{
			title: 'Menu',
			name: 'menu',
			type: 'array',
			of: [{ type: 'string' }],
		},
	],
}
