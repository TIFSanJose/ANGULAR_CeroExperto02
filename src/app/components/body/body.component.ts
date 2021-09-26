import { Component } from '@angular/core';

@Component({
    selector   : 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar: boolean = false;

    frase: any = {
        texto: 'Un gran poder exige una gran responsabilidad',
        autor: 'Ben Parker'
    }

    personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octupus', 'Duende Verde'];
}