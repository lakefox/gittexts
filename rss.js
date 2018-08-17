let Parser = require("rss-parser");
let parser = new Parser();
const fs = require("fs");
const mail = require("./mail.js");
const megaquery = require('megaquery');

let main = async (user, i) => {
  let feed = await parser.parseURL(user.feed);
  feed.items.forEach(async (d) => {
    let currentDate = d.pubDate;
    if (s.users[i].sent.indexOf(currentDate) == -1) {
      s.users[i].sent.push(currentDate);
      let r = await megaquery.api({
        key: "users",
        value: JSON.stringify(s),
        overwrite: "true"
      });
      console.log(`Sending New Feed to: ${user.address}`);
      mail(user.address, " "+d.title);
    }
  });
};

let s;

function start() {
  setInterval(async () => {
    console.log("Refreshing");
    s = await megaquery.api({
      q: "users"
    });
    s = JSON.parse(s);
    s.users.forEach(main);
  }, 60000);
}

module.exports = start;
