# FEND MY-READS

Project 7 of the [Front-End Web Developer Nanodegree with Udacity](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001). 

## For Users

- The goal of the application is to help you manage the state of a list of books. You have the choice between 3 shelves: **"Currently Reading"**, **"Want to read"** and **"read"**.

- You can see the state of the books in the main page (path: _"/"_).

- You can search for new books in the _"/search"_ page.

- Use the buttons **Reading**, **Want to**, **Read** and **None** to move the books to another shelf.

- **None** allows you remove the book from every shelves.

## For Developers 

### Dependencies

- Install all the project dependencies with `npm install`
- Start the development server with `npm start`
- You will need [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)
- You will need [`prop-types`](https://www.npmjs.com/package/prop-types)

The component structure is the following:
```
<App />
----- <Header />
----- <FooterNav />
----- <SearchPage />
---------- <SearchInput />
---------- <BookItem />
--------------- <MoveShelfButton />
----- <MainPage />
---------- <Shelf />
--------------- <BookItem />
-------------------- <MoveShelfButton />
```

- The main state with the list of searched books (result of the search in the search page) and the list of the books (with shelves) displayed in the main page lives in **<App />**

- **<SearchInput />** has its own state for the query.