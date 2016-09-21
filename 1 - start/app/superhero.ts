export class SuperHero{
    constructor(public name: string, public power: string, public secretIdentity: string){
        SuperHero.NumberOfHeroes++;
    }
    static NumberOfHeroes = 0;

    saveVictim(name: string):string{
        let temp = this.name + " has saved " + name;
        console.log(temp);
        return temp;
    }
}