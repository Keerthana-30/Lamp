product = [{'id': 1,'name': "Iphone 11",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "50000",'currency': "INR",'category': "mobile",'colour': "black"},
           {'id': 2,'name': "Samsung Galaxy",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "45000",'currency': "INR",'category': "mobile",'colour': "grey"},
           {'id': 3,'name': "Washing Machine",'product_details': {'machine_capacity': "6kg",'machine_rpm': "50",'type': "top_load"},'cost': "25000",'currency': "INR",'category': "washing-machine",'colour': "blue"},
           {'id': 4,'name': "Samsung TV",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "5",'name': "iPhone 12",'product_details': {'ram': "8 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "150000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "6",'name': "Samsung Note 8",'product_details': {'ram': "8 GB",'processor': "AMD-ryzon5",'screen_size': "4 inch"},'cost': "45000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "7",'name': "LG washing machine",'product_details': {'machine_capacity': "4kg",'machine_rpm': "50",'type': "front_load"},'cost': "30000",'currency': "INR",'category': "washing-machine",'colour': "black"},
        #    {'id': "9",'name': "LED smart TV MI",'product_details': {'isSmart': "true",'resolution': "UHD",'screen_size': "45 inch"},'cost': "50000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "10",'name': "LED sony Bravia",'product_details': {'isSmart': "true",'resolution': "HD",'screen_size': "55 inch"},'cost': "30000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "13",'name': "Apple ipad",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "150000",'currency': "INR",'category': "mobile",'colour': "white"},
        #    {'id': "14",'name': "Samsung ipad",'product_details': {'ram': "2 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "70000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "17",'name': "DELL vostro laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "18",'name': "HP laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "19",'name': "ACER laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "20",'name': "Macbook",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "laptop",'colour': "black"},
        #    {'id': "21",'name': "Lenovo Laptop",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "23",'name': "Home theatre",'product_details': {'isSmart': "false",'resolution': "UHD",'screen_size': "55 inch"},'cost': "40000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "24",'name': "Apple Smart watch ",'product_details': {'isSmart': "true",'screen_size': "2 inch"},'cost': "2000",'currency': "INR",'category': "smart watch",'colour': "black"},
        #    {'id': "25",'name': "DELL wireless Mouse",'product_details': {'isSmart': "false"},'cost': "400",'currency': "INR",'category': "mouse",'colour': "black"},
        #    {'id': "26",'name': "Redmi note 9 pro",'product_details': {'ram': "8 GB",'processor': "",'screen_size': "5 inch"},'cost': "15000",'currency': "INR",'category': "tv",'colour': "black"},
        #    {'id': "27",'name': "POCO F11",'product_details': {'ram': "6 GB",'processor': "snapdragon",'screen_size': "4 inch"},'cost': "35000",'currency': "INR",'category': "mobile",'colour': "black"},
        #    {'id': "28",'name': "Vivo v21",'product_details': {'ram': "8 GB",'processor': "snapdragon",'screen_size': "6 inch"},'cost': "20000",'currency': "INR",'category': "mobile",'colour': "sandal"}
        ]
customer_list=[]
def delete(product_list):
    if(len(product_list)==0):
        print("Cart is empty!")
        return 0
    else:
        count=0
        dele=int(input("Enter the ID of the product you want to delete:\n"))
        for i in product_list:
            if dele in i.values():
                if i['id']==dele:
                    product_list.remove(i)
                    print("product removed!\n")
                    count=1
                    break
        if count==0:
            print("ID doesn't exist")
        # [product_list.remove(i) for i in product_list if dele in i.values()  and i['id']==dele]
       
def explore():
    while(True):
        pdt=int(input("choose the product category:\n1.Mobile\n2.Washing machine\n3.TV\n4.All\n"))
        if pdt==1:
            display(list(filter(lambda p_list: p_list['category']=='mobile',product)))
        elif pdt==2:
            display(list(filter(lambda p_list: p_list['category']=="washing-machine",product)))
        elif pdt==3:
            display(list(filter(lambda p_list: p_list['category']=='tv',product)))
        else:
            display(product)
        while(True):
                operation=int(input("1. Add product\n2. Delete Product\n"))
                if operation==1:
                    add(customer_list)
                    nav = int(input("1.Go to cart page\n2.Explore\n"))
                    if(nav==1):
                        cart()
                    else:
                        break
                elif operation==2:
                    if (delete(customer_list)):
                        break
        
def cart():
    print("Cart Details\n------------")
    print("{:10} {:10} {:10} ".format("ID","Name","Cost"))
    for i in customer_list:
        print("{:10} {:10} {:10}".format(i['id'],i["name"],i["cost"]))
        print()
    while(True):
        value=int(input("Choose option:\n1.Pay\n2.Explore\n3.Delete Item\n"))
        if(value==1):
            pass
        elif (value==2):
            explore()
        elif (value==3):
            delete(customer_list)
            cart()
        else:
            print("Enter the correct option")

def display(product_list):
    print('List of Products:\n')
    print("-----------------------------------------")
    for i in product_list:
        for key , value in i.items():
            if isinstance(value, dict):
                for k,v in value.items():
                    print(k.capitalize(),v,sep=":")
            else:
                print(key.capitalize(),value,sep=": ")
        print("-----------------------------------------")

def add(*arg,category=None):
    if(category!=None):
        productdetails={}
        name=input("Enter the name:")
        cost=int(input("Enter the cost:"))
        currency=input("Enter the currency:")
        color=input("Enter the color:")
        for i in arg:
            productdetails[i]=input(f"Enter the {i}:")
        product.append({'id':len(product)+1,'name': name,'product_details':productdetails ,'cost': cost,'currency': currency,'category': category,'colour': color})
        print("Product added!\n")
    else:
        while(True):
            pdtId=int(input("Enter the ID of the product you want to add:\n"))
            for i in product:
                if pdtId in i.values():
                    customer_list.append(i)
                    print("Product added to the cart!")
                    count=1
                    break
                else:
                    count=0
            if count==0:
                print("ID doesn't exist")
            else:
                break
       
while(True):
    print( "Welcome to shopping site".center(150,'-'))
    user=int(input("Choose one:\n1. Admin\n2. Customer\n"))
    #Admin
    if(user==1):
        display(product)
        while(True):
            choice=int(input("Enter the option:\n1.ADD\n2.DELETE\n3.EXIT\n"))
            if choice==3:
                break
            while(True):
                if choice==1:
                    category=int(input("Choose the category:\n0. Exit\n1. Mobile\n2. Washing Machine\n3. TV\n"))
                    if category==1:
                        add('ram','processor','screen size',category='mobile')
                    elif category==2:
                        add('machine capacity','machine rpm','machine type',category='washing-machine')
                    elif category==3:
                        add('','resolution','screen size',category='tv')
                    elif category==0:
                        break
                elif choice==2:
                    display(product)
                    delete(product)
                    break
    #customer
    elif user==2:
        # display(product)
        explore()
        
       








































































































#delete of prodt in admin
# productToDelete=int(input("Choose the product for deletion: "))
                    # [product.remove(i) for i in product if i['id']==productToDelete]
                    # print("product removed!\n")




       # while(True):
        #     pdt=int(input("choose the product category:\n1.Mobile\n2.Washing machine\n3.TV\n4.All"))
        #     if pdt==1:
        #         display(list(filter(lambda p_list: p_list['category']=='mobile',product)))
        #     elif pdt==2:
        #         display(list(filter(lambda p_list: p_list['category']=="washing-machine",product)))
        #     elif pdt==3:
        #         display(list(filter(lambda p_list: p_list['category']=='tv',product)))
        #     else:
        #         display(product)
        #     while(True):
        #         print("1. Add product\n2. Delete Product")
        #         operation=int(input())
        #         if operation==1:
        #             add(customer_list)
        #             print("1.Go to cart page\n2.Explore")
        #             nav = int(input())
        #             if(nav==1):
        #                 cart()
        #             else:
        #                 break
        #         elif operation==2:
        #             if(len(customer_list)==0):
        #                 print("Cart is empty!")
        #                 break
        #             else:
        #                     cart()
        #                     print("Which product do you want to delete?")
        #                     dele=int(input())
        #                     [customer_list.remove(i) for i in customer_list if i['id']==dele]
        #                     print("product removed!\n")
        #                     print(customer_list)

