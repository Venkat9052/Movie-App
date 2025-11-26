
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());

// temporary databases
const Userslist = [];
const {moviesList,Telugu_movies,Hindi_movies,English_movies}=require("./movies");
const liked = {};

server.get('/signup', (req, res) => {

    Userslist.push(req.query);
    console.log(Userslist);
    res.send(req.query.contact)
});

server.get('/login', (req, res) => {
    let found_user = false
    for (let user = 0; user < Userslist.length; user++) {
        if (Userslist[user].email == req.query.email) {
            found_user = true
            if (Userslist[user].password == req.query.password) {
                res.send({ login: true, id: Userslist[user].contact});
            }
            else {
                res.send({ login: false, alert: "password is incorrect" });
            }
        }

    }

    if (found_user == false) {
        res.send({ login: false, alert: "User Not found" });
    }


})

server.get('/movies',(req,res)=>{
    res.send(moviesList);

})

server.get('/liked',((req,res)=>{
    if(liked[req.query.id]== undefined){
    liked[req.query.id]=[]
    liked[req.query.id].push(req.query.movie);
    }
    else{
        liked[req.query.id].push(req.query.movie);
    }
    res.send(true)
}))

server.get('/liked_movies',((req,res)=>{
    console.log("in liked list")
    res.send(liked[req.query.id]);
    
}))


server.listen("9000", () => {
    console.log("server is hosting");
});

