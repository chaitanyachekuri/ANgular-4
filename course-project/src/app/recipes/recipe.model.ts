/**
 * Created by kchekuri on 5/4/2017.
 */
export class Recipe{
  public name: string;
  public description: string;
  public imagePath: string;


  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}


