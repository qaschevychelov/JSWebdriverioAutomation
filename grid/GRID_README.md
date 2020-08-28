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