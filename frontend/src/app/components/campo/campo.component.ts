import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jt-campo',
  templateUrl: './campo.component.html',
  styleUrl: './campo.component.scss'
})
export class CampoComponent {
  @Input() etiqueta: string = ""
  @Input() tipodecampo: string = "text"
  @Input() ayuda: string = ""
  @Input() textoCampo: string = ""
  @Input() id: string = ""
}
