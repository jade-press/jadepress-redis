'use strict'

let config = require('../config')
,port = config.port
,host = 'http://127.0.0.1:' + port
,tests = [
	{
		title: 'work-flow'
		,waitForElementVisible: '#wrapper'
		,elementPresent: 'h1'
		,containsText: ['.btn-link', 'forget password']
		,elementCount: ['h1', 1]
		,url: 'http://127.0.0.1:' + port + '/login'
	}
]
//disable
exports['@disabled'] = 0

tests.forEach(function(test) {

	exports[test.title] = function(browser) {

		browser
			.url(test.url)
			.assert.elementPresent(test.elementPresent)
			.assert.containsText(test.containsText[0], test.containsText[1])
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
	
})

