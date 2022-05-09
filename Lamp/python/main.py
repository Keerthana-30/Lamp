

from email import message
from platform import processor
from turtle import screensize


product = [{'id': 1,'name': "Iphone 11",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "50000",'currency': "INR",'category': "mobile",'colour': "black"},
           {'id': 2,'name': "Samsung Galaxy",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "45000",'currency': "INR",'category': "mobile",'colour': "grey"},
           {'id': 3,'name': "Washing Machine",'product_details': {'machine_capacity': "6kg",'machine_rpm': "50",'type': "top_load"},'cost': "25000",'currency': "INR",'category': "washing-machine",'colour': "blue"},
           {'id': 4,'name': "Samsung TV",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "5",'name': "iPhone 12",'product_details': {'ram': "8 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "150000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "6",'name': "Samsung Note 8",'product_details': {'ram': "8 GB",'processor': "AMD-ryzon5",'screen_size': "4 inch"},'cost': "45000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "7",'name': "LG washing machine",'product_details': {'machine_capacity': "4kg",'machine_rpm': "50",'type': "front_load"},'cost': "30000",'currency': "INR",'category': "washing-machine",'colour': "black"},
        #    {'id': "9",'name': "LED smart TV MI",'product_details': {'isSmart': "true",'resolution': "UHD",'screen_size': "45 inch"},'cost': "50000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "10",'name': "LED sony Bravia",'product_details': {'isSmart': "true",'resolution': "HD",'screen_size': "55 inch"},'cost': "30000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "11",'name': "Whirlpool fridge",'product_details': {'isSmart': "true",'height': '5ft'},'cost': "55000",'currency': "INR",'category': "fridge",'colour': "white"},
        #    {'id': "12",'name': "Samsung Fridge",'product_details': {'isSmart': "false",'height': '4ft'},'cost': "28000",'currency': "INR",'category': "fridge",'colour': "pink"},
        #    {'id': "13",'name': "Apple ipad",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "150000",'currency': "INR",'category': "mobile",'colour': "white"},
        #    {'id': "14",'name': "Samsung ipad",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "70000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "15",'name': "Bluetooth speaker",'product_details': {'working distance':'10m','voltage':'DC 5V','Battery charge time':'2hrs'},'cost': "1000",'currency': "INR",'category': "speaker",'colour': "matte black"},
        #    {'id': "17",'name': "DELL vostro laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "18",'name': "HP laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "19",'name': "ACER laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "20",'name': "Macbook",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "21",'name': "Lenovo Laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "22",'name': "LG printer",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "23",'name': "Home theatre",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "24",'name': "Apple Smart watch ",'product_details': {'isSmart': "true",'screen_size': "2 inch"},'cost': "2000",'currency': "INR",'category': "smart watch",'colour': "black"},
        #    {'id': "25",'name': "DELL wireless Mouse",'product_details': {'isSmart': "false"},'cost': "400",'currency': "INR",'category': "mouse",'colour': "black"},
        #    {'id': "26",'name': "Redmi note 9 pro",'product_details': {'ram': "8 GB",'processor': "",'screen_size': "5 inch"},'cost': "15000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "27",'name': "POCO F11",'product_details': {'ram': "6 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "35000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "28",'name': "Vivo v21",'product_details': {'ram': "8 GB",'processor': "snapdragon",'screen_size': "6 inch"},'cost': "20000",'currency': "INR",'category': "mobile",'colour': "sandal"}
        ]

def add(*arg,category):
    productdetails={}
    name=input("Enter the name:")
    cost=int(input("Enter the cost:"))
    currency=input("Enter the currency:")
    color=input("Enter the color:")
    for i in arg:
        productdetails[i].append(input(f"Enter the {i}:"))
    print(productdetails)
    # product.append({'id':len(product)+1,'name': name,'product_details': {'ram': productdetails[0],'processor': productdetails[1],'screen_size':productdetails[2]},'cost': cost,'currency': currency,'category': category,'colour': color})
    print("Product added!")

while(True):
    print("Choose the below one:\n1. Admin\n2. Customer")
    user = int(input())
    if(user==1):
        print("List of products:")
        print(*product,sep="\n")
        print("Enter the option:\n1.ADD\n2.DELETE\n3.EXIT")
        choice=int(input())
        while(True):
            if choice==1:
                print("Choose the category:\n0. Exit\n1. Mobile\n2. Washing Machine\n3. TV")
                category=int(input())
                if category==1:
                    add('RAM','processor','screen size',category='mobile')
                elif category==2:
                    add('machine capacity','machine rpm','machine type',category='washing machine')
                elif category==3:
                    add('','resolution','screen size',category='tv')
                elif category==0:
                    break
                # if(category==1):
                #     print("Enter the name:")
                #     name=input()
                #     print("Enter the ram:")
                #     ram=int(input())
                #     print("Enter the processor:")
                #     processor=input()
                #     print("Enter the screen_size:")
                #     screen_size=int(input())
                #     print("Enter the cost:")
                #     cost=int(input())
                #     print("Enter the currency:")
                #     currency=input()
                #     print("Enter the color:")
                #     color=input()
                # elif category==2:
                #     print("Enter machine capacity:")
                #     capacity=int(input())
                #     print("Enter the machine rpm:")
                #     rpm=int(input())
                #     print("Enter the machine type:")
                #     machineType=input()
                # elif category==3:
                #     print("Is it smart TV:")
                #     issmart=input()
                #     print("Enter the resolution:")
                #     resolution=int(input())
                #     print("Enter the screen size:")
                #     screenSize=input()
                # elif category==0:
                #     break
                # product.append({'id':len(product)+1,'name': name,'product_details': {'ram': ram,'processor': processor,'screen_size': screen_size},'cost': cost,'currency': currency,'category': "mobile",'colour': color})
                # print("Product appended!")
            elif choice==2:
                print("List of products:")
                print(*product,sep="\n")
                print("Choose the product for deletion: ")
                productToDelete=int(input())
            elif choice ==3:
                break