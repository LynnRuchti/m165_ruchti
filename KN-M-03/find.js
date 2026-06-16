db.posts.find({$and:[
    {
        creation_date: {$gte: ISODate('2026-06-01T22:00:00.000+00:00')}
    },
    {
        creation_date: {$lte: ISODate('2026-06-30T22:00:00.000+00:00')}
    },
]})

db.posts.find(
    {
        title: { $regex: "oven"}
    },
    {
        id_creator:0,
        creation_date:0,
        "comments.id_creator":0,
        "comments._id":0,
        "comments.id_response_to":0,
        "comments.creation_date":0
    }
)

db.likes.find(
    {
        content_definition:"c"
    },
    {
        _id:0
    }
)


db.users.find({$or:[
    {
        email: {$regex:"flower"}
    },
    {
        email: {$regex:"bread"}
    }
]})

db.follows.find()