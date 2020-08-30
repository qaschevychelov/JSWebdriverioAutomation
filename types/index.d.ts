declare module WebdriverIO {
    // здесь можно добавлять кастомные команды к браузеру
    interface Browser {

    }

    // здесь можно добавлять кастомные команды к элементам
    interface Element {
        waitForInvisible: () => boolean
    }
}