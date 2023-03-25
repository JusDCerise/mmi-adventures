var IUTnums = [8, 9, 10, 11, 12];
const MAX_KEYS = 3;
var gen_nums = [];

function in_array(array, el) {
  for (var i = 0; i < MAX_KEYS; i++) if (array[i] == el) return true;
  return false;
}

function get_rand(array) {
  var rand = array[Math.floor(Math.random() * 5)];
  if (!in_array(gen_nums, rand)) {
    gen_nums.push(rand);
    return rand;
  }
  return get_rand(array);
}

for (var i = 0; i < 3; i++) {
  keysNums.innerHTML += "<p>" + get_rand(IUTnums) + "</p>";
}
keysNums.innerHTML += "<p>13</p>";
const keyID = document.querySelector(".testKeyID");
const keysChilds = keysNums.querySelectorAll(":nth-child(n)");

keysChilds.forEach((keyChild) => {
  console.log(keyChild.textContent);
});

let indexKey = 0;
const keyTest = document.querySelector(".testKeyID");
nextKey.addEventListener("click", () => {
  const keysChildSuivant = keysChilds[indexKey++ % keysChilds.length];
  // keyTest.innerText = keysChildSuivant.textContent;
  fetch("./js/keys.json")
    .then((response) => response.json())
    .then((data) => {
      // Les données JSON sont maintenant converties en un objet JavaScript
      const idValue = data.keys[keysChildSuivant.textContent].id;
      const textValue = data.keys[keysChildSuivant.textContent].indiceText;
      console.log(idValue);
      console.log(textValue);
      // Manipuler les données ici...
      keyTest.innerText = textValue;
    });

  if (indexKey >= 9) {
    nextKey.disabled = true;
  }
});