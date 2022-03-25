# get the base node image
FROM node:alpine as builder

# set the working dir for container (creating a folder called /frontend)
WORKDIR /frontend

# copy the json file first (copying . /(current diir's)/package.json /frontend (current diir's package.json file into above created folder) a folder called /frontend)
COPY ./package.json /frontend

# install npm dependencies
RUN npm install

# copy other project files (first . means all , second . means current dir. (copy all the files into current dir))
COPY . .

# expose port on which project will run
EXPOSE 3000

# build the folder
CMD [ "npm", "run", "start" ]

# to create img from docker file use (i) command:   docker image build .
#to rename imeage name use  (to build img i can also give this command directly)   (ii) command:   docker build -t reacttodo .


# docker images   :   to see the list of allready created images  & stored  in local storage.  after getting the list to remove all the images in one click use this below command .

# docker rmi  -f  5a  b3  fe   :  (5a  b3  fe) this is the list of image id's first 2 latter that get after giving the above command , this to remove all the list by one click .

# docker  ps  -a  :  to get list off all running local containers at all (including not running, and showing the size)

# docker rm  -f  19  a6  f2 f0 7c   :  after getting list off all running & not running local containers by above command ,  (19  a6  f2 f0 7c)  this is the list of container id's first 2 latter that get after giving the above command . this to remove all the list of all running or not running container by one click .

# /**********************************/
# docker run -d -p 3000:3000 --name <container_name that i want give for creating container > <image_name that previously already created from docker file>
#     :    this command used for  run & creating  container imeage in other machines . before that i have to push this img from local storage to docker hub ; 
#  -d (demon / docker server)
# -p (port)
# 3000:3000 (left part means in which port i want run the docker img : right part means the default port that i previously defined in docker file)

# /**********************************/


# /###################/
# To push the img into docker hub follow this url 
# https://docs.docker.com/docker-hub/repos/

# before pushing please make sure that the image that you created in your local machine should have same name that you give at the time of creating repository in docker hub .
# ex. baisyaanirban1/react-todo-app-using-redux


# /#################/

# TAGGING IMAGES USE TO RENAME IMAGE NAME :-
# docker build -t  harry/redis: latest .

# -t (means i want add a tage inside the img)
# harry (docker username)
# redis (any  img name )
# : latest (current version)
# . (current directory)