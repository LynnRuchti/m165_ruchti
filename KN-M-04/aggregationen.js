db.posts.aggregate([{
    $match:     {
        creation_date: {$gte: ISODate('2026-06-01T22:00:00.000+00:00')},
        creation_date: {$lte: ISODate('2026-06-30T22:00:00.000+00:00')}
    }
}])


db.posts.aggregate([{
    $match: {
        id_creator:3
    }},
    {$project : {        
        id_creator:0,
        creation_date:0,
        "comments.id_creator":0,
        "comments._id":0,
        "comments.id_response_to":0,
        "comments.creation_date":0
    }},
    {$sort: { title: -1 }
}])

db.posts.aggregate([{
    $group: {
        _id :"$id_creator",
        amount_of_created_posts: {$sum:1}
    }
}])