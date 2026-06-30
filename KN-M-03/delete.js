show tables
db.likes.drop()
db.follows.drop()
db.posts.drop()
db.users.drop()
show tables

db.posts.find({_id: ObjectId('6a2810ac25fc4694ad4a8c0c')})
db.posts.deleteOne({_id: ObjectId('6a2810ac25fc4694ad4a8c0c')})
db.posts.find({_id: ObjectId('6a2810ac25fc4694ad4a8c0c')})

db.follows.find({$or: [
    {
        _id: ObjectId('6a281bc025fc4694ad4a8c19')
    },
    {
        _id: ObjectId('6a281b9b25fc4694ad4a8c18')
    }]})
db.follows.deleteMany({$or: [
    {
        _id: ObjectId('6a281bc025fc4694ad4a8c19')
    },
    {
        _id: ObjectId('6a281b9b25fc4694ad4a8c18')
    }]})
db.follows.find()