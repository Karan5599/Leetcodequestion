# Write your MySQL query statement below
select person.firstName,person.lastName,
Address.city,Address.state
from Address 
right join Person
on Address.personId = Person.personId;