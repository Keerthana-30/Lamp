class Product():
    products_list=[{'ID': 1,'Name': "Iphone 11",'Product_details': {'RAM': "2 GB",'Processor': "snapdragon",'Screensize': "4 inch"},'cost': "50000",'Currency': "INR",'Category': "Mobile",'Colour': "black"},
           {'ID': 2,'Name': "Samsung Galaxy",'Product_details': {'RAM': "2 GB",'Processor': "snapdragon",'Screensize': "4 inch"},'cost': "45000",'Currency': "INR",'Category': "Mobile",'Colour': "grey"},
           {'ID': 3,'Name': "Washing Machine",'Product_details': {'MachineCapacity': "6kg",'RPM': "50",'Machinetype': "top_load"},'cost': "25000",'Currency': "INR",'Category': "Washing machine",'Colour': "blue"},
           ]
    def __init__(self,id,name,cost,currency,category,color):
        self.id=id
        self.name=name
        self.cost=cost
        self.currency=currency
        self.category=category
        self.color=color
    
    def specifications(self):
        if (self.category==1):
            self.ram=input("Enter the RAM:")
            self.processor=input("Enter the processor:")
            self.screensize=input("Enter the screen size:")
            return dict([("ID",self.id),("Name",self.name),("Product_details",dict([("RAM",self.ram),("Processor",self.processor),("Screensize",self.screensize)])),("Cost",self.cost),("Currency",self.currency),("Category","Mobile"),("Color",self.color)])
            
        elif (self.category==2):
            self.capacity=input("Enter the machine capacity:")
            self.rpm=input("Enter the machine rpm:")
            self.type=input("Enter the machine type:")
            return dict([("ID",self.id),("Name",self.name),("Product_details",dict([("MachineCapacity",self.capacity),("RPM",self.rpm),("MachineType",self.type)])),("Cost",self.cost),("Currency",self.currency),("Category","Washing machine"),("Color",self.color)])
            
        elif (self.category==3):
            self.isSmart=input("isSmart:")
            self.resolution=input("Enter the resolution:")
            self.screen=input("Enter the screen size:")
            return dict([("ID",self.id),("Name",self.name),("Product_details",dict([("isSmart",self.isSmart),("Resolution",self.resolution),("Screensize",self.screen)])),("Cost",self.cost),("Currency",self.currency),("Category","TV"),("Color",self.color)])


class Display:
    def display(self,products):
        print('List of Products:\n')
        print("-----------------------------------------")
        for i in products:
            for key , value in i.items():
                if isinstance(value, dict):
                    for k,v in value.items():
                        print(k.capitalize(),v,sep=":")
                else:
                    print(key.capitalize(),value,sep=": ")
            print("-----------------------------------------")

class Admin(Product,Display):
    def __init__(self):
        pass
    def add_product(self,spec_list):
        # print(spec_list)
        Product.products_list.append(spec_list)
        print("Product has been added!")
        # print(Product.products_list)
    
    def delete(self):
        if(len(Product.products_list)==0):
            print("There are no products!")
        else:
            delID=int(input("Enter the ID of the product to be deleted:"))
            count=0
             # [Product.products_list.remove(i) for i in Product.products_list i['ID']==delID ]
            for i in Product.products_list:
                if i["ID"]==delID:
                    Product.products_list.remove(i)
                    count=1
                    print("Product has been removed\n")
                    break
            if count==0:
                print("ID doesn't exist\n")




class User(Display):
    def __init__(self):
        self.customer_list=[]

    def explore(self):
        while(True):
            pdt=int(input("choose the product category:\n1.Mobile\n2.Washing machine\n3.TV\n"))
            if pdt==1:
                self.display(list(filter(lambda p_list: p_list['Category']=='Mobile',Product.products_list)))
            elif pdt==2:
                self.display(list(filter(lambda p_list: p_list['Category']=="Washing machine",Product.products_list)))
            elif pdt==3:
                self.display(list(filter(lambda p_list: p_list['Category']=='TV',Product.products_list)))
            while(True):
                    action=int(input("1. Add product\n2. Delete Product\n"))
                    if action==1:
                        customer_list=self.add_product()
                        nav = int(input("1.Go to cart page\n2.Explore\n"))
                        if(nav==1):
                            # cart()
                            print(customer_list)
                            pass
                        else:
                            break
                    elif action==2:
                        # if (delete(customer_list)):
                        #     break
                        pass
    def add_product(self):
        while(True):
            pdtId=int(input("Enter the ID of the product you want to add:\n"))
            for i in Product.products_list:
                if i["ID"]==pdtId:
                    self.customer_list.append(i)
                    print("Product added to the cart!")
                    return self.customer_list
            print("ID doesn't exist")

class Main():
    def home(self):
        while(True):
            print( "Welcome to shopping site".center(150,'-'))
            user=int(input("Choose one:\n1. Admin\n2. Customer\n"))
            #Admin
            if(user==1):
                admin = Admin()
                admin.display(admin.products_list)
                while(True):
                    choice=int(input("Enter the option:\n1.ADD\n2.DELETE\n3.EXIT\n"))
                    if choice==3:
                        break
                    while(True):
                        if choice==1:
                            category=int(input("Choose the category:\n1. Mobile\n2. Washing Machine\n3. TV\n"))
                            id=int(input("Enter the ID:"))
                            name=input("Enter the name:")
                            cost=int(input("Enter the cost:"))
                            currency=input("Enter the currency:")
                            color=input("Enter the color:")
                            pdt = Product(id,name,cost,currency,category,color)
                            spec_list=pdt.specifications()
                            admin.add_product(spec_list)
                            break
                        elif choice==2:
                            admin.delete()
                            break
            #customer
            elif user==2:
                cust = User()
                cust.explore()

obj = Main()
obj.home()
