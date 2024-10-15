import { Component } from "@angular/core";
import { DatastorageService } from "../shared/datastorage.recipe.service";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styles: `.open ul {
             display: Block;
             right: 0px;
        }
        .actived {
            color: #000;
        }
        `
})
export class HeaderComponent {
    constructor(private _Datastorage: DatastorageService){

    }
    onSaveData(){
        this._Datastorage.storedRecipe();
    }
    onFetchData(){
        this._Datastorage.FetchRecipe().subscribe();
    }
   
}