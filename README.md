# ExpressJS-DailyCodeBuffer

Tutorial how to create webserver with ExpressJS NodeJS, tutorial reference from https://www.youtube.com/watch?v=ZfzGquJLCAA&amp;list=PLZlQKKTJoway8tq7SaWmKGy2Nlzespuyd&amp;index=6

# ExpressJS Start Project

1. Install express `$ npm install express`
2. Create server file `app.js`
3. How to run `$ node app`, because the file
4. Install nodemon `$ npm install -g nodemon`, nodemon ini supaya kita tidak perlu nge restart si server filenya, jadi tinggal refresh page aja, pakai nodemon hanya untuk develop not for production
5. run pakai nodemon `$ nodemon app.js` di terminal
6. Route /person

- run `http://localhost:5000/person`

7. Passing the params

- test `http://localhost:5000/person/alex/21`

8. Query string

- test `http://localhost:5000/person/alex/21?groupBy=name`
- test `http://localhost:5000/person/alex/21?groupBy=name&abc=xyz`
