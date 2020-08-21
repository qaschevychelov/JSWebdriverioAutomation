/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        browser.maximizeWindow()
        return browser.url(path)
    }
}
export {page}