# Mapapp

A demonstration of different kinds of map projections for the coordinates of the earth's coastlines.
Uses json-server for the database of points. Due to a bug with Angular, starting the json server automatically does not work.

To start the server, run 
> json-server --watch server/database.json 

from the root of the project.
Then start the angular app using 
> ng serve

again from the root of the server.
