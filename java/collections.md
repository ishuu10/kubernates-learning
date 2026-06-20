Collections

Java Collection Framework is a framework which provides some predefined classes and interfaces to store and manipulate the group of objects


List 
-> sequential collection of elements
->added ,retrieved or removed using index

ArrayList ,vector ,linkedList

Allowd duplicate
allows null elements
maintains insertion order

Only vector is synchronizes

ArrayList :
Insertion : O(1) (if insertion causes restructuring of internal array, it will be O(n))
Removal : O(1) (if removal causes restructuring of internal array, it will be O(n))
Retrieval : O(1)
Vector : Similar to ArrayList but little slower because of synchronization.
LinkedList : Insertion -> O(1), Removal -> O(1), Retrieval -> O(n)

Set:
->linear collection with no duplicates

hashset,linkedhashset,treeset

hashset ,linkedhashset -> maximum one null
treeset
