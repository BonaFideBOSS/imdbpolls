import os
import json
import requests
from bs4 import BeautifulSoup

# ===== Read =====
print("-----> Reading dan's data data.")
file = open("deletedpolls.json", "r", encoding="utf-8")
dandata = json.load(file)
file.close()

print("-----> Reading my poll data.")
file = open("../allimdbpolls.json", "r")
mydata = json.load(file)
file.close()

totaldanpolls = len(dandata["polls"])
totalmypolls = len(mydata["polls"])
print("-----> Total Polls on Dan's data: " + str(totaldanpolls))
print("-----> Total Polls on my data: " + str(totalmypolls))

mypolls = []
deletedpolls = []

for i in mydata["polls"]:
    mypolls.append(i["url"])

for i in dandata["polls"]:
    if i["url"] not in mypolls:
        deletedpolls.append(i)

totaldelpolls = len(deletedpolls)
print("Total deleted polls: " + str(totaldelpolls))

print("-----> Saving")
file = open("needrepair.json", "w")
json.dump(deletedpolls, file)
file.close()
print("-----> Data updated successfully.")
