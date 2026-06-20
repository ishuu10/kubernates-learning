OVER()
can be used with 
ROW_NUMBER()
RANK()
SUM()
MAX()
AVG()
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

select emp_id,dept,salary ,AVG(salary) over(partition by dept)  as avg_salary

| emp_id | dept | salary |avg_salary
| ------ | ---- | ------ |------
| 1      | IT   | 1000   |2000
| 2      | IT   | 2000   |2000
| 3      | IT   | 3000   |2000
| 4      | HR   | 1500   |2000
| 5      | HR   | 2500   |2000

ROW NUMBER

select emp_id,salary,ROW_NUMBER() OVER(order by salary) as rn
(assigns rank for the department)

| emp_id | salary | rn |
| ------ | ------ | -- |
| 3      | 3000   | 1  |
| 5      | 2500   | 2  |
| 2      | 2000   | 3  |
| 4      | 1500   | 4  |
| 1      | 1000   | 5  |

ROW_NUMBER() ignores ties entirely and assigns a unique, sequential number to every single row

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
