#string methods
s='hello! how are you?'
print(s.capitalize())
print(s.count('h'))
print(s.endswith('g'))
print(s.find('!'))
print("hi {} {}".format('hi','hello'))
print(f'hi {s}')
print(s.index('?'))
print(s.index('h',2))
# print(s.index('9')) #shows error
print(s.isalnum())
print(s.isalpha())
print('*'.join(s))
print(s.upper())
print(s)
print(s.split('e'))

#list methods
l=s.split(" ")
print(l)
l.append("lower")
print(l)
l.append([1,3,"dog"])
print(l)
l.extend([1,2,3,4,56])
print(l)
l.append(['a','b'])
print(l)
l.insert(2,'e')
print(l)
print(l.pop())
print(l)
print(l.pop(2))
l.remove(1)
print(l)
l.reverse()
print(l)
l.clear()
print(l)


#dictionary methods
d= {'name':'keerthana','age':22}
for i in d:
    print(i)
for key,value in d.items():
    print(key,value,sep='=')
print(d.get('name'))