# KN-M-02 - Modellierung

## A
Thema: **Postingforum**<br>
<img width="1606" height="975" alt="image" src="https://github.com/user-attachments/assets/7f95895a-afc7-449e-97fd-59bfe1ee1b89" /><br>
user: ein User der Platform mit Email, Passwort und einem Username<br>
- user 1-mc post: ein User kann(muss nicht) einen/mehrere Post(s) erstellen
- user 1-mc comment: ein User kann(muss nicht) einen/mehrere Comment(s) erstellen
- user 1-mc like: ein User kann(muss nicht) einen/mehrere Beitrag(e)(Post/Comment) liken
- user 1-mc follow: ein User kann(muss nicht) einem/mehreren User(n) followen
- user 1-mc follow: ein User kann(muss nicht) einem/mehreren Follower(s) haben

post: ein von einem User erstellten Post mit Titel, Inhalt(Beschreibung), Erstellungsdatum<br>
- post mc-1 user: ein Post braucht immer **einen** Ersteller
- post 1-mc comment: ein Post kann(muss nicht) einen/mehrere Comment(s) haben
- post 1-mc like: ein Post kann(muss nicht) einen/mehrere Like(s) haben

comment: ein von einem User erstellten Comment mit Inhalt(Text) und Erstelldatum<br>
- comment md-1 user: ein Comment braucht immer **einen** Ersteller
- comment mc-1 post: ein Comment braucht immer **einen** darauf kommentierten Post
- comment mc-1 comment: ein Comment kann(muss nicht) eine Reaktion auf **einen** anderen sein
- comment 1-mc comment: ein Comment kann(muss nicht) eine/mehrere Reatkion(en) haben
- comment 1-mc like: ein Comment kann(muss nicht) einen/mehrere Like(s) haben

like **(m-m table)**: ein Like von einem User auf einen Content(Post/Comment)<br>
- like mc-1 user: ein Like muss **einen** User haben
- like mc-1 post: ein Like muss **einen** geliketen Content haben **(wenn id_content => p...)**
- like mc-1 comment: ein Like muss **einen** geliketen Content haben **(wenn id_content => c...)**

follow **(m-m table)**: ein Follow hat einen Follower der einem User followt<br>
- follow m-1 user: ein Follow baucht immer **einen** Follower, der einem User followt
- follow m-1 user: ein Follow baucht immer **einen** User, dem gefollowt wird


## B
<img width="1703" height="989" alt="image" src="https://github.com/user-attachments/assets/709cf86a-e139-4ed8-9004-9620ab247853" /><br>
**like in user**: da ein Like entweder ein Post oder ein Comment sein kann ist die Verschachtelung dort nur in user möglich, jedoch macht eine eigene Entität mit Referenzen für mein Konzept mehr Sinn, da ein Aufruf der Likes ein regelmässiger und zu grosser Aufwand wäre.<br>
**comment in post**: do man normaler weise Comments nur in Kombination mit dem Post aufruhft, ist dies eine gute Verschachtelung und da in diesem Fall Comments von verschiedenen Posts isoliert sind, ist eine Redundanz nicht tragisch.<br>

## C
```mongosh
use postforum
db.createCollection("users")
db.createCollection("posts")
db.createCollection("likes")
db.createCollection("follows")
show tables
```
<img width="1020" height="517" alt="image" src="https://github.com/user-attachments/assets/215f8d14-d49b-49e7-ba90-3f24d8c5340e" /><br>



Später gebrauchen:<br>
```mongosh
db.createCollection("users", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "email", "password", "user_name" ], 
         properties: {
            _id: {
               bsonType: "objectId"
            },
            email: {
               bsonType: "string"
            },
            password: {
               bsonType: "string"
            },
            user_name: {
               bsonType: "string"
            }
         }
      }
   }
})
```
