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
      const number = Math.floor((Math.random() * (dragon.strength - 15 + 1)+ 15));
      return number
  }


  const danoWarrior = (warrior)=>{
    const number2 = Math.floor((Math.random() *  (warrior.strength * warrior.weaponDmg +1 )) + warrior.strength );
    return number2
}

const danoMage=(mage)=>{
    const mana = mage.mana
    const turnStats = {
        manaGasta: 0,
        mensagem: "Não possui mana suficiente"
    }
if(mana > 15){
    const mageDamage = Math.floor((Math.random() *  (mage.intelligence * 2 - mage.intelligence +1 )) + mage.intelligence);
    turnStats.manaGasta =15;
    turnStats.mensagem = mageDamage;
    return turnStats;

}
return turnStats;

}

const gameActions = {
    warriorTurn: (danoWarrior) => {
      const warriorDamage = danoWarrior(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (danoMage) => {
      const mageTurnStats = danoMage(mage);
      const mageDamage = mageTurnStats.mensagem;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaGasta;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (danoDragon) => {
      const dragonDamage = danoDragon(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(danoWarrior);
  gameActions.mageTurn(danoMage);
  gameActions.dragonTurn(danoDragon);
  console.log(gameActions.turnResults());
