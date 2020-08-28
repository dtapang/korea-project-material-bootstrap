import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { Resource } from 'app/models/Resource';

@Pipe({
  name: 'searchFilter'
})
@Injectable()
export class SearchFilterPipe implements PipeTransform {

  transform(resources: Resource[], searchText: string): Resource[] {
    if (!resources) {
      return [];
    }else if (!searchText) {
      return resources;
    }
    searchText = searchText.toLocaleLowerCase();

    return resources.filter(resource => {
      if(resource.name.toLocaleLowerCase().includes(searchText) || resource.code.toLocaleLowerCase().includes(searchText)){
        return resource;
      }
    });
  }

}
