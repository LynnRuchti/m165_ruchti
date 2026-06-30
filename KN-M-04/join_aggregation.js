db.posts.aggregate([{
    $match:{
        title: { $regex: "oven"}
    }},
    {$lookup: {
       from: "users",
       localField: "id_creator",
       foreignField: "user_id",
       as: "creator"
     }},
    {$project : {
        id_creator:0,        
        creation_date:0,
        "comments.id_creator":0,
        "comments._id":0,
        "comments.id_response_to":0,
        "comments.creation_date":0,
        "creator._id": 0,
        "creator.password":0,
        "creator.email":0,
        "creator.user_id":0
    }},
    {$sort: { title: -1 }
}])