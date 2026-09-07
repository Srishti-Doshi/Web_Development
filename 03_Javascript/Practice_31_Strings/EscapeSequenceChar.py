#Escape Sequence Characters

a = "TINKA"
print(a)

b = "T'inka"
print(b)

c = 'T"inka'
print(c)

# d = "T"inka" ->SyntaxError: unterminated string literal
# e = 'Tin'ka'->SyntaxError: unterminated string literal

d = "T\"inka"  #Backslash
print(d)
e = 'Tin\'ka'
print(e)

f = 'Srishti\nDoshi'
print(f)