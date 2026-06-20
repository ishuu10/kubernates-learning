java -runs on jvm 
need to say  everything 

Data types

int a=10 ,char ch='a' String s="hello"

wrapper
Integer i=10
double d=10.5

String :
https://javaconceptoftheday.com/java-strings-cheat-sheet/
java.lang.string


String s="Hello.hello" #literal
String s=new s("helloo) #object

literal
->faster
->same value points to same memort

object
->slowr
->same value different memory

== checks if two variables point to the exact same memory location.

.equals() checks if the actual text characters are identical.

Method	What it does	Example
.length()	Returns character count	"Java".length() -> 4
.charAt(index)	Gets character at specific position	"Java".charAt(0) -> 'J'
.substring(start, end)	Extracts a portion of the text	"Java".substring(0, 2) -> "Ja"
.toLowerCase() / .toUpperCase()	Changes case	"Java".toUpperCase() -> "JAVA"
.contains(seq)	Checks for a substring	"Java".contains("av") -> true
.trim()	Removes leading/trailing spaces	" Java ".trim() -> "Java"


StringBuffer is thread-safe. Its methods are synchronized, meaning multiple threads can safely modify the same string buffer at the same time without corruption. However, this synchronization adds extra processing overhead, making it slower.

like StringBuffer s=new StringBuffer('hai')
s.append('hai)
s.append('bye)
one by one ,like thrread will lock 1st one afetr execution two will start 


StringBuilder is not thread-safe. It does not have the overhead of synchronization, which makes it significantly faster than StringBuffer. Since most text manipulation happens within a single thread (like a local method or loop), StringBuilder is almost always the preferred choice.
like StringBuilder s=new StringBuilder('hai')
s.append('hai)
s.append('bye)
no guarantee