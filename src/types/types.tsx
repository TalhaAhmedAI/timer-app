export type timeState = {
    ms: number,
    s: number,
    m: number,
    h: number
}

export type timerPropsTypes = {
    time: timeState
}

export type timerButtonsPropsTypes = {
    start: () => void,
    stop: () => void,
    resume: () => void,
    reset: () => void,
    status: number
}