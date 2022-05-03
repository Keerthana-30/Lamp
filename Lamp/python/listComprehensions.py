from re import T


print((lambda x:x+1)(int(input())))

# func = lambda x:x*12
# print(func(1))


# func = lambda x,y:x**y
# print(func(1,2))

# def func(a):
#     return lambda x:x+a
# var=func(9)
# print(var(2))

# tup = [('English', 88), ('Science', 90), ('Maths', 97), ('Social sciences', 82)]
# tup.sort(key=lambda x :x[1])
# print(tup)


# dic = [{'make': 'Nokia', 'model': 216, 'color': 'Black'}, {'make': 'Mi Max', 'model': 2, 'color': 'Gold'}, {'make': 'Samsung', 'model': 7, 'color': 'Blue'}]
# dic.sort(key= lambda x: x['model'])
# print(dic)



# l=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# print([i for i in l if i%2==0]) #list comprehesion
# print(list (filter(lambda x:x%2==0,l)))
# print(list(map(lambda i:i*i,l)))



# s = input()
# ss = lambda x: True if x.startswith('p') else False
# print(ss(s))

l1=[1,2,3,4,4,5]
l2=[2,4,1,4,9,9,0]

print(set(l1)&set(l2))


# list1=[i*2 for i in range(10)]
# print(list1)

# l=[-89,90,-90,8787,-78,-645]
# print([ i for i in l if(i>=0)])

# l2=["jeery","nima   ","   print  "]
# print(l2)
# print([i.strip() for i in l2])

# l3=[[2,3,4,121],[90,78,88],89]
# print([j for i in l3 for j in i])

# print(list(zip(l,l2)))
# del l2[0] #


# x = int(input())
# y = int(input())
# z = int(input())
# n = int(input()) 
# print([ [i,j,k]  for i in range(x+1)  for j in range(y+1) for k in range(z+1) if i+j+k!=n ])

