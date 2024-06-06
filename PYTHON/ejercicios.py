
# %%
print("Hola")
# %%

#Definir una función max() que tome como argumento dos números y devuelva el mayor de ellos.

# %%
def calcular_maximo(a:int,b:int) ->int:
    if a > b:
        return a
    else:
        return b
    
r_1 = calcular_maximo(1,2)
r_2 = calcular_maximo(50,80)

assert r_1 == 2

print (r_1)

#Definir una función max_de_tres(), que tome tres números como argumentos y devuelva el mayor de ellos.
# %%
def calcular_maximo_de_tres (a:int,b:int,c:int) ->int:
    if a > b and a > c:
        return a
    elif b > a and b > c:
        return b
    elif c > a and c > b:
        return c
    
r_1 = calcular_maximo_de_tres(4,6,8)
assert r_1 == 8
# %%
