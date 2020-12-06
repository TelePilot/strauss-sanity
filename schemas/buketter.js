export default {
	title: 'Buketter',
	name: 'buketter',
	type: 'document',
	fields: [
        {
			title: 'Hero Image',
			name: 'heroImage',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
			},
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true, // <-- Defaults to false
            }
        },
        {
			title: 'Description',
			name: 'description',
			type: 'text',
		},

            {
                title: 'Image2',
                name: 'image2',
                type: 'image',
                options: {
                    hotspot: true, // <-- Defaults to false
                },
        },
        {
            title: 'Description2',
            name: 'description2',
            type: 'text',
        },
	],
}