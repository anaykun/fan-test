const nomorOne = (part) => {
  let match = 0;
  for (let i = 0; i < part.length; i++) {
    if (part[i] !== 0) {
      for (let j = i + 1; j < part.length; j++) {
        if (part[i] === part[j] && part[j] !== 0) {
          part[i] = 0;
          part[j] = 0;
          match++;
        }
      }
    }
  }
  return match;
};

const contoh = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
const soalA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const soalB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const soalC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log("soal contoh", nomorOne(contoh));
console.log("soal a", nomorOne(soalA));
console.log("soal b", nomorOne(soalB));
console.log("soal c", nomorOne(soalC));

const nomorTwo = (input) => {
  const partInput = input.split(" ");
  const rest = /[$&+,:;=@#|'<>.-^()%!]/;
  let count = 0;
  for (let i = 0; i < partInput.length; i++) {
    if (partInput[i].match(rest)) {
      count++;
    }
  }

  return count;
};

const a = "Saat mengecat tembok, Agung dib_antu oleh Raihan.";
const b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(nomorTwo(a));
console.log(nomorTwo(b));
console.log(nomorTwo(c));
