# Athlete Management System


####	Back end -Spring Boot with the Rest APIs (Branch – master)
####	Front end - React and Ant Design (Branch –frontend)
####	Database – MYSQL

1.	Clone the repository to two folders 
2.	For frontend checkout to frontend branch and backend use master branch
3.	To run frontend use “npm start” command (may be need to run “ npm install” before )
4.	Run the “testCreate()” methods in all test classes in backend  to auto create the database tables
5.	Get query console and run below insert query to add data to the database
6.	To run backend use “gradlew bootrun” command

### Database Query

insert into athlete (id, country, dob, event, firstname, gender, lastname) VALUES
(1,'Sri Lanka','2000-04-12','200m','Amaya','Female','Tharushi'),
(2,'UK','1998-06-16','100m','Emma','Female','Smith'),
(3,'USA','1995-04-13','400m','Jone','Male','West'),
(4,'Japan','1999-08-12','200m','Mun','Male','Leio'),
(5,'UK','2000-09-22','100m','Anne','Female','Nestvin'),
(6,'Sri Lanka','2000-12-09','200m','Kamal','Male','Udana'),
(7,'USA','1998-12-08','400m','Amanda','Female','West'),
(8,'Japan','1994-04-12','400m','Yori','Female','Yomoto');

insert into result (id, result, athlete) VALUES
(1,'2nd place',1),
(2,'1st place',2),
(3,'3rd place',3),
(4,'3rd place',5),
(5,'2nd place',8),
(6,'4th place',7),
(7,'1st place',4),
(8,'5th place',6);




