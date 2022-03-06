const resultChallenge=60;

if (resultChallenge >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
}
else if (resultChallenge < 80 && resultChallenge === 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log ("Você foi reprovada(o)");
}
