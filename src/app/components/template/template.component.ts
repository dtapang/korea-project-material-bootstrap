import { Component, Injectable, OnInit} from '@angular/core';
import { CanActivate } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  text: string;

  constructor () { } 

  ngOnInit(): void { }
  
} 
