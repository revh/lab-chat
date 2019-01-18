import pkg from './package.json';

import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import image from 'rollup-plugin-img';
// babel
import babel from 'rollup-plugin-babel';

// peer deps
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'components/index.js',
		output: [
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			peerDepsExternal(),
			image({
				output: `dist/`, // default the root
				extensions: /\.(png|jpg|jpeg|gif|svg)$/, // support png|jpg|jpeg|gif|svg, and it's alse the default value
				limit: 8192,  // default 8192(8k)
				exclude: 'node_modules/**'
			}),
			resolve(), // so Rollup can find `ms`
			babel({ exclude: 'node_modules/**' }),
			commonjs()
		]
	}
];
