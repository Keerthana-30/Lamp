#def f(a,b):
#	print(a+b)
#f(1,2)
#duplicate=f 
#duplicate(3,4)

#passing mutliple values to the function
#def func(*values):
#	return values,1 #returning multiple values
#print(func(12,'hi',2.34)) #the values is returned as tuple

#default arguments in the function
# def func1(value="default value"):
# 	print(value)
# print(func1("hi"))
# func1()


# def ask(ques,ans="no"):
#     if ques :
#         print(ans)
# ask("how are you?","yes")
# ask("did you eat?")


#function inside a function
#def func1(a,b):
#	def func2(a,b):
#		s=a+b
#		return s	
#	print(func2(a,b))
#func1(1,2)


#l1=[]
#def even(start,end):
#	print(type(range(start,end,2)))
#	for i in range(start,end,2):
#		l1.append(i+1)
#	return list(range(start,end,3))
#print(even(4,30))
#print(l1)

# i = 5             #i = 5 is evaluated and the variable and its value is added to the scope. 
# def f(arg=i):     # the function declaration is evaluated. At this point all the default arguments are also evaluated. i holds the value 5, so arg's default value is 5
#      print(arg)                
# i = 6             #After i changes value to 6, arg is already 5 so it doesn't change.
# f()