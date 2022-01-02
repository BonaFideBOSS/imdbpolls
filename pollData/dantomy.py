import os
import json
import requests
from bs4 import BeautifulSoup

# ===== Read =====
print("-----> Reading dan's data data.")
file = open("danspolldata.json", "r")
dandata = json.load(file)
file.close()

print("-----> Reading my poll data.")
file = open("allimdbpolls.json", "r")
mydata = json.load(file)
file.close()

totaldanpolls = len(dandata["polls"])
totalmypolls = len(mydata["polls"])
print("-----> Total Polls on Dan's data: " + str(totaldanpolls))
print("-----> Total Polls on my data: " + str(totalmypolls))

count = 0
for i in mydata["polls"]:
    if i["featured"] == "No":
        for j in dandata["polls"]:
            if i["url"] == j["url"]:
                if j["featured"] == "Yes":
                    count = count + 1


print(count)

# print("-----> Saving")
# file = open("allimdbpolls.json", "w")
# json.dump(mydata, file)
# file.close()
# print("-----> Data updated successfully.")
