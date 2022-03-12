const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { keys } = require("mobx");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "noSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);
const db = mysql.createConnection({
  user: "wordpressuser",
  host: "localhost",
  password: "M0nthllly!",
  database: "madewithleftovers",
});

app.post("/createUser", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const dob = req.body.dob;

  console.log(email);
  
  db.query(
    "INSERT INTO usercred (first_name, last_name, email, password, dob) VALUES (?,?,?,?,?)",
    [firstname, lastname, email, password, dob],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});


app.post("/createRecepie", (req, res) => {
  const recepiName = req.body.recepiName;
  const recepieCat = req.body.recepieCat;
  const recepiePrepTime = req.body.recepiePrepTime;
  const recepieIng = req.body.recepieIng;
  const recepieLink = req.body.recepieLink;
  const doc = req.body.doc;
  const userid = req.body.recpUserId;

  db.query(
    "INSERT INTO userrecepie (recp_cat, user_id, recp_title, recp_ingredient, recp_prepTime, recp_link) VALUES (?,?,?,?,?,?)",
    [recepieCat, userid, recepiName, recepieIng, recepiePrepTime, recepieLink],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.get("/fav", (req, res) => {
  const userId = req.query.userId;
  console.log(userId);
  db.query(
    "SELECT * from userfav WHERE user_id=? AND is_fav=1",
    [userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});

app.post("/saveFav", (req, res) => {
  let isFav = req.body.isFav;
  const recpId = req.body.recpId;
  const userId = req.body.userId;
  console.log(recpId);
  if (isFav) isFav = 1;
  else isFav = 0;
  console.log(isFav);

  db.query(
    "SELECT * from userfav WHERE user_id=? and recp_id=?",
    [userId, recpId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else if (result.length != 0) {
        // console.log(result[0].user_id);
        if (
          (result[0].is_fav == 1 && isFav == 1) ||
          (result[0].is_fav == 0 && isFav == 0)
        ) {
        } else {
          console.log("at update query" + result[0].is_fav);
          console.log("at update query" + isFav);
          db.query(
            "UPDATE userfav SET is_Fav=? WHERE user_id=? and recp_id=?",
            [isFav, userId, recpId],
            (err, result) => {
              if (err) {
                console.log(err);
              } else if (result) {
                res.send(result);
              }
            }
          );
        }
      } else {
        db.query(
          "INSERT INTO userfav (user_id,recp_id,is_fav) VALUES (?,?,?)",
          [userId, recpId, isFav],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send("values inserted in fav column");
            }
          }
        );
      }
    }
  );
});

app.post("/searchRecepie", (req, res) => {
  const id = req.body.id;
  console.log(id);

  db.query("SELECT * FROM instructor WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else res.send({ loggedIn: false });
});

app.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.user = null;
    res.send({ loggedIn: false });
  }
});

app.get("/searchUser", (req, res) => {
  const loginEmail = req.query.loginEmail;
  const loginPassword = req.query.loginPassword;
  // console.log(loginPassword);
  db.query(
    "SELECT * FROM usercred WHERE email = ?",
    [loginEmail],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result[0].password);
        if (result == "") {
          console.log("User does not exist");
          res.send(false);
        } else if (loginPassword != result[0].password) {
          console.log("wrong username/password");
          res.send({ message: "wrong username/password" });
        } else {
          req.session.user = result;
          // console.log(req.session.user);
          res.send(result);
        }
      }
    }
  );
});


// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
