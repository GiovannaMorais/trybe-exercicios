function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      return reject(new Error("Informe apenas números"));
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error("Valor muito baixo"));
    }
    resolve(result);
  });
}

async function firstResolve() {
  try {
    const resolve = await doMath(10, 10, 10);
    console.log("firstResolve: ", resolve);
  } catch (err) {
    console.log('firstResolve: ',err.message);
  }
}
firstResolve();

async function secondResolve() {
    try {
      const resolve = await doMath(2, 2, a);
      console.log("secondResolve: ", resolve);
    } catch (err) {
    console.log('secondResolve: ',err.message);
    }
  }
  secondResolve();

  async function thirdResolve() {
    try {
    const resolve = await doMath(1, 1, 1);
    console.log("thirdResolve: ", resolve);
    } catch (err) {
    console.log('thirdResolve: ',err.message);
    }
  }
  thirdResolve();