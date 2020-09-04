import { Component, Injectable, OnInit} from '@angular/core';
import { CanActivate } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Template } from '../../models/Template';
import {Formula} from '../../models/Formula';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  public templates: Template[] = [];
  field: any;

  public tenmplates: Template[] = [];
  text: string;
  formulas: Formula[];

  public fields: any[] = [{
    id:1,
    fieldname: ''

  }];

  constructor () { }

  hasFormula(field: Template) {
    if(field.field){
      return true;
    }
    return false;
  }

  ngOnInit(): void { }
  
  
  addField() {
    this.fields.push({
      id: this.fields.length + 1,
      fieldname:''
    });
  }
  
} 
