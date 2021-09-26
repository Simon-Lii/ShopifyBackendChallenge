from pymongo import MongoClient
import io
from PIL import Image
import matplotlib.pyplot as plt

url = "mongodb+srv://simon:simon@hackthenorth2021.kat9o.mongodb.net/test?ssl=true&ssl_cert_reqs=CERT_NONE"
db = MongoClient(url, connect=False)["hack"]["user"]
images = db

im = Image.open("book.jpg")

image_bytes = io.BytesIO()
im.save(image_bytes, format='JPEG')

image = {
    'data': image_bytes.getvalue()
}

image_id = images.insert_one(image).inserted_id

image = images.find_one({"_id":image_id})

pil_img = Image.open(io.BytesIO(image['data']))
plt.imshow(pil_img)
plt.show()