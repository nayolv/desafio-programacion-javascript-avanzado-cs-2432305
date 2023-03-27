// Escribir una función que determine si dos objetos son iguales:
function sonIguales(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    for (let i = 0; i < obj1.length; i++) {
      if (typeof obj1[i] == "object" && typeof obj2[i] == "object") {
        return sonIguales(obj1[i], obj2[i]);
      }

      if (obj1[i] != obj2[i]) {
        return false;
      }
    }

    return true;
  }

  if (typeof obj1 === "object" && typeof obj2 === "object") {
    for (const prop in obj1) {
      if (!sonIguales(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return true;
  }

  return obj1 == obj2;
}

// Todos los console logs deben retornar true:
console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(sonIguales([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(
  sonIguales(
    [{ a: [100, 200], b: { x: "ABC" } }],
    [{ a: [100, 200], b: { x: "ABC" } }]
  )
);
