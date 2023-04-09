import { makeAutoObservable, runInAction, toJS } from "mobx"
import { CountryInfo, getCountryByName } from "../../api/apiService";


export class Store {
    search: string
    hints: CountryInfo[]
    selected: CountryInfo | undefined
    constructor(){
        this.search = "";
        this.hints = [];
        this.selected = undefined
        makeAutoObservable(this);
    }

    async onSearch(search:string){
        const result = await getCountryByName(search);
        runInAction(()=> this.hints = result) ;
    }

    onSelect(select:string){
        runInAction(()=> {
            this.search = select;
            this.selected = this.hints.find((el => el.name === select))
            this.hints = [];
        }) ;
    }
}