import json

with open ('withGender.json') as data:
    data = json.load(data)

for item in data:
    if item['pictureUrl'] == ''