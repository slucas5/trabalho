import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements AfterViewInit, OnInit{
  @Input() title: string = '';
  @Input() body: string = '';

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>(); 

  @ViewChild('truncator', { static: true }) truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true }) bodyText!: ElementRef<HTMLElement>;

  valor = ""
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
      $.get('http://localhost:3000/tudo', (resultado) => {
      this.valor = JSON.stringify(resultado);
      console.log(this.valor)
    });
  }

  ngAfterViewInit() {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }
}
