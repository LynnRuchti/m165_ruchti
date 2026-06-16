db.users.insertOne({"email": "willyflower@email.com", "password": "flower123", "user_name": "WillyFlower"});
db.users.insertMany([{"email": "luftkenner@email.com", "password": "luft123", "user_name": "IchKenneLuft"},
                    {"email": "breadlover@email.com", "password": "bread123", "user_name": "BreadLover"}]);

db.posts.insertOne({"id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "title": "Planting Flowers", "description": "I'm planting some Cosmos: While many species of cosmos are native to Mexico, some varieties are native to the Western United States. All types of cosmos have delicate petals and lacy leaves. While their flowers look fragile, they make excellent cut flowers.", "creation_date": new ISODate('2026-02-11T22:00:00.000+00:00')});
db.posts.insertMany([{"id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "title": "New oven!!", "description": "I bought a used oven from my neighbor.", "creation_date": new ISODate('2026-06-04T22:00:00.000+00:00'), "comments": [
        {"_id": new ObjectId(), "id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "comment": "Cool! Hopefully you can use it soon. :)", "creation_date": new ISODate('2026-06-04T22:00:00.000+00:00')},
        {"_id": new ObjectId(), "id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_response_to": null, "comment": "Yes I'm planning on backing again soon.", "creation_date": new ISODate('2026-06-05T22:00:00.000+00:00')}
    ]},
    {"id_creator": ObjectId('6a28061b25fc4694ad4a8c0a'), "title": "New ovens first bread!!", "description": "The new oven is making my life so much easier", "creation_date":new ISODate('2026-06-09T22:00:00.000+00:00'), "comments": [
        {"_id": new ObjectId(), "id_creator": ObjectId('6a2805b625fc4694ad4a8c08'), "comment": "(: Nice!! :)", "creation_date": new ISODate('2026-06-09T22:00:00.000+00:00')},
    ]}
]);

db.likes.insertOne({"id_user": ObjectId('6a2805b625fc4694ad4a8c08'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c12'), "content_definition": 'p'});
db.likes.insertMany([{"id_user": ObjectId('6a2805b625fc4694ad4a8c08'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c10'), "content_definition": 'c'},
                {"id_user": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c12'), "content_definition": 'p'},
                {"id_user": ObjectId('6a28061b25fc4694ad4a8c0a'), "id_contend": ObjectId('6a2811a725fc4694ad4a8c11'), "content_definition": 'c'}]);


db.follows.insertOne({"id_follower": ObjectId('6a2805b625fc4694ad4a8c08'), "id_user": ObjectId('6a28061b25fc4694ad4a8c09')});
db.follows.insertMany([{"id_follower": ObjectId('6a2805b625fc4694ad4a8c08'), "id_user": ObjectId('6a28061b25fc4694ad4a8c0a')},
                    {"id_follower": ObjectId('6a28061b25fc4694ad4a8c09'), "id_user": ObjectId('6a28061b25fc4694ad4a8c0a')}]);
                    
