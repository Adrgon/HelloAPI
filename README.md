# NAME
Adrian L Gonzalez - @adrgon 
http://algonzalez.me

# Hello-API
This is a RESTful JSON API created as a homework Assignment #1 for</br>
https://pirple.thinkific.com/courses/the-nodejs-master-class

## How to run the project?
0. Download the project.

1. Open the command prompt (for Windows, click Start icon and type in 'cmd') 

2. In the command line, go to the project directory:</br>
<code>cd C:/HelloAPI</code>

3. Run the app:</br>
<code>node index.js</code></br>
Optionally, one can set the environment as command line argument (with value of 'production' or 'staging').</br>
By default it's 'staging'.</br>
<code>node index.js production</code>(for Windows)</br>
<code>NODE_ENV=production node index.js</code>(for Linux)

4. The app should inform which ports are active.</br>

5. Open up a web browser. Make a request to one of the active ports, eg. **localhost:3000/hello**. (where 3000 is one of the ports from point 4)</br>

6. By default, the app responses with a A phrase from Roberto Fontana. </br>
