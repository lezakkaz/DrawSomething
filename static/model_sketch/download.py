# import libs
import urllib.request
import os
import ssl

# Make dir
directory = 'data/'
if not os.path.exists(directory):
    os.makedirs(directory)

# read classes from classes.txt
f = open("classes.txt","r")
classes = f.readlines()
f.close()

# some ssl error in mac os so add this line
context = ssl._create_unverified_context()

# download function (from google)
def download():
  base = 'https://storage.googleapis.com/quickdraw_dataset/full/numpy_bitmap/'
  for c in classes:
    cls_url = c.replace('_', '%20')
    path = base+cls_url+'.npy'
    print(path)
    urllib.request.urlretrieve(path, directory+c+'.npy')
download()
