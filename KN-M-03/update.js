db.likes.find(
    {
        _id: ObjectId('6a2819c025fc4694ad4a8c17')
    })
db.likes.updateOne(
    {
        _id: ObjectId('6a2819c025fc4694ad4a8c17')
    },
    {
        $set: {id_contend: ObjectId('6a2811a725fc4694ad4a8c10')}
    }
)


db.posts.find(
        {
        $or: [
            {
                title: {$regex:"Planting"}
            },
            {
                title: {$regex:"first"}
            }
        ]
    }
)
db.posts.updateMany(
    {
        $or: [
            {
                title: {$regex:"Planting"}
            },
            {
                title: {$regex:"first"}
            }
        ]
    },
    { 
        $currentDate: {
            creation_date: true
        },
        $set: {
            title:"Hello World!"
        }
    }
)
db.posts.find({title:"Hello World!"})