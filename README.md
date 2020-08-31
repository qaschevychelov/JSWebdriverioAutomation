# WebDriver.io Sample Project for JS Automation
## The 1st try of building automation with JS

1. install [Node.js][link] (i use v12.18.3 LTS)
2. `cd` to the project folder
3. run tests both
    1. via `npm install` and then `npm test`
    2. or via `npm cit` - this command will fetch project dependencies and run tests

 # In Order to use Chrome and Firefox simultaneously you need to do the following:
1. open `wdio.conf.js`
2. comment line `services:`
3. uncomment firefox capability `maxInstances: 5`, `browserName: 'firefox'`, `acceptInsecureCerts: true`
4. start the file `start_selenium_grid_hub.bat`
5. start the file `start_10_chrome_node.bat`
6. start the file `start_10_firefox_node.bat`
7. in `wdio.conf.js` set `hostname: '<IP of grid hub>'`
8. in `wdio.conf.js` set `port: 4444`
9. in `wdio.conf.js` set `path: '/wd/hub'`

 # In Order to run in parallel with Selenoid (on Windows)
 1. `cd` in the folder `selenoid`
 2. in cmd run `selenoid.exe selenoid --args "-limit 10" start --vnc`
 3. in cmd run `selenoid.exe selenoid-ui start`
 4. in order to run tests use the following command in cmd `$env:SELENOID='true' ; npm test`

 ### docker-compose.yml doesn't work on Windows currently. Work in progress on it

[link]: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
