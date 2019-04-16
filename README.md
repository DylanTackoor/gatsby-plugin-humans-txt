# gatsby-plugin-humans-txt

> Create `humans.txt` for your Gatsby site.

## Overview

Generates an `/humans.txt` file following the [humanstxt.org standard](http://humanstxt.org/Standard.html).

## Install

```shell
npm i gatsby-plugin-humans-txt
```

or

```shell
yarn add gatsby-plugin-humans-txt
```

## How to use

Add the plugin to your `gatsby-config.js`:

```javascript
plugins: [{
	`gatsby-plugin-netlify-cms`
}]
```

## Options

Here is the plugin with example values for all options (note that no option is
required):

```javascript
plugins: [
	{
		resolve: `gatsby-plugin-humans-txt`,
		options: {
			team: [
				{
					Developer: `Dylan Tackoor`,
					GitHub: `dylantackoor`,
					Twitter: `@dylantackoor`
				}
			],
			thanks: [`Gatsby`, `Node`],
			site: {
				Standards: `JavaScript`,
				Components: `humans-generator`,
				Softwares: `Visual Studio Code`
			},
			note: `Made in Miami.`
		}
	}
]
```

## Support

For help with integrating Netlify CMS with Gatsby, check out the community
[Gitter](https://gitter.im/netlify/netlifycms).
