import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'titlecase'
})

export class TitleCasePipe implements PipeTransform{
 
 transform(value:string):string{
  let c=value.split(' ')
  var casedWords = c.map(word => word[0].toLocaleUpperCase() + word.slice(1))
    return casedWords.join(' ');
 }


}