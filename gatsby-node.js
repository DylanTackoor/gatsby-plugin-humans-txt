const humans = require(`humans-generator`)
const { promisify } = require(`util`)
const { writeFile } = require(`fs`)
const { join } = require(`path`)

exports.onPostBuild = async (api, pluginOptions) => {
	const filePath = join(`./public`, `humans.txt`)

	try {
		const humansTxt = await promisify(humans)(pluginOptions).join(`\n`)
		await promisify(writeFile)(filePath, humansTxt)
	} catch (error) {
		console.error(error)
		throw error
	}
}
