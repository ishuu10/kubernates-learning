join means joining table


inner join

BASED ON CONDITION WE USE ON operator



emp_id user salary.          emp_id dept
1    ishu. 100000             1.     it
2.   kum.  4000                2.    fin
3.    uma.  3456.             3.       hr
5     hari 100000             4.       eng

join
select * from employee e join department d on e.emp_id=d.emp_id


emp_id user salary  dept
1.     ishu. 100000. it
2.     kum.   4000.   fin
3.     uma.   3456.   hr


select * from employee e  left join department d on e.emp_id=d.emp_id
Left join
emp_id user salary  dept
1.     ishu. 100000. it
2.     kum.   4000.   fin
3.     uma.   3456.   hr
5.     hari.   100000 null


right join

select * from employee e  left join department d on e.emp_id=d.emp_id


emp_id user salary  dept
1.     ishu. 100000. it
2.     kum.   4000.   fin
3.     uma.   3456.   hr
4     null   null     eng 
