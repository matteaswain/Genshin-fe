import { Guid } from 'guid-typescript'; 
import { Weapon } from './weapon.cl';
import { Element } from './element.cl';
 
export class Character {
 
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