const express = require("express");
const con = require("./config");
const app = express();

app.use(express.json());

app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});


app.post("/", (req, resp) => {
  const data = req.body;
  con.query("INSERT INTO users SET?", data, (error, results, fields) => {
    if (error) throw error;
    resp.send(results)
  })
});

app.put("/:id",(req,resp)=>{
  const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
  con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
  data,(error,results,fields)=>{
    if(error) throw error;
    resp.send(results)
  })
});

app.delete("/:id", (req, res)=>{
    con.query("DELETE FROM users WHERE id =" + req.params.id, (err, results)=>{
        if(err) throw err;
        express.send(results);
    });
    // res.send(req.params.id)
})

app.listen("5000")