function rot13(str) { // LBH QVQ VG!
  var decoded = [];
  {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];
    const _str = str.split('');
    _str.map((l) => {
      if (alphabet.indexOf(l) === -1) {
        decoded.push(l);
      } else {
        const index = (alphabet.indexOf(l) + 13) >= 26
        ? (alphabet.indexOf(l) + 13) - 26 : (alphabet.indexOf(l) + 13);
        decoded.push(alphabet[index]);
      }
    })
  }

  return decoded.join('');
}

rot13("SERR PBQR PNZC")