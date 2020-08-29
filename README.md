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

[link]: https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi
