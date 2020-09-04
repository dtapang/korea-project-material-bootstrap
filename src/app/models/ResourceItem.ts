import { Resource } from "./Resource";

export class ResourceItem{

    constructor(public resource: Resource, public selected: boolean = false){}
  }