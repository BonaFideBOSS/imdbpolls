import os
import json
from datetime import datetime
from pytz import timezone
tz = timezone('EST')

totalpolls = ''
totalvotes = ''
lastupdated = ''

# Read
file = open('imdbpolls.txt','r')
data = json.load(file)
totalpolls = len(data['polls'])
file.close()

#Update
data['totalpolls'] = totalpolls
data['lastupdated'] = datetime.now(tz).strftime("%A, %B %d, %Y - %H:%M %Z")

for i in data['polls']:
    polllink = i['url']
    print(polllink)

#Save
file = open('imdbpolls.txt','w')
json.dump(data,file)
file.close()


