export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/laasya-profile.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DoJMGdnl.js",app:"_app/immutable/entry/app.NUUnX7jH.js",imports:["_app/immutable/entry/start.DoJMGdnl.js","_app/immutable/chunks/DdxZ2QEI.js","_app/immutable/chunks/B9KDnH5_.js","_app/immutable/chunks/BEKbuCpL.js","_app/immutable/chunks/B6Md4e3Q.js","_app/immutable/entry/app.NUUnX7jH.js","_app/immutable/chunks/B9KDnH5_.js","_app/immutable/chunks/Burq3eiQ.js","_app/immutable/chunks/B9UwLnOP.js","_app/immutable/chunks/B6Md4e3Q.js","_app/immutable/chunks/D8X2VQXV.js","_app/immutable/chunks/BJjRuV8f.js","_app/immutable/chunks/B2JLYjYv.js","_app/immutable/chunks/BEKbuCpL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/teaching",
				pattern: /^\/teaching\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
