import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected= new EventEmitter<string>();

  constructor(private app:AppComponent) { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature)
  }
}