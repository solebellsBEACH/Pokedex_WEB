
    const isActiveUtil = (filtersActiveds: string[], label: string) => {
        if (filtersActiveds.find(e => e == label) == undefined) {
            return false
        }
        else {
            return true;
        }
    }
export {
    isActiveUtil
}