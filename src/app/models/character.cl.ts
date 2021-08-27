import { Guid } from 'guid-typescript'; 
 
export class Weapon {
 
    public id: Guid;
    name : string = "";
    region : string = "";
    location : string = "";
    ranking : number = 0;
    weaponId : number = 0; 
    elementId : number = 0; 
    
    weapon : Weapon | null = null;
    element : Element | null = null; 
 
    constructor(){
        this.id = Guid.create();
    }
 
}