
'use strict'
const redisStore = require('koa-redis')
,session = require('koa-generic-session')

module.exports = function(ext) {

	let middlewares = ext.middlewares
	// ,oneYear = 1000 * 60 * 60 * 24 * 365
	// ,setting = ext.setting

	// //session
	// var redisSession = session({
	// 	key: setting.sessionName
	// 	,rolling: true
	// 	,store: redisStore(setting.redisOptions || {
	// 		host: '127.0.0.1'
	// 		,port: 6379
	// 	})
	// })

	// for(var i = 0, len = middlewares.length;i < len;i ++) {
	// 	var mw = middlewares[i]
	// 	console.log(mw.toSrting())
	// 	if(mw.toSrting().indexOf('session') > -1) middlewares.splice(i, 1, redisSession)
	// }

	let extend = {
		middlewares: middlewares
	}

	return extend

////end
}
