# using base image
FROM python:3.7

# setting working dir inside container
WORKDIR /backend_flask

# adding run.py to workdir
ADD run.py .

# adding config.ini to workdir
ADD config.ini .

# adding requirements.txt to workdir
ADD requirements.txt .

# installing flask requirements
RUN pip install -r requirements.txt

# adding in all contents from flask_app folder into a new flask_app folder
ADD ./backend ./backend

# exposing port 8000 on container
EXPOSE 8000

# serving flask backend through uWSGI server
CMD [ "python", "run.py" ]