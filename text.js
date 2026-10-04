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
  }
}
// 12ēèêëé3456ūûüúù7îìïíī8òöõôōœóø90àæáãâåäāßdfghjklzxçvbñm
