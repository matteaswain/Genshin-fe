import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Character } from 'src/app/models/character.cl';
import { Element } from 'src/app/models/element.cl';
import { Weapon } from 'src/app/models/weapon.cl';
import { CharacterService } from 'src/app/services/character.service';
import { ElementService } from 'src/app/services/element.service';
import { WeaponService } from 'src/app/services/weapon.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  characters: Character[] = [];
  elements: Element[] = [];
  weapons: Weapon[] = [];

  constructor(
    private charsvc : CharacterService,
    private elmsvc : ElementService,
    private wepsvc : WeaponService
    ) { }

  ngOnInit(): void {

    this.charsvc.list().subscribe
    (
      res => {console.debug(res);
      this.characters = res;},
      err => {console.error(err);}
    );

     this.elmsvc.list().subscribe
     (
       res => {console.debug(res);
      this.elements = res;},
      err => {console.error(err);}
     );
     
     this.wepsvc.list().subscribe
     (
       res => {console.debug(res);
      this.weapons = res;},
      err => {console.error(err);}
     );
  }
}
