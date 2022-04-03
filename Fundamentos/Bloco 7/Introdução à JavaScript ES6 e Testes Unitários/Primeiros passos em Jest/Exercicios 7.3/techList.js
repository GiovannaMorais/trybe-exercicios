function techList(tech, name) {
    if (tech.length === 0) {
      return 'Vazio!';
    }
    let tecnologies = [];
    tech.sort();
    for (let index = 0; index < tech.length; index += 1) {
      tecnologies.push({
        tech: tech[index],
        name,
      });
    } return tecnologies;
  } console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

  module.exports =techList