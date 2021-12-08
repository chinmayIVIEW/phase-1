express js is a freamework of nodejs its the most popular framework as of now .
its a web application framework that provides you with a simple API to build
website,web apps and backend

to write a small rest api server in plane node js (that is using only core modules)
and then in express.js . the latter will take you 5-10x less time and lines of code .


procedure to install express :
1. make a directory first . 
2. first initialize the npm by npm init .
3. then type npm install(i) express .



template engine ************
to add dynamic data to the static web site we use template engine 
i:e- pug,handelbar etc...

to use handelbars we require a view engine which is hbs so to install this 
i:e - npm i hbs

their should to be a views directory in your root folder which is mandetory .

if we rename the views directory to any other name we have to give the path of that changed
named directory path to  (app.set('views',renamed_directory_name)) method using path.join operator .


partials **************
this is used for not to repeate same lines of code to extend same code to verious different pages (follow DRY concept)
by just givinf the directory path (code is in index.js) in partials_tut folder

we can add a 404 error page by just putting a "*" in url route (partials_tut/index.js)

query string **********
we can fetch the data from url also using query string
i:e - console.log(req.query)



NOTE : to detect if any changes is done with any file wheather its js or html of hbs file then we can run the nodemon by
just one command  i:e - nodemon file name -e file_extension(js,hbs,html,etc...)
ex - {nodemon index.js -e js,hbs,html,etc.....}