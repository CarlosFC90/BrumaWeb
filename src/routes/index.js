const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req,res) => {
    res.render('index.html', {title: 'BRUMA'});
});

router.get('/gallery', (req,res) => {
    res.render('gallery.html', {title: 'Gallery'});
});

router.get('/discography&eps', (req,res) => {
    res.render('discography&eps.html', {title: 'Discography & EPs '});
});

router.get('/tours', (req,res) => {
    res.render('tours.html', {title: 'Dates Tours'});
});

router.get('/contact', (req,res) => {
    res.render('contact.html', {title: 'Contact Page'});
});




module.exports = router;