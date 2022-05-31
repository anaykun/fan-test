const nomorOne = (arr) => {
  let match = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && arr[j] !== 0) {
          arr[i] = 0;
          arr[j] = 0;
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

const specialTest = (input) => {
  const arrInput = input.split(" ");
  const regex = /[$&+,:;=@#|'<>.-^()%!]/;
  let count = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i].match(regex)) {
      count++;
    }
  }

  return count;
};

const a = "Saat mengecat tembok, Agung dib_antu oleh Raihan.";
const b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(specialTest(a));
console.log(specialTest(b));
console.log(specialTest(c));
