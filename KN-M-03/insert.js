db.users.insertOne({"email": "willyflower@email.com", "password": "flower123", "user_name": "WillyFlower", "user_id" : 1});
db.users.insertMany([{"email": "luftkenner@email.com", "password": "luft123", "user_name": "IchKenneLuft", "user_id": 2},
                    {"email": "breadlover@email.com", "password": "bread123", "user_name": "BreadLover", "user_id": 3}]);

db.posts.insertOne({"id_creator": 1, "post_id": 1, "title": "Planting Flowers", "description": "I'm planting some Cosmos: While many species of cosmos are native to Mexico, some varieties are native to the Western United States. All types of cosmos have delicate petals and lacy leaves. While their flowers look fragile, they make excellent cut flowers.", "creation_date": new ISODate('2026-02-11T22:00:00.000+00:00')});
db.posts.insertMany([{"id_creator": 3, "post_id": 2, "title": "New oven!!", "description": "I bought a used oven from my neighbor.", "creation_date": new ISODate('2026-06-04T22:00:00.000+00:00'), "comments": [
        {"_id": new ObjectId(), "id_creator": 2, "comment": "Cool! Hopefully you can use it soon. :)", "creation_date": new ISODate('2026-06-04T22:00:00.000+00:00'), "comment_id": 1},
        {"_id": new ObjectId(), "id_creator": 3, "id_response_to": 1, "comment": "Yes I'm planning on backing again soon.", "creation_date": new ISODate('2026-06-05T22:00:00.000+00:00'), "comment_id":2}
    ]},
    {"id_creator": 3, "post_id":3, "title": "New ovens first bread!!", "description": "The new oven is making my life so much easier", "creation_date":new ISODate('2026-06-09T22:00:00.000+00:00'), "comments": [
        {"_id": new ObjectId(), "id_creator": 2, "comment": "(: Nice!! :)", "creation_date": new ISODate('2026-06-09T22:00:00.000+00:00'), "comment_id":3},
    ]}
]);

db.likes.insertOne({"id_user": 2, "id_contend": 2, "content_definition": 'p'});
db.likes.insertMany([{"id_user": 2, "id_contend": 2, "content_definition": 'c'},
                {"id_user": 3, "id_contend": 1, "content_definition": 'p'},
                {"id_user": 3, "id_contend": 1, "content_definition": 'c'}]);


db.follows.insertOne({"id_follower": 2, "id_user": 1});
db.follows.insertMany([{"id_follower": 2, "id_user": 3},
                    {"id_follower": 1, "id_user": 3}]);
                    
