

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

def outer():
    x = "local"
    def inner():
        # print(x) #local
        x="changing value"
        print(x) #changing value
    inner()
    print(x)#local
outer()
