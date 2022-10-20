const returnSlidesToShow = (isLargerThan1400:boolean, isLargerThan700:boolean):number => {
    if ([isLargerThan1400, isLargerThan700].toString() == [true, true].toString()) {
        return 3
    }
    if ([isLargerThan1400, isLargerThan700].toString() == [false, true].toString()) {
        return 2
    }
    if ([isLargerThan1400, isLargerThan700].toString() == [false, false].toString()) {
        return 1
    }
    return 2
}

export {
    returnSlidesToShow
}