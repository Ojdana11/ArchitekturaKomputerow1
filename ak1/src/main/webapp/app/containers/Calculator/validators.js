const isBinValid = (value) => {
    return value && value.split('').every((sign) => {
        return sign.search(/[0-1]/g) === 0
    });
};

const isOctValid = (value) => {
    return value && value.split('').every((sign) => {
        return sign.search(/[0-7]/g) === 0
    });
};

const isHexValid = (value) => {
    return value && value.split('').every((sign) => {
        return sign.search(/[0-9A-Fa-f]/g) === 0
    });
};
export  {isBinValid, isOctValid, isHexValid}