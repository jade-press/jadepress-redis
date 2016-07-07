# jadepress-redis

[![Build Status](https://travis-ci.org/jade-press/jadepress-redis.svg?branch=master)](https://travis-ci.org/jade-press/jadepress-redis)

jade-press plugin which add qrcode api `/qr?text={text}`

## use
```javascript
//in jade-press config.js
exports.setting = {
    //...
    plugins: {
        'jadepress-redis': '*'
    }

    //this is default option if not set
    ,redisOptions: {
        host: '127.0.0.1'
        ,port: 6379
    }
    //...
}
```

then install

```bash
gulp install
```

## test
```bash

#makesure you can run jade-press

git clone https://github.com/jade-press/jadepress-redis.git
cd jadepress-redis
npm install node-gyp -g
npm install mocha -g
npm install bower -g
npm install
bower install
npm i jadepress-theme-pi
mkdir node_modules/jadepress-redis
cp -r plugins node_modules/jadepress-redis/

npm run test

```

