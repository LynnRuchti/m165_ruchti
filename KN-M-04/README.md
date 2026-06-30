# KN-M-04
## A
Find matches in posts **($match)**:<br>
```mongosh
db.posts.aggregate([{
    $match:     {
        creation_date: {$gte: ISODate('2026-06-01T22:00:00.000+00:00')},
        creation_date: {$lte: ISODate('2026-06-30T22:00:00.000+00:00')}
    }
}])
```
<img width="1347" height="1098" alt="image" src="https://github.com/user-attachments/assets/89f8fe65-8b4e-48b5-a0fe-bed370a27001" /><br><br>
[**Based on:**](https://github.com/LynnRuchti/m165_ruchti/blob/main/KN-M-03/README.md#:~:text=Find%20in%20posts%20by%20creation_date%20(filter%20Date%2C%20%24and)%3A)

Find matches in posts **($match, $project, $sort)**:<br>
```mongosh
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
```
<img width="1190" height="671" alt="image" src="https://github.com/user-attachments/assets/0016cd74-0ca9-4cd8-b837-1a3e3182c202" /><br>
<img width="1309" height="1345" alt="image" src="https://github.com/user-attachments/assets/ffa39d52-1669-4cb1-b105-e8934d37bfbb" /><br><br>

Group in posts **($group by id_creator, $sum)**:<br>
```mongosh
db.posts.aggregate([{
    $group: {
        _id :"$id_creator",
        amount_of_created_posts: {$sum:1}
    }
}])
```
<img width="933" height="671" alt="image" src="https://github.com/user-attachments/assets/f6145ce4-7e7e-497a-8c1f-fe6a78ade2e3" /><br><br><br>


## B
Join users in posts **($match, $lookup, $project, $sort, $regex)**:<br>
```mongosh
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
```
<img width="1313" height="1154" alt="image" src="https://github.com/user-attachments/assets/a64ebcb4-d6db-4326-a463-396cf4d5fbb6" /><br>
<img width="1308" height="828" alt="image" src="https://github.com/user-attachments/assets/e5614b7f-548a-4d04-b2fa-de511fcf8ebf" /><br>
<img width="1391" height="1020" alt="image" src="https://github.com/user-attachments/assets/414e1ede-be74-41cb-810c-8b7713f5f418" /><br><br><br>


## C
Find comments in posts **($unwind, $match, $project)**:<br>
```mongosh
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
```
<img width="1331" height="1386" alt="image" src="https://github.com/user-attachments/assets/42c83b4b-e867-45ba-8c71-a76a37b59e6a" /><br><br><br>
