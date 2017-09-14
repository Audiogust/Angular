import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {

public titulo ="pagina principal Hoa"
public listado_ropa: Array<string>;

constructor(
    private _ropaService: RopaService,

){}
ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this.listado_ropa);
}

}
