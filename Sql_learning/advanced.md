RIGHT() and LEFT() extract words
LEFT(): Extracts characters starting from the beginning (left side) of the string
left(value,1)

RIGHT(): Extracts characters starting from the end (right side) of the string.



| Function               | Purpose                     | Example            |
| ---------------------- | --------------------------- | ------------------ |
| `ROUND()`              | Rounds to the nearest value | `ROUND(4.6)` → `5` |
| `FLOOR()`              | Always rounds down          | `FLOOR(4.9)` → `4` |
| `CEIL()` / `CEILING()` | Always rounds up            | `CEIL(4.1)` → `5`  |
truncate                    just cutoff

concat 
concat(string1,string2,string3)

concat('john','','doe) as fullname


position 

select position('a' in 'apple') as position

SELECT UPPER('hello') AS UpperCase;

SELECT LOWER('HELLO') AS lowerCase;

Select replace('original string','word to be replace','new word') as substring example

eg: select replace('hello world','hello','hi') as replace_string -> hi world

SELECT SUBSTRING('SQL Tutorial', 1, 3) AS ExtractString;

