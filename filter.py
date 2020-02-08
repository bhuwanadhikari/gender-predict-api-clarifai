import json

with open ('withGender2.json') as data:
    data = json.load(data)
madchen = []
for euta in data:
    if 'name' in euta.keys():
        madchen.append(euta)



with open('madchen.json', 'w') as ff3:
    json.dump(madchen, ff3, ensure_ascii=False, indent = 3)
