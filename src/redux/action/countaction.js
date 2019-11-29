export const add = () => {
    return {
        type: "plus"
    }
}

export const minus = () => {
    return {
        type: "minus"
    }
}

export const ganti = (data) => {
    return {
        type: 'ganti',
        payload: data
    }
}