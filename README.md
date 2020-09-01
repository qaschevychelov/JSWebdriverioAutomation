# WebDriver.io Sample Project for JS Automation
## The 1st try of building automation with JS

# Prerequisites (Windows)
* install [Node.js][link] (i use v12.18.3 LTS)
* `cd` to the project folder

## 1 Approach: local run
* run tests both
    1. via `npm install` and then `npm test`
    2. or via `npm cit` - this command will fetch project dependencies and run tests

 ## 2 Approach: The simplest way of test running with docker-compose on Selenoid
 1. `cd` in the folder `selenoid`
 2. in cmd run `docker-compose up -d` - docker will download and deploy Selenoid (back & front)
 3. in cmd run `docker pull selenoid/vnc_chrome:<VERSION>` - we need to manually download `vnc`-versions of browsers
    1. `VERSION` - you cand set this version in a file `selenoid/config/browsers.json` and use in the command above
 4. in order to run tests use the following command in cmd `$env:SELENOID='true' ; npm test`
 5. if you need to kill Selenoid run the following command `docker-compose down`

 
 ## 3 Approach: In Order to run in parallel with Selenoid (on Windows)
 1. `cd` in the folder `selenoid`
 2. in cmd run `selenoid.exe selenoid --args "-limit 10" start --vnc`
 3. in cmd run `selenoid.exe selenoid-ui start`
 4. in order to run tests use the following command in cmd `$env:SELENOID='true' ; npm test`


## 4 Approach: The Selenium Grid Approach:
1. open `wdio.conf.js`
2. comment line `services:`
3. uncomment firefox capability `maxInstances: 5`, `browserName: 'firefox'`, `acceptInsecureCerts: true`
4. start the file `start_selenium_grid_hub.bat`
5. start the file `start_10_chrome_node.bat`
6. start the file `start_10_firefox_node.bat`
7. in `wdio.conf.js` set `hostname: '<IP of grid hub>'`
8. in `wdio.conf.js` set `port: 4444`
9. in `wdio.conf.js` set `path: '/wd/hub'`

# Allure Report
1. install allure CLI globally via `npm i -g allure-commandline`
2. run your test with one of the approaches above
3. in the project folder run `npm run report` - it will create `allure-results` folder
4. in the project folder run `allure serve` in order to deploy Allure Report 

[link]: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
