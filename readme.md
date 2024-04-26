Hashing:
Hashing is a technique used to map data of arbitrary size to a fixed-size value.
In Python, dictionaries (dict) and sets (set) are implemented using hashing.
Dictionaries use hash tables to efficiently store and retrieve key-value pairs, where each key is hashed to determine its position in the hash table.
Sets use hashing to ensure that elements are unique and to provide fast membership tests.
Hashing in Python is performed using the hash() function, which returns the hash value of an object.

Arrays:
In Python, arrays are homogeneous data structures used to store elements of the same data type sequentially in memory.
The built-in array module in Python provides support for arrays through the array data type.
Alternatively, Python lists can also be used as arrays, as they can store elements of the same type sequentially.
Arrays in Python are mutable, meaning their elements can be modified after creation.

class Solution:
    def reverseList(self, head):
        stack = []
        while head:
            stack.append(head)
            head = head.next

        dummy = ListNode(0)
        curr = dummy
        while stack:
            curr.next = stack.pop()
            curr = curr.next

        curr.next = None  # Set the next of the last node to None
        return dummy.next
solution for reversed linked list