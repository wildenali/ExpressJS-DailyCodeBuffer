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

9. Static Files

- test `http://localhost:5000/index`

10. GET

- test `http://localhost:5000/api/movies`

11. GET Detail

- test `http://localhost:5000/api/movies/2`

12. CREATE, post data

- Open postman
- Pastikan pada POST request
- Setup postman sebagai `POST` method
- Masukkan `http://localhost:5000/api/movies`
- Pilih `Body`, setelah itu kemudian pilih `raw`
- Ganti mode `text` jadi `JSON (application/json`
- Masukkan di raw tersebut

```
{
	"name": "Frozen"
}
```

- Click `Send`
- Cek Hasilnya di Body > Pretty bagian bawah postman

13. Joi module, for validation

- Install joi `$ npm i @hapi/joi`

- Open postman
- Pastikan pada POST request
- Setup postman sebagai `POST` method
- Masukkan `http://localhost:5000/api/movies`
- Pilih `Body`, setelah itu kemudian pilih `raw`
- Ganti mode `text` jadi `JSON (application/json`
- Masukkan di raw tersebut

```
{
	"name": "Frozen"
}
```

- coba juga kalau kirim kosong, apa hasilnya

```
{

}
```

- Click `Send`
- Cek Hasilnya di Body > Pretty bagian bawah postman

14. UPDATE, PUT data

- Open postman
- Pastikan pada PUT request
- Setup postman sebagai `POST` method
- Masukkan `http://localhost:5000/api/movies/1`
- Pilih `Body`, setelah itu kemudian pilih `raw`
- Ganti mode `text` jadi `JSON (application/json`
- Masukkan di raw tersebut

```
{
	"name": "Frozen 2"
}
```

- Click `Send`
- Cek Hasilnya di Body > Pretty bagian bawah postman

15. DELETE, delete data

- Open postman
- Pastikan pada DELETE request
- Setup postman sebagai `DELETE` method
- Masukkan `http://localhost:5000/api/movies/1`
- Click `Send`
- Cek Hasilnya di Body > Pretty bagian bawah postman

16. Cek Midleware, cek aja semua http request nya, GET, CREATE, UPDATE, DELETE
