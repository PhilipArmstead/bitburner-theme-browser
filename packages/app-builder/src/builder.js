const { generateEntry } = require('./bundler/entry')
const { appWrapper } = require('./bundler/wrapper')

/**
 * @param {String} bundleFilename
 * @param {String} stylesheetName
 * @param {String} id
 * @param {String} version
 * @returns {{apply: String, generateBundle({}, {}): void, name: String, enforce: String}}
 */
module.exports = (bundleFilename, stylesheetName, id, version, appEntry = () => '', onExitCode = '') => {
	return {
		apply: 'build',
		enforce: 'post',
		name: 'combine-outputs',
		generateBundle (opts, bundle) {
			const {
				[stylesheetName]: { source: rawCss },
				[bundleFilename]: component,
			} = bundle

			component.code = `
${generateEntry(id, version, appEntry, onExitCode)}
${'\n'.repeat(50)}
${appWrapper(component.code, rawCss)}
`.trim()

			// remove from final bundle
			delete bundle[stylesheetName]
		},
	}
}