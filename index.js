const axios = require("axios");
const converter = require("json-2-csv");
const fs = require("fs");

const player = "faker";
const url =
  "https://www.rotowire.com/esports/ajax/player-page-data.php?id=496&game=2";

axios.get(`${url}`).then((res) => {
  converter.json2csv(res.data.gamelog.body, (err, csv) => {
    if (err) {
      throw err;
    }
    fs.writeFileSync(`${player}.csv`, csv);
  });
});
