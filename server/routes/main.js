const express = require('express');
const router = express.Router();
const post = require('../models/post');
/**
 * GET /
 * Home page route
 */
router.get('', async (req, res) => {
  try {
     const locals = {
        title: "NodeJS Blog",
        description: "Simple blog created with NodeJS, Express, Mongodb and EJS"
    }

    let perPage = 5;
    let page = req.query.page || 1;
    const data = await post.aggregate([ { $sort: {createdAt: -1} } ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();
    const count = await post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', { 
        locals,
        data,
        current: page, 
        nextPage: hasNextPage ? nextPage : null,
    }); 
 

    
    return res.render('index', { locals, data});
  } catch (error) {
    console.error(error);   
    return res.status(500).send('Internal Server Error');
  }
});





router.get('/about', (req, res) => {
  res.render('about',);
});


// function insertPostData (){
//     post.insertMany([
//         {
//             title: "Getting Started with Node.js",
//             body: "Node.js is a powerful JavaScript runtime built on Chrome's V8 engine. In this post, we'll explore how to set up your first Node.js project and run a simple server."
//         },
//         {
//             title: "Understanding Express Middleware",
//             body: "Middleware functions are the heart of Express applications. Learn how to use and write your own middleware to handle requests, responses, and errors."
//         },
//         {
//             title: "Connecting MongoDB with Mongoose",
//             body: "Mongoose makes it easy to work with MongoDB in Node.js. This article covers how to define schemas, models, and perform CRUD operations."
//         },
//         {
//             title: "Building RESTful APIs with Express",
//             body: "RESTful APIs are essential for modern web applications. Discover how to design and implement a REST API using Express and best practices."
//         },
//         {
//             title: "EJS Templating in Express Apps",
//             body: "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. Learn how to integrate EJS into your Express projects."
//         },
//         {
//             title: "User Authentication with Passport.js",
//             body: "Secure your Node.js applications by implementing user authentication with Passport.js. This post covers local strategy and session management."
//         },
//         {
//             title: "Deploying Node.js Apps to Heroku",
//             body: "Take your Node.js app live by deploying it to Heroku. Follow this step-by-step guide to get your project online quickly and easily."
//         },
//         {
//             title: "Handling File Uploads in Node.js",
//             body: "Learn how to handle file uploads in your Node.js applications using the Multer middleware, including storing files and validating uploads."
//         },
//         {
//             title: "Error Handling Best Practices",
//             body: "Robust error handling is crucial for any application. Explore strategies for catching, logging, and responding to errors in Express."
//         },
//         {
//             title: "Securing Express Apps",
//             body: "Protect your Express applications from common vulnerabilities by implementing security best practices, including helmet, rate limiting, and input validation."
//         }
//     ])
// }

// insertPostData();

module.exports = router;