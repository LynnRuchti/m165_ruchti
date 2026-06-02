# KN-M-02 - Modellierung

## A
Thema: **Postingforum**<br>
<img width="1606" height="975" alt="image" src="https://github.com/user-attachments/assets/7f95895a-afc7-449e-97fd-59bfe1ee1b89" /><br>
user: ein User der Platform mit Email, Passwort und einem Username<br>
- user 1-m post: ein User kann(muss nicht) einen/mehrere Post(s) erstellen
- user 1-m comment: ein User kann(muss nicht) einen/mehrere Comment(s) erstellen
- user 1-m like: ein User kann(muss nicht) einen/mehrere Beitrag(e)(Post/Comment) liken
- user 1-m follow: ein User kann(muss nicht) einem/mehreren User(n) followen
- user 1-m follow: ein User kann(muss nicht) einem/mehreren Follower(s) haben

post: ein von einem User erstellten Post mit Titel, Inhalt(Beschreibung), Erstellungsdatum<br>
- post m-1 user: ein Post braucht immer **einen** Ersteller
- post 1-m comment: ein Post kann(muss nicht) einen/mehrere Comment(s) haben
- post 1-m like: ein Post kann(muss nicht) einen/mehrere Like(s) haben

comment: ein von einem User erstellten Comment mit Inhalt(Text) und Erstelldatum<br>
- comment m-1 user: ein Comment braucht immer **einen** Ersteller
- comment m-1 post: ein Comment braucht immer **einen** darauf kommentierten Post
- comment m-1 comment: ein Comment kann(muss nicht) eine Reaktion auf **einen** anderen sein
- comment 1-m comment: ein Comment kann(muss nicht) eine/mehrere Reatkion(en) haben
- comment 1-m like: ein Comment kann(muss nicht) einen/mehrere Like(s) haben

like **(m-m table)**: ein Like von einem User auf einen Content(Post/Comment)<br>
- like m-1 user: ein Like muss **einen** User haben
- like m-1 post: ein Like muss **einen** geliketen Content haben **(wenn id_content => p...)**
- like m-1 comment: ein Like muss **einen** geliketen Content haben **(wenn id_content => c...)**

follow **(m-m table)**: ein Follow hat einen Follower der einem User followt<br>
- follow m-1 user: ein Follow baucht immer **einen** Follower, der einem User followt
- follow m-1 user: ein Follow baucht immer **einen** User, dem gefollowt wird
