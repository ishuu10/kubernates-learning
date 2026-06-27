OVER()
can be used with 
ROW_NUMBER()
RANK()
SUM()
MAX()
AVG()

syntax is <function> oVER() as <alias name>

<function> OVER(<partition >) as <alias name>

A window function performs calculations across a set of rows without collapsing rows.

| emp_id | dept | salary |
| ------ | ---- | ------ |
| 1      | IT   | 1000   |
| 2      | IT   | 2000   |
| 3      | IT   | 3000   |
| 4      | HR   | 1500   |
| 5      | HR   | 2500   |


select emp_id,dept,salary ,AVG(salary) over() as avg_salary from employee

output
| emp_id | dept | salary |avg_salary
| ------ | ---- | ------ |------
| 1      | IT   | 1000   |2000
| 2      | IT   | 2000   |2000
| 3      | IT   | 3000   |2000
| 4      | HR   | 1500   |2000
| 5      | HR   | 2500   |2000

PARTITION BY

Like GROUP BY but retains rows.

select emp_id,dept,salary ,max(salary) over(partition by dept)  as max_salary

| emp_id | dept | salary |max_salary
| ------ | ---- | ------ |------
| 1      | IT   | 1000   |3000
| 2      | IT   | 2000   |3000
| 3      | IT   | 3000   |3000
| 4      | HR   | 1500   |2500
| 5      | HR   | 2500   |2500

ROW NUMBER()
assignes number to each row 

select emp_id,dept,salary,ROW_NUMBER() OVER() as row_number

| emp_id | dept | salary |max_salary|row_numer
| ------ | ---- | ------ |------     |-----
| 1      | IT   | 1000   |3000.      |1
| 2      | IT   | 2000   |3000       |2
| 3      | IT   | 3000   |3000.      |3
| 4      | HR   | 1500   |2500       |4
| 5      | HR   | 2500   |2500.      |5

ROW_NUMBER() ignores ties entirely and assigns a unique, sequential number to every single row

select emp_id,dept,salary,ROW_NUMBER() OVER(partition by dept) as row_number

| emp_id | dept | salary |max_salary|row_numer
| ------ | ---- | ------ |------     |-----
| 1      | IT   | 1000   |3000.      |1
| 2      | IT   | 2000   |3000       |2
| 3      | IT   | 3000   |3000.      |3
| 4      | HR   | 1500   |2500       |1
| 5      | HR   | 2500   |2500.      |2


RANK() assigns the same rank to identical values, but skips subsequent numbers, leaving gaps in the ranking sequence.

DENSE_RANK() assigns the same rank to identical values, but never skips a number, keeping the ranking sequence continuous.

LAG()

previous row

select salary,lag(salary) over(order by salary) as prev 
| salary | previous_salary |
| ------ | --------------- |
| 1000   | NULL            |
| 1500   | 1000            |
| 2000   | 1500            |
| 2500   | 2000            |

LEAD()

SELECT
    salary,
    LEAD(salary) OVER(ORDER BY salary) AS next_salary
FROM Employees;

| salary | next_salary |
| ------ | ----------- |
| 1000   | 1500        |
| 1500   | 2000        |
| 2000   | 2500        |

common q&a
2n highest salary

select * from (select salary,dense_rank() over(order by salary)rnk from employee) t where rnk =2

here t is name of temp table created from query(select salary,dense_rank() over(order by salary)rnk from employee)
liek it will read 
(SELECT salary
FROM t
WHERE rnk = 2;)