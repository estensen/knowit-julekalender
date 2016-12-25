# -*- coding: utf-8 -*-
"""I regnearkprogrammer er ofte kolonner angitt ved strenger bestående av
bokstavene A til Z. Kolonnenummer 1 er angitt med bokstaven A, 2 er B osv.
Flere, og mer komplekse eksempler:

1 -> A
2 -> B
3 -> C
…
26 -> Z
27 -> AA
28 -> AB
...
52 -> AZ
53 -> BA
...
79 -> CA

Hva blir kolonnetittelen på kolonne nummer 90101894?
"""

column_number = 90101894
column_letters = []
base = 26

while column_number > 0:
    remainder = column_number % base - 1
    column_letters.append(remainder)
    column_number /= base
print(''.join([chr(97 + i) for i in reversed(column_letters)]).upper())
# GODJUL
