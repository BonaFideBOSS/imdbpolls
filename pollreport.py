import os

file = open('imdbpolls.txt').read().splitlines()
pollURL = ''
pollDate = ''
customDate = ''
homepage = ''
newlist = []
for i, val in enumerate(file):
    pollURL = val.split(',')[0]
    pollDate = val.split(',')[1]
    isHighlighted = val.split(',')[2]
    
    year = (pollDate.split('-')[2])
    month = (pollDate.split('-')[1])
    day = (pollDate.split('-')[0])
    if month == "Jan":
        month = '01'
    elif month == "Feb":
        month = '02'
    elif month == "Mar":
        month = '03'
    elif month == "Apr":
        month = '04'
    elif month == "May":
        month = '05'    
    elif month == "Jun":
        month = '06'
    elif month == "Jul":
        month = '07'
    elif month == "Aug":
        month = '08'
    elif month == "Sep":
        month = '09'
    elif month == "Oct":
        month = '10'
    elif month == "Nov":
        month = '11'
    else:
        month = '12'
    customDate = (year +'/'+ month +'/'+ day)
    
    if isHighlighted == 'YeHighlight':
        homepage = 'Yes'
    else:
        homepage= 'No'
    newlist.append({"url":pollURL,
                       "title":"",
                       "date":customDate,
                       "homepage":homepage})
print(newlist)
