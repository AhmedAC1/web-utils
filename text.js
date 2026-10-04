const webutilstext = {
  reverse(text) {
    return text.split("").reverse().join("");
  },
  joinWith(text, char) {
    return text.split("").join(char);
  },
  call(text, text2) {
    return text + " reaches: " + text2;
  },
  reverseOrder(text) {
    return text.split(" ").reverse().join(" ");
  },
  arrayMethOn(text, arrayMeth) {
    return eval('text.split("").' + arrayMeth + '().join("")');
  },
  async typewriter(text, element, s) {
    for (let char = 0; char < text.length; char++) {
      element.textContent += text[char];
      await new Promise(c => setTimeout(c, s / 100));
    }
  }
}
// 12ēèêëé3456ūûüúù7îìïíī8òöõôōœóø90àæáãâåäāßdfghjklzxçvbñm
