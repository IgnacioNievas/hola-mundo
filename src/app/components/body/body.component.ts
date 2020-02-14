import { Component } from '@angular/core';
@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent{

    texto :any ={
autor:'Aristoteles',
mensaje:'La amistad es un alma que habita en dos cuerpos; un corazón que habita en dos almas.'
    }
    mostrar=true;
    frase:string[]=['El saber es la parte principal de la felicidad','-El conocimiento empieza en el asombro.','-El único conocimiento verdadero es saber que no sabes nada','-El amigo debe ser como el dinero; antes de necesitarlo, es necesario saber su valor','-Para encontrarte a ti mismo, piensa por ti mismo'];
mostrar1=true;
};
