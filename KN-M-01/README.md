# KN-M-01

## A
public key extrahieren:<br>
```ssh
ssh-keygen -y -f C:\Users\liaor\.ssh\Lynn.pem
```

```ssh
ssh ubuntu@98.80.84.241 -i C:\Users\liaor\.ssh\Lynn.pem
sudo cat /var/log/cloud-init-output.log
sudo mongosh -u admin
```
Connection-String: `mongodb://admin:*****@98.80.84.241:27017/?authSource=admin&readPreference=primary&ssl=false`<br>
MongoDB - Compass:<br>
<img width="1759" height="1195" alt="image" src="https://github.com/user-attachments/assets/a6ce8851-1e58-40d8-abbf-07fb2890edba" /><br>

`àuthSource=` = definiert wo das Login gespeichert ist/authentifiziert wird (definiert DB-Namen)<br>

```ssh
cat mongodbuser.txt
```
<img width="1045" height="447" alt="image" src="https://github.com/user-attachments/assets/1644d8ba-ff6e-47dc-b475-b1f1f2acc956" /><br>

```yaml
- sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf
```
-> sucht im conf file nach der Ip und ersetz sie überall durch `0.0.0.0`<br>
-> ist notwendig, da DB normalerweise nur auf dem Localhost lauscht<br>
-> erlaubt nun den Zugriff von aussen<br>

```yaml
sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf
```
-> sucht nach dem auskommentierten `#securit` und ersetzt es, so dass es nun ein aktiver Block ist<br>
-> ist notwendig, da nach der Installation der Zugriff nicht eingeschränkt wird, so dass alle, die die Ip haben, ohne User & Passwort Daten lesen/löschen können<br>
-> verpflichtet alle sich mit einem User & Passwort anzumalden, um Daten lesen/löschen zu können<br>



## B
<img width="854" height="206" alt="image" src="https://github.com/user-attachments/assets/cc3f422a-82a7-4929-903f-0eb75520e16e" /><br>

<img width="2829" height="953" alt="image" src="https://github.com/user-attachments/assets/40d49389-1660-4b6f-8a13-848e8b3eed46" /><br>

**Warum Datum-Datentyp so kompliziert?** <br>
=> JSON kennt den Datentyp Datum eigentlich nicht (Standart JSON: "2008-08-07"), Problem hier ist, dass die DB das Standart-Format von einem Datum als String wahrnimmt und mit diesem nicht ohne weiteres mathematische Datumsberechnungen(oder z.B. Abfrage/Filterung nach Jahr) gemacht werden können<br>
=> MongoDB benutzt für solche Datentypen BSON(hat neben Datum noch viele weitere Datentypen), das '$', dass beim Exportieren der JSON-Datei generiert wird, speichert den BSON Datentyp in einen String, so dass dieser bei einem Wiederimport erkannt & wiederhergestellt werden kann<br>



## C
```ssh
sudo mongosh --authenticationDatabase "admin" -u admin -p root1234
```


