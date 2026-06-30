# KN-M-05
## A
```mongosh
mongodb://admin:root1234@98.80.84.241:27017/?authSource=ruchti&readPreference=primary&ssl=false
```
<img width="877" height="176" alt="image" src="https://github.com/user-attachments/assets/21c1ae69-d1e1-4ab3-811d-80e2d1d4caa3" /><br><br>

Creat user1 **(read)**<br>
```mongosh
use postforum
db.createUser({
    user: "user1",
    pwd: "root1234",
    roles: [
        { role: "read", db: "postforum" }
    ]})
show users
```
<img width="1344" height="1344" alt="image" src="https://github.com/user-attachments/assets/10b2f697-2f32-4656-baa7-1b72e0fe8435" /><br>
Login with user1 **(postforum)**<br>
```mongosh
sudo mongosh --authenticationDatabase "postforum" -u user1 -p root1234
```
<img width="2310" height="368" alt="image" src="https://github.com/user-attachments/assets/7ac53497-0f4e-4eba-8f23-e08ce9c0f725" /><br>
Read with user1 **(postforum)**<br>
```mongosh
db.users.find()
```
<img width="1182" height="887" alt="image" src="https://github.com/user-attachments/assets/c60a87de-1062-44af-a298-5d77d9d9cb99" /><br>
Edit with user1 **(postforum)**<br>
```mongosh
db.users.updateOne({"user_name": "WillyFlower"},
    {$set:{ 
        "user_name": "WillyFlower33"
    }})
```
<img width="2321" height="309" alt="image" src="https://github.com/user-attachments/assets/a20d4d31-ef4e-4d96-b6f4-9ef8af637f10" /><br><br>

Creat user2 **(readWrite)**<br>
```mongosh
use admin
db.createUser({
    user: "user2",
    pwd: "root1234",
    roles: [
        { role: "readWrite", db: "postforum" }
    ]})
```
<img width="838" height="336" alt="image" src="https://github.com/user-attachments/assets/19b99e98-6aa4-4999-9c75-e38b5a4943b1" /><br>
Login with user2 **(admin)**<br>
```mongosh
sudo mongosh --authenticationDatabase "admin" -u user2 -p root1234
```
<img width="2304" height="415" alt="image" src="https://github.com/user-attachments/assets/41c6a507-3d04-43ca-bd04-0f07515b6b3d" /><br>
Read with user2 **(postforum)**<br>
```mongosh
db.users.find()
```
<img width="1114" height="897" alt="image" src="https://github.com/user-attachments/assets/5d572f56-f63d-4f9a-b27e-34731bf26952" /><br>
Edit with user1 **(postforum)**<br>
```mongosh
db.users.updateOne({"user_name": "WillyFlower"},
    {$set:{ 
        "user_name": "WillyFlower33"
    }})
db.users.find({"user_name": "WillyFlower33"})
```
<img width="1169" height="407" alt="image" src="https://github.com/user-attachments/assets/9ec58aa9-e804-483a-ac66-41bc2c9e2dad" /><br>
<img width="1116" height="380" alt="image" src="https://github.com/user-attachments/assets/922c84ce-3783-4566-8002-5a583065b90a" /><br><br><br>

## B
Backup Variante 1:<br>
<img width="2679" height="1142" alt="image" src="https://github.com/user-attachments/assets/01a2ab7e-3870-438d-b073-2f995b4376bb" /><br>
<img width="2333" height="186" alt="image" src="https://github.com/user-attachments/assets/95316dc5-79ec-4ea3-ba5e-78036cfb70c3" /><br>
<img width="458" height="100" alt="image" src="https://github.com/user-attachments/assets/591aa692-6435-48bb-9e1e-406f1bf7895d" /><br>
<img width="332" height="240" alt="image" src="https://github.com/user-attachments/assets/550eec88-98cf-4016-a492-cc8f13651dd2" /><br>
<img width="2188" height="1130" alt="image" src="https://github.com/user-attachments/assets/681ee990-2107-43a8-83b2-22f80f2086e9" /><br>
<img width="2641" height="862" alt="image" src="https://github.com/user-attachments/assets/091074a7-e67d-4e9f-9df8-5f572ade3903" /><br>
<img width="2286" height="617" alt="image" src="https://github.com/user-attachments/assets/d55011d4-9cff-4e13-bef2-8d7766fb7338" /><br>


Backup Variante 2:<br>
```ssh
docker run -d --name KN-M-05 -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=root1234 mongo:latest
sudo mongosh -u admin
mongodb://admin:root1234@localhost:27017/
docker exec -it KN-M-05 mongodump --username admin --password root1234 --authenticationDatabase admin --out /tmp/mongodb_backup
docker exec -it KN-M-05 mongorestore --username admin --password root1234 --authenticationDatabase admin /tmp/mongodb_backup
```
<img width="2306" height="338" alt="image" src="https://github.com/user-attachments/assets/244d8034-4a4f-4c6d-a316-885ba4f934a6" /><br>
<img width="1781" height="866" alt="image" src="https://github.com/user-attachments/assets/2ac298ff-9d6e-4236-8c82-3866af391f9e" /><br>
<img width="2844" height="1322" alt="image" src="https://github.com/user-attachments/assets/9db683a8-4c00-4d0c-979e-2ce477280278" /><br>
<img width="2303" height="543" alt="image" src="https://github.com/user-attachments/assets/6377624a-9db7-4197-bbc9-e09e67973509" /><br>
<img width="475" height="204" alt="image" src="https://github.com/user-attachments/assets/82f857d4-de7d-4258-aef5-6e72becfec9c" /><br>
<img width="2298" height="389" alt="image" src="https://github.com/user-attachments/assets/9c602e31-5438-4753-bc64-bc9600dfcdf2" /><br>
<img width="427" height="141" alt="image" src="https://github.com/user-attachments/assets/a4f92e58-eda0-4f4a-aac0-fe67c5d0796a" /><br><br><br>


## C
Replication: Eigentlich ist es einfach, dass man eine DB dubliziert
