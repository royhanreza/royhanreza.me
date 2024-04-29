import { contentfulClient, type Project } from '../lib/contentful'

export async function getAllProjects() {
	return await contentfulClient.getEntries<Project>({
		content_type: 'project'
	})
}
