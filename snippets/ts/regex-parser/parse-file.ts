const fs = require("fs");

const i18nReg = /@i18n/gi;
const getI18nReg = /getI18nText/gi;

fs.readFile("sample_file.ts", function (err, data) {
  if (err) throw err;

  const arr = data.toString().replace(/\r\n/g, "\n").split("\n");

  for (let i of arr) {
    // CALL PATTERN MATCHER
    const line = getPattern(i);

    // DEBUG
    // console.log(line);
  }
});

const getPattern = (line) => {
  if (line.search(i18nReg) !== -1 || line.search(getI18nReg) !== -1) {
    console.log(line);
    return line;
  } else {
  }
};
