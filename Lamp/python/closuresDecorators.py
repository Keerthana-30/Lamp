# def outer():
#     def inner():
#         print("hi")
#     return inner

# fun=outer()
# print(fun)
# fun() #hi

#decorator
def div(func):
    def inner(*args):
        print("before disp")
        return func(*args)
    return inner

@div
#orignal function
def disp():
    print("inside disp")

# disp = div(disp) # this equal to @div
disp()

@div
def show(msg):
    print("inisde show",msg)
show('hi')