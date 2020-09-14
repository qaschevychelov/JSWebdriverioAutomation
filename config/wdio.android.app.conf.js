require("ts-node").register({files: true});
const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './test/specs/android/**/*.ts'
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = {
    phone1: {
        capabilities: {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceReadyTimeout': 300,
            'appium:appWaitDuration': 200000,
            'appium:androidDeviceReadyTimeout': 300,
            'appium:androidInstallTimeout': 900000,
            'appium:uiautomator2ServerLaunchTimeout': 900000,
            'appium:uiautomator2ServerInstallTimeout': 900000,
            'appium:deviceName': 'Samsung J7',
            'appium:platformVersion': '7.1.1',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/app-debug.apk'),
            'appium:noReset': true,
            'appium:newCommandTimeout': 240    
        }
    },
    phone2: {
        capabilities: {
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceReadyTimeout': 300,
            'appium:appWaitDuration': 200000,
            'appium:androidDeviceReadyTimeout': 300,
            'appium:androidInstallTimeout': 900000,
            'appium:uiautomator2ServerLaunchTimeout': 900000,
            'appium:uiautomator2ServerInstallTimeout': 900000,
            'appium:deviceName': 'Samsung J8',
            'appium:platformVersion': '9.0',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            'appium:app': join(process.cwd(), './apps/app-debug.apk'),
            'appium:noReset': true,
            'appium:newCommandTimeout': 240,    
        }
    }    
};

exports.config = config;