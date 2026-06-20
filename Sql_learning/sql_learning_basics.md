users

name  age address customer_type order valuse

Basics cases

select :

select * from users (all columns)

select name,age from users (specific columns)


select distinct name from users (names)

where :

select * from users where age>50

we can sue only this 

=	Equal	
>	Greater than	
<	Less than	
>=	Greater than or equal	
<=	Less than or equal	
<>	Not equal. Note: In some versions of SQL this operator may be written as !=	
BETWEEN	Between a certain range	
LIKE	Search for a pattern	
IN	To specify multiple possible values for a column

select * from users where age>50 and country='india

or

select * from users where age>50 or country='india

is null or not null

select * from users where  address is null 


Update:

syntax
update table name set column 1=value 1 where condition

update users set address='empty' where address is null


delete

delete from users where address is null



aggregate 

MIN() - returns the smallest value of a column
MAX() - returns the largest value of a column
COUNT() - returns the number of rows in a set
SUM() - returns the sum of a numerical column
AVG() - returns the average value of a numerical colum

select min(order_value) from users  - searches whole table returns the min

select min(order_valye) from users group by customertype- first groups by customer type like premium ,free etc and the finds the minium

similarly max can be used 

The AVG() function ignores NULL values in the colum

| Clause     | Works On        | Purpose                         |
| ---------- | --------------- | ------------------------------- |
| `WHERE`    | individual rows | filter rows before grouping     |
| `GROUP BY` | creates groups  | groups similar rows             |
| `HAVING`   | grouped data    | filter groups after aggregation |



select count(*) from users where order_value >50

select count(*) from users group by customer_type

select customer_type,count(*) from users group by customer_type having avg(order_value) >50

here we can also specifiy index of column like 

select customer_type,count(*) from users group by 1 having avg(order_value) >50
now 1 specifies that its customer_type

update and set work together

update->table name 

set -> column value