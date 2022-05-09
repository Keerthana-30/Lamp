# print(print.__doc__)

def outer():
    x = "local"
    def inner():
        # print(x) #local
        x="changing value"
        print(x) #changing value
    inner()
    print(x)#local
outer()


# x="global"
# def a():
#     x="inside a"
#     def b():
#         """First looks in the local scope if there is a variable named x it prints it 
#            if not looks in enclosing scope then in global"""
#         x = "inside b"
#         print(x)
#     b()
#     print(x)
# a()


# def scope_test():
#     def do_local():
#         spam = "local spam"

#     def do_nonlocal():
#         nonlocal spam
#         spam = "nonlocal spam" #changes the spam in the enclosing functiont o nonlocal spam

#     def do_global():
#         global spam #since there is no global variable named spam it creates one
#         spam = "global spam"

#     spam = "test spam"
#     do_local()
#     print("After local assignment:", spam)
#     do_nonlocal()
#     print("After nonlocal assignment:", spam)
#     do_global()
#     print("After global assignment:", spam)

# scope_test()
# print("In global scope:", spam)
