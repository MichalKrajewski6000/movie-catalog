import { makeAutoObservable } from "mobx";

class MovieStore {
    isLoading = true;
    constructor() {
        makeAutoObservable(this);
    }

    loadData() {
        
    }
}

export default new MovieStore();