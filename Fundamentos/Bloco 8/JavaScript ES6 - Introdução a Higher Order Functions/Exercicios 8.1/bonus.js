const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


  const danoDragon = (dragon)=>{
      const number = Math.floor((Math.random() * (dragon.strength - 15 + 1)));
      return number
  }


  const danoWarrior = (warrior)=>{
    const number2 = Math.floor((Math.random() *  (warrior.strength * warrior.weaponDmg +1 )) + warrior.strength );
    return number2
}

const obj=(mage)=>{
    const mana = mage.mana
    const turnStats = {
        manaGasta: 0,
        mensagem: "Não possui mana suficiente"
    }
if(mana > 15){
    const number3 = Math.floor((Math.random() *  (mage.intelligence * 2 - mage.intelligence +1 )) + mage.intelligence);
    turnStats.manaGasta =15;
    turnStats.mensagem = number3;
    return turnStats;

}
return turnStats;

}


