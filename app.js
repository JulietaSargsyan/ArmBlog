const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {
            title: 'How to make Pizza at home',
            img: '/img/pizza.jpg',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsuLorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to prepare home for child',
            img: '/img/kidsRoom.jpg',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to go on vacation with kids',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to prepare for birthday',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to make Pizza at home',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsuLorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to prepare home for child',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to go on vacation with kids',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
        {
            title: 'How to prepare for birthday',
            text: 'Lorem ipsum dolor sit amet consectatur dolor sit amet consectatur, lroem ipsum'
        },
    ]
    res.render('index', { title: 'Home', blogs });
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Crreate Blog' });
})

app.use((req, res) => {
    res.status(404).render('404', { title: '404 Page' })
})