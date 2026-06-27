java is object oriented language ,java code->bytecode runs on jvm making it to run on any operating system

JVM-java virtual memory-> executes java code
JRE (Java Runtime Environment)-> containes libraries and JVM to run application
JDK (Java Development Kit): Contains JRE plus development tools like javac

OOPS

object and class
object ->instancene (car1 is object )
stored in heap memory
managed by garbage collector

class-template or blueprint (Car is class)

encapsulation 
data and methods are stored safely ,like private fields with getters/setters and making access oriented

inheritance
ability to extend the class without modifying ,reuse methods ,like dog extends animal

Polymorphism -ability of objects to take on various form
types- static ,dynamic

method overloading 
-static polymorphism
-resolved by complier at compile 
-same method but different arguments

method overiding
-dynamic 
- child class can redefine a method of its parent class.d
- like isyt resolved in run time ,because it sees the object that called the metho


Abstraction-
hiding the implementation and explosing the functionlity
this way we can change the implemntation

java provied two way of doing this
abstract class
-> it is is-a relationship like defines what an object is. eg dog is Animal ,so animal has properities like name,breath,sound
- support single inheritance ie lets say Animal is abstract ,Pet is also abstract ,dog can inherit only one class
-can have constructor
-can have isnatnce variables any access variables

interface
->can do relatioinship-define a peripheral capability or a contract that completely unrelated classes can implement.eg both spaceship and dog class can implement runnable (since they run)
->no constructor
->support multiple in heritance like dog can implement spaceship(from which it takes run),pet (from which they take pet methods)
->public static final constant
