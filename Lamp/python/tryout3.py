import functools
from http.client import CONTINUE
# s = "This is Keerthana"
# print(s.split(" "))


# names = ['Chris', 'Jack', 'John', 'Daman']
# print(names[3][-1])


# def func(*args):
#     print(sum(args))

# func(1,2,3,3,3)



list1 = [{ "name":"raj","marks":[50,20,30,52,90],"medium":"english","parents_details": {"parents_qualification": "educated" ,"father_name": "ramu"}},
         { "name":"regho","marks":[70,35,50,60,90],"medium":"english","parents_details": {"parents_qualification": "non-educated" ,"father_name":"ranjith"}},
         { "name":"ragu","marks":[50,50,35,50,100],"medium":"tamil","parents_details": {"parents_qualification": "non-educated" ,"father_name":"rajeev"}},
         { "name": "kumar","marks": [50,30,30,52,100],"medium":"english","parents_details": {"parents_qualification": "educated" ,"father_name":"rajesh"}},
         { "name":"sathesh","marks":[49,19,30,40,12],"medium":"tamil","parents_details": {"parents_qualification": "non-educated" ,"father_name":"ramu"}},
         { "name":"sundar","marks":[70,70,40,40,80],"medium":"tamil","parents_details": {"parents_qualification": "non-educated" ,"father_name":"remo"}},
        ]
# (lambda list_arg:print(list_arg))(list1)
# (lambda list_arg:print(list_arg[0]))(list1)
# (lambda list_arg:print(list_arg[0]["marks"]))(list1)#[50, 20, 30, 52, 90]
# (lambda list_arg:print(list_arg[4]["name"]) if sum(list_arg[4]["marks"])/5 >40 else None )(list1)
# print(*list(filter(lambda list_arg: print(list_arg['name']),list1)),sep='\n')

print("Average greater than 40:")
print(*list(filter(lambda list_arg:sum(list_arg["marks"])/5 >40 ,list1)),sep='\n')
print()
print("Passed in all:")
print(*list(filter(lambda list_arg: all(marks >= 30 for marks in list_arg["marks"]),list1)),sep="\n")
print()
# (lambda list_arg: [print(marks) for marks in list_arg[4]["marks"]])(list1)
# print(*list(filter(lambda list_arg: [print(marks) for marks in list_arg["marks"] if marks<30 ],list1)),sep="\n")
print("Marks greater than 30 and parent not-educated:")
print(*list(filter(lambda list_arg: all(marks >=30 for marks in list_arg["marks"]) and list_arg['parents_details']['parents_qualification']=='non-educated',list1)),sep="\n")
print()

print("top most mark irrespective of all the subject and whose parents are not educated:")
top=list(filter(lambda list_arg: list_arg['parents_details']['parents_qualification']=='non-educated' and all(marks > 30 for marks in list_arg["marks"]),list1))
# print(top)
print(functools.reduce(lambda x, y : x if sum(x['marks']) > sum(y['marks']) else y, top))
print()
print("top most mark irrespective of all the subject and medium is tamil:")
top1=list(filter(lambda list_arg: list_arg['medium']=='tamil' and all(marks > 30 for marks in list_arg["marks"]),list1))
# print(top)
print(functools.reduce(lambda x, y : x if sum(x['marks']) > sum(y['marks']) else y, top1))
print()

print("Find the no of the studetns passed: pass mark (30):")
print(len(list(filter(lambda list_arg: all(marks>=30 for marks in list_arg["marks"]),list1 ))))
print()

print("Sundar's 4th subject mark:")
print(list((filter(lambda x: print(x["marks"][3]) if x['name']=='sundar' else None , list1))))
print()

print("2nd subject mark of the student whose father name is \"Rajeev\" :")
print(list(filter(lambda list_arg: list_arg['parents_details']['father_name']=='rajeev',list1 ))[0]['marks'][1])
print()

print("Display students name whose father name ends with h:")
data=list(filter(lambda list_arg: list_arg["parents_details"]["father_name"].endswith('h'),list1))
print([i['name'] for i in data])
print()





print("the student from the array who got less than 30 in the second subject:")
[list1.remove(i) for i in list1 if i['marks'][1]<30]
print(*list1,sep="\n")

# de=list(filter(lambda i: i['marks'][1]<30))
# [list1.remove(i) for i in de]
