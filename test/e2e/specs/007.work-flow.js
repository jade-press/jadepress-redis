'use strict'

let config = require('../config')
,port = config.port
,host = 'http://127.0.0.1:' + port
,test = {
	title: 'work-flow'
	,waitForElementVisible: '#wrapper'
	,elementPresent: 'h1'
	,elementCount: ['h1', 1]
	,url: 'http://127.0.0.1:' + port + '/login'
}

//disable
exports['@disabled'] = 0


exports[test.title] = function(browser) {

	browser
		.url(test.url)
		.assert.elementPresent(test.elementPresent)
		.assert.elementCount(test.elementCount[0], test.elementCount[1])

		.setValue('input[type=email]', 'admin@example.com')
		.clearValue('input[type=password]')
		.setValue('input[type=password]', '123456a')
		.click('button[type="submit"]')
		.pause(1000)
		.assert.urlContains('reset')
		
		//end
		browser.end()
}


