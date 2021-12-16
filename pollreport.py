import os
import json
from datetime import datetime
from pytz import timezone
tz = timezone('EST')
import requests
from bs4 import BeautifulSoup


totalpolls = 0
totalvotes = 0
totalhomepagepolls = 0
lastupdated = ''

# Read
print('-----> Reading old data.')
file = open('imdbpolls.json','r')
data = json.load(file)
totalpolls = len(data['polls'])
file.close()
print('-----> Total Polls: ' + str(totalpolls))

#Update
print('-----> Updating data.')
data['totalpolls'] = totalpolls
data['lastupdated'] = datetime.now(tz).strftime("%A, %B %d, %Y - %H:%M %Z")

currentPoll = 0
for i in data['polls']:
    pollLink = i['url']
    resultURL = pollLink
    if pollLink.endswith('/'):
        resultURL = pollLink + 'results'
    else:
        resultURL = pollLink + '/results'
    connection = requests.get(resultURL)
    scrape = BeautifulSoup(connection.text, 'html.parser')
    pollTitle = scrape.title.text[14:-7]
    voteCountRaw = scrape.select_one('.poll.results h2').text[11:-7]
    voteCount = voteCountRaw.replace(',','').strip()

    if i['homepage'].lower() == 'yes':
        totalhomepagepolls = totalhomepagepolls + 1

    i['title'] = pollTitle
    i['votes'] = int(voteCount)
    totalvotes += int(voteCount)
    
    currentPoll = currentPoll + 1
    print('-----> Progress: '+ str(totalpolls - currentPoll),end='\r')

data['totalvotes'] = totalvotes
data['totalhomepagepolls'] = totalhomepagepolls

#Save
file = open('imdbpolls.json','w')
json.dump(data,file)
file.close()
print('-----> Data updated successfully.')
