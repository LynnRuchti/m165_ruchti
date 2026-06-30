db.posts.aggregate([{
    $unwind: "$comments"},
    {$match:{
        "comments.comment": { $regex: ":\\)"}
    }},
    {$project : {
        _id:0,
        post_id:0,
        description:0,
        id_creator:0,        
        creation_date:0,
        "comments.id_creator":0,
        "comments._id":0,
        "comments.id_response_to":0,
        "comments.creation_date":0,
        "comments.comment_id":0,
    }}])