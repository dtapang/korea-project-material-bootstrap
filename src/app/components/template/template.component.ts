import { Component, Injectable} from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './app.template.html',
  styleUrls: ['./app.template.css']
})
export class TemplateComponent {

  constructor () { }

  ngOnInit(): void { }
  
}
