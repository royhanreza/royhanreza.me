import contentful, { type Asset, type EntryFieldTypes } from 'contentful'

export const contentfulClient = contentful.createClient({
	space: import.meta.env.CONTENTFUL_SPACE_ID,
	accessToken: import.meta.env.DEV
		? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
		: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
	host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com'
})

export interface Project {
	contentTypeId: 'project'
	fields: {
		title: EntryFieldTypes.Text
		description: EntryFieldTypes.Text
		slug: EntryFieldTypes.Text
		publishDate: EntryFieldTypes.Date
		cover: Asset
		content: EntryFieldTypes.RichText
		updatedDate: EntryFieldTypes.Date
	}
}
