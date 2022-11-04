//acts like an interface or enum
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;


    constructor(name: string, description: string, image: string){
        this.description = description;
        this.imagePath = image;
        this.name = name;

    }
}