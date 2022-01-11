/**
 * @param {String} id
 * @param {String} version
 * @returns {String}
 */
export const generateEntry = (id, version) => `
export async function main(ns) {
	const doc = globalThis['document']
	const id = '${id}'
	globalThis[\`${id}-version\`] = '${version}'

	doc.getElementById(id)?.remove()
	doc.body.insertAdjacentHTML('beforeend', \`<section id='\${id}'></section>\`)

	doc.getElementById(\`\${id}-css\`)?.remove()
	doc.head.insertAdjacentHTML('beforeend', \`<style id='\${id}-css'>\${bundledCss}</style>\`)

	const currentTheme = ns.ui.getTheme()
	const previewTheme = ({ detail }) => {
		try {
			ns.ui.setTheme(JSON.parse(detail))
		} catch (e) {
			console.log(e)
		}
	}
	const resetTheme = () => ns.ui.setTheme(currentTheme)

	doc.body.addEventListener('theme:preview', previewTheme)

	mount()

	ns.atExit(() => {
		doc.getElementById(id)?.remove()
		doc.body.removeEventListener('theme:preview', previewTheme)
	})

	while (doc.getElementById(id)) {
		await	ns.asleep(2000)
	}
} 
`
