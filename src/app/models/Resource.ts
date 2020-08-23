export class  Resource {

    constructor(
      public name: string,
      public code: string,
      public children?: Resource[],
      public id?: number
      ) {  }

      public getId(): number{
        return this.id;
      }
    
}