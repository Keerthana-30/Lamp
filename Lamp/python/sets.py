set1 = {1,2,3,4,5,5,5,5,5,5,5,5,5,5,5}
set2 = set([2,3,1,1,13,4])
print(type(set1))
print(set1)
#print(set1[0]) #will show an error
# for i in set1:
#     print(i)

# #cant contain lists, dictionary    
# set2 = {1,2,(23,33)} #set2 = {1,2,[23,33]} will show error
# print(set2)

set1.add(90) #used to add single item
set1.update([12,21]) # used to add multiple items
print(set1)
set1.discard(0)
set1.discard(12) #does not show an error if the item is not found . remove()- will throw an error when the item is not found
set1.pop() #pops the last element
print(set1)
print(set1|set2) #union
print(set1.union(set2))
print(set2.union(set1))
print(set1 & set2)
print(set1.intersection(set2))

