import express from "express";

const add = express()
const PORT =3000;
add.get("/ziyad",function(req , res){
    res.send("hello word.")
});

add.listen(PORT, ()=>{   
console.log(`server 3000 ${PORT}`);

}
)