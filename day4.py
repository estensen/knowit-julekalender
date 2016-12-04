# Alle kjenner til leken hvor man går runden rundt og teller men må hoppe over (klappe e.l) alle tall som enten har 7 i seg eller er delig på 7. Et eksempel er gitt under der '( )' indikerer et slikt tall.
# 1 2 3 4 5 6 ( ) 8 9 10 11 12 13 ( ) 15 16 ( ) 18 ...

# Algemannens versjon av denne leken er å fylle inn alle disse '( )' med begynnelsen på tallrekken igjen. Et eksempel under er gitt (legg merke til det siste 1'tallet der..):
# 1 2 3 4 5 6 (1) 8 9 10 11 12 13 (2) 15 16 (3) 18 19 20 (4) 22 23 24 25 26 (5) (6) 29 30 31 32 33 34 (1) 36 (8) 38 ..

# Vi er ute etter hvilket tall som blir stående på plass nr 1337. Svaret oppgis uten '( )' rundt.

numbers = [x for x in range(1, 1338)]
indices = [0]

def seven_is_present(n):
    s = str(n)
    for d in s:
        if int(d) == 7:
            return True
    return False

def next_clap():
    for i in range(len(indices)):
        indices[i] += 1
        if indices[i] == 1:
            return(indices[i])
        if seven_is_present(indices[i]) or (indices[i] % 7 == 0):
            continue
        else:
            return(indices[i])
    indices.append(1)
    return indices[-1]

for n in numbers:
    if seven_is_present(n) or (n % 7 == 0):
        numbers[n-1] = next_clap()
print(numbers[-1])
# 144
