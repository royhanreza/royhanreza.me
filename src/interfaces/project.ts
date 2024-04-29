import type { Asset, EntryFieldTypes } from 'contentful'

export interface IProject {
	fields: {
		title: EntryFieldTypes.Text
		description: EntryFieldTypes.Text
		slug: EntryFieldTypes.Text
		publishDate: EntryFieldTypes.Date
		cover: Asset
		content: EntryFieldTypes.RichText
	}
}
