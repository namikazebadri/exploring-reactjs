import { makeAutoObservable } from "mobx"

class CounterStore {
    counter = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.counter += 1
    }

    decrease() {
        this.counter -= 1
    }

    reset() {
        this.counter = 0
    }
}

export const counterStore = new CounterStore();