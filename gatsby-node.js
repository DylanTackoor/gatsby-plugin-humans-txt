const humans = require(`humans-generator`)
const { promisify } = require(`util`)
const { writeFile } = require(`fs`)
const { join } = require(`path`)

exports.onPostBuild = async (api, pluginOptions) => {
	const filePath = join(`./public`, `humans.txt`)
	const humansConfig = { ...pluginOptions }

	delete humansConfig.plugins

	try {
		const humansTxt = await promisify(humans)(humansConfig)
		await promisify(writeFile)(filePath, humansTxt.join(`\n`))
	} catch (error) {
		console.error(error)
		throw error
	}
}
