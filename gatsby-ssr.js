const { createElement } = require(`React`)

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
	if (pluginOptions.metaTag !== false) {
		setHeadComponents([
			createElement(`link`, { rel: `author`, href: `/humans.txt` })
		])
	}
}
