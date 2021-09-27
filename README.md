You need Python >= 3.7.0 and < 3.8

You also should ideally run all these commands through a linux command line. Macbook works fine, but you might need to install
linux subsystem on windows.

Prerequisites:

1) Have Python >= 3.7.0 and < 3.8 installed
2) You need to have the latest version of Pip
3) You need to have virtualenv install: pip install virtualenv

Open new terminal, install backend server

1) cd backend
2) virtualenv venv
3) ./venv/Scripts/activate (for windows)
3) source venv/bin/activate (for mac)
4) pip install -r requirements.txt
5) flask run

Open new terminal, install frontend server

1) cd frontend
2) npm install
3) npm start

Important URLs:
Use this url to connect to the database. You can open a MongoDB Compass and copy-paste this string to view the database.
1) MongoDB connection string: mongodb+srv://simon:simon@hackthenorth2021.kat9o.mongodb.net/test

Technology used:
1) Tensorflow, Keras, MatPlotLib for the Python module called ImageAI. Used for assigning description to uploaded images.
2) Flask for the Api Development.
3) React JS for the frontend UI. CSS for the design.
4) PIL for image processing
5) MongoDB, using Google Cloud, for storing image data (including ML generated description and filename).

Here is the link to my demo:
