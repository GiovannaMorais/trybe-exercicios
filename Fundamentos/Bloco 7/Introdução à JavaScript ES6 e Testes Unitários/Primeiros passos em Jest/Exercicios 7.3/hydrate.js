const hydrate = (string) =>{
    const separa = string.split('');
    let coposAgua = 0;
    for (let index = 0; index < separa.length; index+=1) {
        const element = parseInt(separa[index]);
        if(element){
            coposAgua += element
        }
     }
    if(coposAgua > 1){
        return `${coposAgua} copos de água`;
    }
    return `1 copo de água`;
 
   } 
module.exports = hydrate