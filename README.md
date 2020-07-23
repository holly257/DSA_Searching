# Assignment 

1. How many searches?
    - Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.
        - first time returns 3,5,6,8,11 => 11 is halway and doesn't match
        - second time 6,8,11 => 6 is halfway and doesn't match
        - third time 6,8 => 8 would match being the halfway point
    - Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
        - first time 12, 14, 15, 17, 18 => 12 is middle and doesn't match
        - second time 15, 17, 18 => 15 is smaller but not match
        - third time 17 => not a match, returns null
2. Adding a React UI
    - You will be testing the efficiency of 2 search algorithms, linear search and binary search using React.
    1. Linear search
        - Given the following dataset, find out how many tries it took to search for a particular item in the dataset. 
        - If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
    2. Binary search
        - Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. 
        - Then implement a binary search to find a particular value in the dataset. 
        - Display how many tries it took to search for a particular item in the dataset using binary search. 
        - If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.
3. Find a book
    - Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? 
    - Implement your algorithm to find a book whose Dewey and book title is provided.
4. Searching in a BST
    ** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

    1. Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. What would be its postorder traversal?
        - post order: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
    2. The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
        - pre-order: 8, 6, 5, 7, 10, 9 ,11

#### In Progress
5. Implement different tree traversals
    - Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. 
    - Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.

#### Next
6. Find the next commanding officer
7. Max profit
8. Edd drop 