export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-about.svg","favicon-home.svg","favicon-projects.svg","favicon-research.svg","favicon-teaching.svg","favicon.svg","images/laasya-profile.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CR5LoaBA.js",app:"_app/immutable/entry/app.SSY8Wep-.js",imports:["_app/immutable/entry/start.CR5LoaBA.js","_app/immutable/chunks/CZoIvccd.js","_app/immutable/chunks/n2jtjGuG.js","_app/immutable/chunks/mIK3sAtc.js","_app/immutable/chunks/CxUQLw8i.js","_app/immutable/entry/app.SSY8Wep-.js","_app/immutable/chunks/n2jtjGuG.js","_app/immutable/chunks/DO-me3gu.js","_app/immutable/chunks/ytohGqE2.js","_app/immutable/chunks/CxUQLw8i.js","_app/immutable/chunks/Bi-54unL.js","_app/immutable/chunks/DOZi4OKE.js","_app/immutable/chunks/DBY0rNHp.js","_app/immutable/chunks/mIK3sAtc.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
