declare module WebdriverIO {
    // здесь можно добавлять кастомные команды к браузеру
    interface Browser {

    }

    // здесь можно добавлять кастомные команды к элементам
    interface Element {
        waitForInvisible: () => boolean
    }
}
declare const phone2: WebdriverIO.BrowserObject
declare const phone1: WebdriverIO.BrowserObject