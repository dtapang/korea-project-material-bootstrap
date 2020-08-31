import { Component, Injectable, OnInit} from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor () { }

  ngOnInit(): void { }
  
} 
