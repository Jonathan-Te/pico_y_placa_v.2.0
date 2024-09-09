export class SignUp {
    nombre: string = ""
    correo: string = ""
    password: string = ""
    confirmPassword: string = ""
    recuerdame: boolean = false

    constructor(nombre: string,
        correo: string,
        password: string,
        confirmPassword: string,
        recuerdame: boolean){
            this.nombre=nombre
            this.correo=correo
            this.password=password
            this.confirmPassword=confirmPassword
            this.recuerdame=this.recuerdame
        }
}