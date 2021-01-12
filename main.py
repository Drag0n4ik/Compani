from time import sleep
def Bot1():
    Money2 = 0
    InSecPl = 1
    lvl = 1
    exp = 0
    lvlUp = 10
    lvlUpMn = 1.5
    MonX5 = 500
    MonX3 = 300
    MonX1 = 100
    while True:
        exp+=1
        if exp == lvlUp:
            lvl+=1
            print("lvlUP "+str(lvl))
            lvlUp = lvlUp * lvlUpMn
            lvlUp = lvlUp // 1
            lvlUp = int(lvlUp)
        Money2 += InSecPl
        if Money2 >= MonX5:
            if Money2 >= (MonX5*5):
                if Money2 >= (MonX5 * 10):
                    if Money2 >= (MonX5 * 100):
                        if Money2 >= (MonX5 * 1000):
                            Money2 -= (500 * 1000)
                            InSecPl += (5 * 1000)
                        else:
                            Money2 -= (500 * 100)
                            InSecPl += (5 * 100)
                    else:
                        Money2 -= (500 * 10)
                        InSecPl += (5 * 10)
                else:
                    Money2 -= (500*5)
                    InSecPl += (5*5)
            else:
                Money2 -= 500
                InSecPl+=5
        elif Money2 >= MonX3:
            if Money2 >= (MonX3*5):
                if Money2 >= (MonX3 * 10):
                    if Money2 >= (MonX3 * 100):
                        if Money2 >= (MonX3 * 1000):
                            Money2 -= (300 * 1000)
                            InSecPl += (3 * 1000)
                        else:
                            Money2 -= (300 * 100)
                            InSecPl += (3 * 100)
                    else:
                        Money2 -= (300 * 10)
                        InSecPl += (3 * 10)
                else:
                    Money2 -= (300*5)
                    InSecPl += (3*5)
            else:
                Money2 -= 300
                InSecPl+=3
        elif Money2 >= MonX1:
            if Money2 >= (MonX1*5):
                if Money2 >= (MonX1 * 10):
                    if Money2 >= (MonX1 * 100):
                        if Money2 >= (MonX1 * 1000):
                            Money2 -= (100 * 1000)
                            InSecPl += (1 * 1000)
                        else:
                            Money2 -= (100 * 100)
                            InSecPl += (1 * 100)
                    else:
                        Money2 -= (100 * 10)
                        InSecPl += (1 * 10)
                else:
                    Money2 -= (100*5)
                    InSecPl += (1*5)
            else:
                Money2 -= 100
                InSecPl+=1
        print("Денег: "+str(Money2))
        print("+ в сек " + str(InSecPl))
        SumCompany2 = (Money2 + InSecPl)*2
        print("Сумма компании: "+str(SumCompany2))
        sleep(1)
Bot1()