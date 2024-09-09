export class Login {
    correo:string = ""
    password:string=""
    recordarme:boolean=true

    constructor(Correo: string,Password: string, Recordame:boolean){
        this.correo=Correo
        this.password=Password
        this.recordarme=Recordame
    }
}