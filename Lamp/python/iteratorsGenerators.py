# import basics  #module
 
# # basics.scope_test()
# scope= basics.scope_test()

# scope


# X = [25, 78, 'Coding', 'is', '<3']
# # Get an iterator using iter() 
# a = iter(X) #creating a iterator for X 

# # Printing the a iterator
# print(a)

# # next() for fetching the 1st element in the list that is 25
# print(next(a))

# # Fetch the 2nd element in the list that is 78
# print(next(a))

# # Fetching the consecutive elements
# print(next(a))
# print(next(a))
# print(next(a))
# print(next(a))


# X = [25, 78, 'Coding', 'is', '<3']

# class A:
#     def __init__(self):
#         print("inside constructor")
#     def __iter__(self):
#         print("inside iter")
#         self.start=0
#         return self
#     def __next__(self):
#         print(X[self.start])
#         self.start+=1

# # obj= A()
# # obj.__iter__()
# # obj.__next__()

# obj1=A()
# ite = iter(obj1)
# print("after iterator")
# # next(ite) #calls the __iter__ method
# next(ite)   #calls the __next__ method
# next(ite)
# next(ite)


# Generators
# def generators():
#     yield 10
#     yield 12
#     for i in range(10):
#         yield i

# print(generators())
# ge = generators()
# print(ge)
# print(next(ge))
# print(next(ge))
# print(next(ge))
# print(next(ge))
# for j in ge:
#     print(j)

# generator expressions
# gen = (i for i in range(10))
# print(gen)
# print(next(gen))
# for i in gen:
#     print(i)


