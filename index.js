const axios = require("axios");
const converter = require("json-2-csv");
const fs = require("fs");

const players = ["faker", "deft", "showmaker"];
const id = [496, 473, 3704];

for (let i = 0; i < players.length; i++) {
  axios
    .get(
      `https://www.rotowire.com/esports/ajax/player-page-data.php?id=${id[i]}&game=2`
    )
    .then((res) => {
      converter.json2csv(res.data.gamelog.body, (err, csv) => {
        if (err) {
          throw err;
        }
        fs.writeFileSync(`${players[i]}.csv`, csv);
      });
    });
}
