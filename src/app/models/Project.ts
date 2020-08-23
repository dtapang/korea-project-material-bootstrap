export class  Project {

    constructor(
      public name: string,
      public code: string,
      public children?: Project[],
      public id?: number
      ) {  }

      public getId(): number{
        return this.id;
      }
    
}