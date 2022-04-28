
# class Student:   
#     def __init__(self):  
#         print("This is non parametrized constructor")  
#     def show(self,name):  
#         print("Hello",name)  
# student = Student( )  
# student.show("John")     


# class Car:
#     # print("inside Car")
#     v=4
#     def __init__(self,name,mileage):
#         # print(self,name,mileage)
#         self.name1=name
#         self.mileage1=mileage
#         print(self.name1,self.mileage1)
#     def disp(self):
#         print(self.name1,self.mileage1,self.v)

#     # print("inside Car")
#     # v=v+1
#     # print(v)
        
# ferrari = Car('ferrai',20)
# ferrari.disp()


# class Vehicle:
#     def __init__(self,max_speed,mileage=100):
#         self.max_speed=max_speed
#         self.mileage=mileage 
# car = Vehicle(10,89)
# print(car.max_speed,car.mileage)


# class Dog:
#     tricks = []         
#     def __init__(self, name):
#         self.name = name
#         self.trick=[]

#     def add_trick(self, trick):
#         self.tricks.append(trick)
#         self.trick.append(trick)

# d = Dog('Fido')
# e = Dog('Buddy')
# d.add_trick('roll over')
# e.add_trick('play dead')
# print(d.tricks)          #  shared by all objects of the class
# print(d.trick)           #  shared by only the particular object d

# print(e.tricks)          #  shared by all objects of the class
# print(e.trick)           #  shared by only the particular object e






# class Animal:  
#     print("inside Animal class")
#     def __init__(self):
#         print("inside constructor")
#     def speak(self):  
#         print("Animal Speaking")  


# #child class Dog inherits the base class Animal  
# class Dog(Animal):  
#     print("1")
#     print("2")
#     def bark(self):  
#         print("dog barking")  
#     def speak(Self):
       
#         print("insinde chike")
#         super().speak()
# d = Dog()  
# d.bark() 
# d.speak()



# class Demo:
#     print('global class Demo')

# def test():
#     print('Demo')
#     class Demo:
#         x = 'Demo from fuction test()'
#         print(x)

# test()

# if True:
#     class Demo:
#         print('Demo from if:') 


# hierarchial inheritance
# class Animal():
#     var =10
#     def speak(self):
#         print("inside speak")
#     print(var)

# class Cat(Animal):
#     def speak(self):
#         print("in cat")
#         super().speak()

# class Dog(Animal):
#     def speak(self):
#         print("in dog")
#         super().speak()
#         print(super().var)

# obj= Dog()
# obj.speak()

# obj1 = Cat()
# obj1.speak()



class Vehicle:
    def __init__(self, name, max_speed, mileage):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage

    def seating_capacity(self, capacity=50):
        return f"The seating capacity of a {self.name} is {capacity} passengers"

class Bus(Vehicle):
    pass

School_bus = Bus("School Volvo", 180, 12)
print(School_bus.seating_capacity())