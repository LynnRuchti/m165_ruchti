# KN-M-03

## A
Insert to users:<br>
```mongosh
db.users.insertOne({"email": "willyflower@email.com", "password": "flower123", "user_name": "WillyFlower"})
db.users.insertMany([{"email": "luftkenner@email.com", "password": "luft123", "user_name": "IchKenneLuft"},
                    {"email": "breadlover@email.com", "password": "bread123", "user_name": "BreadLover"}])
```
<img width="1881" height="249" alt="image" src="https://github.com/user-attachments/assets/8a0de6d3-bb9f-4b90-bda8-ce677555ece2" /><br>
<img width="1731" height="441" alt="image" src="https://github.com/user-attachments/assets/4f05dd1f-ecc6-40ec-956a-20e0ae92b784" /><br><br>

Insert to posts:<br>
```mongosh
db.posts.insertOne({"id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "title": "Planting Flowers", "description": "I'm planting some Cosmos: While many species of cosmos are native to Mexico, some varieties are native to the Western United States. All types of cosmos have delicate petals and lacy leaves. While their flowers look fragile, they make excellent cut flowers.", "creation_date": new Date('2026-02-11T22:00:00.000+00:00')})
db.posts.insertMany([{"id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "title": "New oven!!", "description": "I bought a used oven from my neighbor.", "creation_date": new Date('2026-06-04T22:00:00.000+00:00'), "comments": [
        {"_id": new ObjectId(), "id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "comment": "Cool! Hopefully you can use it soon. :)", "creation_date": new Date('2026-06-04T22:00:00.000+00:00')},
        {"_id": new ObjectId(), "id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_response_to": null, "comment": "Yes I'm planning on backing again soon.", "creation_date": new Date('2026-06-05T22:00:00.000+00:00')}
    ]},
    {"id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "title": "New ovens first bread!!", "description": "The new oven is making my life so much easier", "creation_date": new Date('2026-06-09T22:00:00.000+00:00'), "comments": [
         {"_id": new ObjectId(), "id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "comment": "(: Nice!! :)", "creation_date": new Date('2026-06-09T22:00:00.000+00:00')},
    ]}
])
```
<img width="2129" height="318" alt="image" src="https://github.com/user-attachments/assets/ac5de872-4568-435b-9d01-b9e53de6c6ae" /><br>
<img width="2115" height="752" alt="image" src="https://github.com/user-attachments/assets/6d95d6c2-83d1-4105-b9d4-22c37d01000c" /><br><br>

Insert to likes:<br>
```mongosh
db.likes.insertOne({"id_user": ObjectId('6a2805b625fc4694ad4a8c08'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c12'), "content_definition": 'p'})
db.likes.insertMany([{"id_user": ObjectId('6a2805b625fc4694ad4a8c08'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c10'), "content_definition": 'c'},
                {"id_user": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c12'), "content_definition": 'p'},
                {"id_user": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c11'), "content_definition": 'c'}])
```
<img width="2118" height="267" alt="image" src="https://github.com/user-attachments/assets/74b58bd9-c10b-4a30-923a-586f55399795" /><br>
<img width="2105" height="549" alt="image" src="https://github.com/user-attachments/assets/f5d1906f-cd40-4724-a8c8-6ecd550e3763" /><br><br>

Insert to follows:<br>
```mongosh
db.follows.insertOne({"id_follower": ObjectId('6a2805b625fc4694ad4a8c08'), "id_user": ObjectId('6a28061b25fc4694ad4a8c0a')})
db.follows.insertMany([{"id_follower": ObjectId('6a28061b25fc4694ad4a8c09'), "id_user": ObjectId('6a28061b25fc4694ad4a8c0a')},
                    {"id_follower": ObjectId('6a2805b625fc4694ad4a8c08'), "id_user": ObjectId('6a28061b25fc4694ad4a8c09')}])
```
<img width="2121" height="252" alt="image" src="https://github.com/user-attachments/assets/6bb130f8-1058-4f1b-95bd-10b547a81323" /><br>
<img width="2105" height="437" alt="image" src="https://github.com/user-attachments/assets/20235f85-2542-4175-87e4-12e901f75169" /><br><br>

## C
Find in posts by title containing "oven" **($regex, projection)**:<br>
```mongosh
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
```
<img width="1108" height="1250" alt="image" src="https://github.com/user-attachments/assets/9662180c-9008-46e0-bc18-369f53c24b4d" /><br>
<img width="1208" height="483" alt="image" src="https://github.com/user-attachments/assets/d501650e-e83a-497f-8d89-2ed0e76eb786" /><br><br>

Find in posts by creation_date **(filter Date, $and)**:<br>
```mongosh
db.posts.find({$and:[
    {
        creation_date: {$gte: ISODate('2026-06-01T22:00:00.000+00:00')}
    },
    {
        creation_date: {$lte: ISODate('2026-06-30T22:00:00.000+00:00')}
    },
]})
```
<img width="1719" height="1385" alt="image" src="https://github.com/user-attachments/assets/37af228c-5801-41d9-97e6-97a1de55b1c1" /><br>
<img width="1523" height="770" alt="image" src="https://github.com/user-attachments/assets/07775d88-799c-4eab-8806-e789c4e8c6c3" /><br><br>


Find in likes by content_definition  **(filter, projection)**:<br>
```mongosh
db.likes.find(
    {
        content_definition:"c"
    },
    {
        _id:0
    }
)
```
<img width="1741" height="867" alt="image" src="https://github.com/user-attachments/assets/939c21e2-c021-49cf-875d-4aa6bf21e09c" /><br><br>


Find in users by email  **($regex)**:<br>
```mongosh
db.users.find({$or:[
    {
        email: {$regex:"flower"}
    },
    {
        email: {$regex:"bread"}
    }
]})
```
<img width="1230" height="958" alt="image" src="https://github.com/user-attachments/assets/339f998b-4a7e-437d-88a2-09e716174efb" /><br><br>


Find all in follows:<br>
```mongosh
db.follows.find()
```
<img width="1111" height="767" alt="image" src="https://github.com/user-attachments/assets/f8549645-5282-45a8-bde6-b8a2efc84105" /><br><br>
