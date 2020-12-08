// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import header from './header.js'
import buketter from './buketter.js'
import kontakt from './kontakt.js'
import begravning from './begravning.js'
import footer from './footer.js'
import hemsida from './hemsida.js'
import brollop from './brollop.js'
import socialMedia from './socialMedia.js'
import companyLocation from './companyLocation.js'
import companyOpenHours from './companyOpenHours.js'
import menuItem from './menuItem.js'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		header,
		kontakt,
		buketter,
		begravning,
		footer,
		hemsida,
		brollop,
		socialMedia,
		companyLocation,
		companyOpenHours,
		menuItem,
	]),
})
