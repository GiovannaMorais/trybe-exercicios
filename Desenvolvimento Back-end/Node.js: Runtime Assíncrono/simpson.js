const fs = require('fs').promises;

async function readAll() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
    strings.forEach((string) => console.log(string));
};

async function getSimpsonId(id) {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const getSimpson = simpsons.find(( simpson ) =>Number(simpson.id) === id)

    if(!getSimpson){
        throw new Error('id não encontrado')
    }
    return getSimpson
}
async function simpsonChange() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const getSimpson = simpsons.filter(( simpson ) =>simpson.id !== '10' && simpson.id !== '6')

    await fs.writeFile('./simpsons.json', JSON.stringify(getSimpson))
    return getSimpson
}

async function createSimpsonsFamily() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    const familyIds = [1,2,3,4];
    const family = simpsons.filter(( simpson ) => familyIds.includes(Number(simpson.id)))

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family)); 
}

async function AddSimpsonsFamily() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);
    
    simpsonsFamily.push({ id:'8',name:'Nelson Muntz'})

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily)); 
}

async function RemoveSimpsonsFamily() {
    const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
    const simpsonsFamily = JSON.parse(fileContent);
    
    const simpsonsWithoutNelson =simpsonsFamily.filter(( simpson ) => simpson.id !== '8');

    const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{id:'15',name:'Maggie Simpson'}])

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)); 
}

async function main() {
await readAll();
const simpsons = await getSimpsonId(1)
console.log("simpsons", simpsons);
await simpsonChange()
await createSimpsonsFamily()
await AddSimpsonsFamily()
await RemoveSimpsonsFamily()

}
main();
