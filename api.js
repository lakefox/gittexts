var apijs = {
// Create User
  addUser: {
    client:{
      feed: "https://github.com/lakefox.private.atom?token=",
      address: "6603515674@txt.att.net"
    },
    server: {
      "res": (async (data) => {
        var s = await megaquery.api({
          q: "users"
        });
        s = JSON.parse(s);
        data.last = "";
        let taken = false;
        let index;
        s.users.forEach((user, i) => {
          if (user.address == data.address) {
            taken = true;
            index = i
          }
        })
        if (!taken) {
          s.users.push(data);
        } else {
          s.users[index] = data;
        }

        var r = await megaquery.api({
          key: "users",
          value: JSON.stringify(s),
          overwrite: "true"
        });
        return r;
      })
    }
  },
// Remove User
  removeUser: {
    client:{
      address: "6603515674@txt.att.net"
    },
    server: {
      "res": (async (data) => {
        var s = await megaquery.api({
          q: "users"
        });
        s = JSON.parse(s);

        s.users.forEach((user, i) => {
          if (user.address == data.address) {
            s.users.splice(i, 1);
          }
        })

        var r = await megaquery.api({
          key: "users",
          value: JSON.stringify(s),
          overwrite: "true"
        });
        return r;
      })
    }
  }
}
