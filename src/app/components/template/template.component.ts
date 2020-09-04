import { Component, Injectable, OnInit} from '@angular/core';
import { CanActivate } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Template } from '../../models/Template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})


export class TemplateComponent {

  public templates: Template[] = [];
  field: any;

  hasFormula(field: Template) {
    if(field.field){
      return true;
    }
    return false;
  }

  text: string;

  constructor () { } 

  ngOnInit(): void { }
  
  
  addField() {
    this.field.push(new Template());
  }
  
} 
