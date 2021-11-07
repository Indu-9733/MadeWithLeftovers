const express = require("express");
const app = express();
const mysql = require("mysql");
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

const db = mysql.createConnection({
  user: "hbstudent",
  host: "localhost",
  password: "W33kllly!",
  database: "hb-01-one-to-one-uni",
});

app.post("/create", (req, res) => {
  const name = "games";
  const age = "22";
  const country = "email";
  const position = "2";
  //   const wage = req.body.wage;

  db.query(
    "INSERT INTO instructor (first_name, last_name, email, instructor_detail_id) VALUES (?,?,?,?)",
    [name, age, country, position],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

// app.get("/employees", (req, res) => {
//   db.query("SELECT * FROM employees", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

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