```ssh
show dbs;
```
-> kurze Version, um alle existierenden DBs anzuzeigen<br>
<img width="418" height="283" alt="image" src="https://github.com/user-attachments/assets/c4eaef51-c08a-40e5-a2a6-482140b98898" /><br>
<img width="449" height="224" alt="image" src="https://github.com/user-attachments/assets/a979f227-ee94-4b5f-9774-ef0d823dc0f2" /><br>
```ssh
show databases;
```
-> lange Version, um alle existierenden DBs anzuzeigen<br>
<img width="416" height="297" alt="image" src="https://github.com/user-attachments/assets/6e4c1c9f-97b9-4687-8b53-8334e61b669e" /><br>
<img width="499" height="233" alt="image" src="https://github.com/user-attachments/assets/0f09e96c-7251-4a14-bc20-d3d2d16432bf" /><br>
```ssh
use ruchti;
```
-> wechselt/definiert DB, mit der man arbeiten möchte<br>
<img width="425" height="154" alt="image" src="https://github.com/user-attachments/assets/372f5cf7-0acc-4eff-acd0-6b11faeb06ce" /><br>
<img width="475" height="114" alt="image" src="https://github.com/user-attachments/assets/4d948dc4-1314-4b17-9277-f7f7059564aa" /><br>
```ssh
show collections;
```
-> listet alle collections/tables der DB, die die Shell gerade benutzt, auf(gleich wie `show tables;`)<br>
<img width="435" height="151" alt="image" src="https://github.com/user-attachments/assets/6d2012ab-659e-4754-9f23-c2a2cf7d0f07" /><br>
<img width="549" height="106" alt="image" src="https://github.com/user-attachments/assets/a698d6b6-34e2-4d99-b739-916b84687d22" /><br>
```ssh
show tables;
```
-> listet alle collections/tables der DB, die die Shell gerade benutzt, auf(ist das Selbe wie `show collections;` **es gibt keinen Unterschied** )<br>
<img width="365" height="150" alt="image" src="https://github.com/user-attachments/assets/895da5c9-1d44-4edb-ae85-a109cb7c1d38" /><br>
<img width="503" height="105" alt="image" src="https://github.com/user-attachments/assets/7ef8fa21-2642-4d74-b247-535437fa5a33" /><br>
```ssh
var test="hallo";
```
-> erstellt eine Variable & gibt dieser einen Wert<br>
<img width="398" height="102" alt="image" src="https://github.com/user-attachments/assets/0dfa8478-3a94-4cf3-aa34-823ef68570a5" /><br>
<img width="561" height="115" alt="image" src="https://github.com/user-attachments/assets/64dd021b-77f4-445e-af7d-f52d74058ec2" /><br>
```ssh
test;
```
-> ruft eine Variable auf<br>
<img width="278" height="142" alt="image" src="https://github.com/user-attachments/assets/ed8af461-a7e5-4f6d-87f4-62b1eb34bd09" /><br>
<img width="419" height="116" alt="image" src="https://github.com/user-attachments/assets/b5274402-8574-49f6-b905-9fa3ef1e3be9" /><br>



## D
```ssh
sudo mongosh --authenticationDatabase "local" -u admin -p root1234
```
<img width="2297" height="238" alt="image" src="https://github.com/user-attachments/assets/98b066ca-9b65-4dd9-b536-1014b26aa33a" /><br>

```mongosh
use ruchti
db.createUser(
{
    user: "user1",
    pwd: "root1234",
    roles: [
    { role: "read", db: "ruchti" }
    ]
}
);
```
<img width="851" height="404" alt="image" src="https://github.com/user-attachments/assets/965a3a86-e9c8-4d30-aa29-79758e9a6b78" /><br>
```ssh
sudo mongosh --authenticationDatabase "ruchti" -u user1 -p root1234
```
<img width="2315" height="317" alt="image" src="https://github.com/user-attachments/assets/73045f6c-99df-4eee-bb98-8be6e603d0c4" /><br>
```mongosh
use ruchti
db.lynn.find()
```
<img width="1136" height="375" alt="image" src="https://github.com/user-attachments/assets/14e167fe-4095-41e6-8253-16270309c855" /><br>
```mongosh
 db.lynn.updateOne(
  { _id: ObjectId('6a158b30f77fc7a09f1d19ea')},
  { $set: { hight: 178 } }
);
```
<img width="2302" height="304" alt="image" src="https://github.com/user-attachments/assets/2da2d4db-6e28-45ee-b983-72eba69b0da1" /><br>

```mongosh
use admin
db.createUser(
{
    user: "user2",
    pwd: "root1234",
    roles: [
    { role: "readWrite", db: "ruchti" }
    ]
}
);
```
<img width="1100" height="419" alt="image" src="https://github.com/user-attachments/assets/3d7cb7f9-bf09-44db-8c05-59be925394e3" /><br>
```ssh
sudo mongosh --authenticationDatabase "admin" -u user2 -p root1234
```
<img width="2303" height="373" alt="image" src="https://github.com/user-attachments/assets/98d13bc8-7e27-4114-830d-8cd8bf17861d" /><br>
```mongosh
use ruchti
db.lynn.find()
```
<img width="1527" height="373" alt="image" src="https://github.com/user-attachments/assets/c0d4087b-4252-4151-a78c-8fef348431ed" /><br>
```mongosh
 db.lynn.updateOne(
  { _id: ObjectId('6a158b30f77fc7a09f1d19ea')},
  { $set: { hight: 178 } }
);
db.lynn.find()
```
<img width="969" height="780" alt="image" src="https://github.com/user-attachments/assets/f1970440-d287-4b8a-b078-9096750fcf3f" /><br>
