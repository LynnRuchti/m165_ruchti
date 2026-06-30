use postforum
db.createUser({
    user: "user1",
    pwd: "root1234",
    roles: [
        { role: "read", db: "postforum" }
    ]})

db.users.find()
db.users.updateOne({"user_name": "WillyFlower"},
    {$set:{ 
        "user_name": "WillyFlower33"
    }})


use admin
db.createUser({
    user: "user2",
    pwd: "root1234",
    roles: [
        { role: "readWrite", db: "postforum" }
    ]})

use postforum
db.users.find()
db.users.updateOne({"user_name": "WillyFlower"},
    {$set:{ 
        "user_name": "WillyFlower33"
    }})
db.users.find({"user_name": "WillyFlower33"})