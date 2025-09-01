const express = require('express');
const router = express.Router();
const post = require('../models/post');
const user = require('../models/user');

const adminLayout = '../views/layouts/admin';
/*GET / 
 * Home page route  
*/
router.get('/', async (req, res) => {
  try {

     const locals = {
        title: 'Admin',
        description: "Simple blog created with NodeJS, Express, Mongodb and EJS"
    }

  return res.render('admin/index', { 
    locals,
    layout: adminLayout
  });
  } catch (error) {
    console.error(error);   
    return res.status(500).send('Internal Server Error');
  }
});

/*Post / 
 *Admin check lohin 
*/
router.post('/admin', async (req, res) => {
  try {

    const { username, password } = req.body;
    
     const locals = {
        title: 'Admin',
        description: "Simple blog created with NodeJS, Express, Mongodb and EJS"
    }

  return res.render('admin/index', { 
    locals,
    layout: adminLayout
  });
  } catch (error) {
    console.error(error);   
    return res.status(500).send('Internal Server Error');
  }
});

module.exports = router;