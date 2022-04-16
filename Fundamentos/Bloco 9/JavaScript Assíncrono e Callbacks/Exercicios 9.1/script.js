//EXERCISE 1

const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C

//A ordem de finalização das linhas comentadas é: A , B , C .

////////////////////////////////////////////////////////////////////////////

//EXERCISE 2

const planetDistanceFromSun2 = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars2 = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus2 = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter2 = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun2(mars2)); // A
setTimeout(() => console.log(planetDistanceFromSun2(venus2)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun2(jupiter2)), 2000); // C

//A ordem de finalização das linhas comentadas é: A , C , B .

////////////////////////////////////////////////////////////////////////////

//EXERCISE 3

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

////////////////////////////////////////////////////////////////////////////

//EXERCISE 4

const messageDelay1 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature1 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature1 = () => {
  const temperature = getMarsTemperature1();
  setTimeout(
    () => console.log(`Mars temperature is: ${temperature} degree Celsius`),
    messageDelay1()
  );
};

sendMarsTemperature1(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
////////////////////////////////////////////////////////////////////////////

//EXERCISE 5

const messageDelay2 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature2 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit2 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit2 = (temperature) =>
  console.log(`It is currently ${toFahrenheit2(temperature)}ºF at Mars`);

const greet2 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature2 = (callback) => {
  const temperature = getMarsTemperature2();
  setTimeout(() => callback(temperature), messageDelay2());
};

sendMarsTemperature2(temperatureInFahrenheit2); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature2(greet2); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

////////////////////////////////////////////////////////////////////////////

//EXERCISE 6

const messageDelay3 = () => Math.floor(Math.random() * 5000);

const getMarsTemperature3 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit3 = (degreeCelsius) => (degreeCelsius * 9 / 5 )+ 32;

const temperatureInFahrenheit3 = (temperature) =>
  console.log(`It is currently ${toFahrenheit3(temperature)}ºF at Mars`);

const greet3 = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature3 = (callback1, callback2) => {
  const currentTemperature = getMarsTemperature3();
  const porcetagem = Math.random() <= 0.6;
  setTimeout(() => {
    if (porcetagem) {
      return callback1(currentTemperature);
    } else {
      callback2("Robot is busy");
    }
  }, messageDelay3());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(temperatureInFahrenheit3, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature3(greet3, handleError);

////////////////////////////////////////////////////////////////////////////

// EXERCISE 7 , EXERCISE 8 , EXERCISE 9 => 
// está no arquivo uppercase.test e no pokemons.test, respectivamente.

////////////////////////////////////////////////////////////////////////////

// EXERCISE 10

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// beforeEach => antes de cada teste,mas quando está dentro do describe, só vai ser execultado na frente dos que estão dentro do bloco 'describe';
// afterEach => depois de todos os testes,mas quando está dentro do describe, só vai ser execultados após de todos que estão dentro do bloco 'describe' ;

// A ORDEM SERIA: =>

beforeEach(() => console.log('1 - beforeEach'));
test('', () => console.log('1 - test'));
afterEach(() => console.log('1 - afterEach'));
beforeEach(() => console.log('1 - beforeEach'));
beforeEach(() => console.log('2 - beforeEach'));
test('', () => console.log('2 - test'));
afterEach(() => console.log('2 - afterEach'));
afterEach(() => console.log('1 - afterEach'));