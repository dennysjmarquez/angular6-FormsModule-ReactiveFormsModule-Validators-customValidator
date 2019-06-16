import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;

  usuario: any = {

    nombreCompleto: {

      nombre: 'Dennys',
      apellido: 'Marquez'

    },
    email: 'dennysjmarquez@gmail.com',
    // pasatiempos: ['Correr','Dormir','Comer']

  };

  constructor() {

    this.forma = new FormGroup({

      nombreCompleto: new FormGroup({

        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          this.validacionPersonalizada
        ])

      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
      ]),
      pasatiempos: new FormArray([
        new FormControl('Correr', [
          Validators.required
        ])
      ]),
      username: new FormControl('', [
        Validators.required
      ], [
        this.existeUsuario
      ]),
      password1: new FormControl('', [
        Validators.required
      ]),
      password2: new FormControl()

    });

    // Carga de los valores desde el Objeto usuario
    // this.forma.setValue(this.usuario);

    //Otra forma de agregar los validadores
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this)
    ]);

    // Escuchar los cambios del value de un (input)
    this.forma.get('nombreCompleto.nombre').valueChanges.subscribe( data => {

      console.log(data);

    });

    // Escuchar los cambios del estatus de un (input)
    this.forma.get('nombreCompleto.nombre').statusChanges.subscribe( data => {

      console.log(data);

    });


  }

  agregarPsatiempo(){

    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', [
        Validators.required
      ])
    );
  }

  validacionPersonalizada(control: FormControl): {[s:string]: boolean}{

    if(control.value == 'marquez'){
        return {
          noApellido: true
        }
    }

    return null;

  }

  noIgual(control: FormControl): {[s:string]: boolean}{

    if(control.value !== this.forma.controls['password1'].value){
      return {
        noIgual: true
      }
    }

    return null;

  }

  existeUsuario(control:FormControl): Promise<any> | Observable<any>{

    let promesa = new Promise((resolve, reject) =>{

      setTimeout(()=>{

        if(control.value == "escorpicon"){

          resolve({existe: true})

        }else{

          resolve(null);

        }

      }, 3000);

    });

    return promesa;

  }

  guardar() {

    console.log(this.forma.value);
    console.log(this.forma);

    // Resetea el formulario
    // this.forma.reset();

    // Resetea el formulario y carga valores
    // this.forma.reset(this.usuario);

    // Establece un valor a l campo
    // this.forma.controls['email'].setValue('ddddd@ddd.com');

  }

}
