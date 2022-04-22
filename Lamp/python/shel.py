l1 = list()
print(l1)
l2 = (2,5,7)
l1.append([10,90]) #10 and 90 will be appended as a single element [10,90]
l1.extend([9,0,7]) # 9,0,7 will be added as seperate element 9,0,7
l1.append(l2)      # (2,5,7) as a single item ... subtuple
print(l1)
l1.extend(l2)      #2,5,7 as a seperate element
print(l1)
l1.append(0)
l1.insert(2,[8,9123])
print(l1)
l1.pop() #removes the last if index is not mentioned else removes the indexed item
print(l1)


# l2.sort() # sort is only for list
l3=[90,76786,821,0]
print(l3.sort()) # changes in place and returns None
print(l3)
l3.sort(reverse=True)
print(l3)
print(sorted(l3)) #for all iterables


student_tuples = [('john', 'A', 15),('jane', 'B', 12),('dave', 'B', 10)]
print(sorted(student_tuples, key=lambda student: student[2]))   # sort by age
