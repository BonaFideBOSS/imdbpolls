from ast import If
import os
import glob
import requests
from bs4 import BeautifulSoup
import urllib.request as imgreq
from PIL import Image, ImageFont, ImageDraw, ImageFilter

url = input("Poll URL: ")
if "?" in url:
    url = url.split("?", 1)[0]

layouttype = 9
cord = [5, 325, 646]
layoutfile = "collage_" + str(layouttype) + ".jpg"
layout = Image.open(layoutfile)
x, y = layout.size
layout.close()

collages = len(glob.glob1(".", "collage*.jpg"))
filename = "collageLayout_" + str(collages) + ".jpg"

# url = url.replace("poll", "list")

myheader = {"User-Agent": "Mozilla/5.0", "Connection": "keep-alive"}
connection = requests.get(url, headers=myheader)
scrape = BeautifulSoup(connection.text, "html.parser")
connection.close()

posters = scrape.select(".answers .answer .vote img")
pollTitle = scrape.title.text[6:-14]

count = 0
for i in posters:
    count = count + 1
    position = cord[0], cord[0]
    if count == 2:
        position = cord[1], cord[0]
    elif count == 3:
        position = cord[2], cord[0]
    elif count == 4:
        position = cord[0], cord[1]
    elif count == 5:
        position = cord[1], cord[1]
    elif count == 6:
        position = cord[2], cord[1]
    elif count == 7:
        position = cord[0], cord[2]
    elif count == 8:
        position = cord[1], cord[2]
    elif count == 9:
        position = cord[2], cord[2]

    poster = i["src"]
    imgreq.urlretrieve(poster, "poster.jpg")
    img = Image.open("poster.jpg")
    img = img.resize((310, 310))

    layout = Image.open(layoutfile)
    if count > 1:
        layout = Image.open(filename)

    layout.paste(img, (position))
    layout.save(filename)

    img.close()

    if count == 9:
        os.remove("poster.jpg")
        break

logo = Image.open("imdbpoll.png")
logo = logo.resize((200, 200))
layout.paste(logo, (x - 200, y - 200))
layout.save(filename)
logo.close()
layout.close()
