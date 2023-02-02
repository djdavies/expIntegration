var express = require('express');
const { render } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('https://dummyjson.com/users')
    .then((res) => {
      return res.json() 
    })
    .then((jsonResponse) => {
      // In the console if you prefer.
      // console.log(jsonUsers);
      // Hand the object over to the JADE/PUG view.
      res.render('users', { title: 'All Users', message: 'All user data', allUsers: JSON.stringify(jsonResponse)})
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
});

// Get IDs 
// sorry repetition.
router.get('/id', function(req, res) {
  fetch('https://dummyjson.com/users')
    .then((res) => {
      return res.json() 
    })
    .then((jsonResponse) => {
      // In the console if you prefer.
        var allIds = Object.keys(jsonResponse.users).forEach((prop)=> console.log(prop));
      
      // Hand over to the JADE/PUG view.
      res.render('users', { title: 'All IDs', message: 'All user IDs', allIds: JSON.stringify(allIds)})
    })
    .catch((err) => {
      // handle error
      console.error(err);
    });
});

// Names
// router.get('/name', function(req, res) {
//   fetch('https://dummyjson.com/users')
//     .then((res) => {
//       return res.json() 
//     })
//     .then((jsonResponse) => {
//       // In the console if you prefer.
//         var allIds = Object.keys(jsonResponse.users).forEach((prop)=> console.log(prop));
      
//       // Hand over to the JADE/PUG view.
//       res.render('users', { title: 'All IDs', message: 'All user IDs', allIds: JSON.stringify(allIds)})
//     })
//     .catch((err) => {
//       // handle error
//       console.error(err);
//     });
// });

// Last Names:
// router.get('/lastname', function (req, res) {
//   res.render('users', { title: 'User IDs'});
//   fetch('https://dummyjson.com/users')
//   .then((res) => { 
//     // status = res.id; 
//     return res.json() 
//   })
//   .then((jsonResponse) => {
//     const userIds = JSON.parse(jsonResponse);
//     console.log(userIds.count);
//   })
//   .catch((err) => {
//     // handle error
//     console.error(err);
//   });
// });

// router.get('/email', function (req, res) {
//   res.render('users', { title: 'User IDs'});
//   fetch('https://dummyjson.com/users')
//   .then((res) => { 
//     // status = res.id; 
//     return res.json() 
//   })
//   .then((jsonResponse) => {
//     const userIds = JSON.parse(jsonResponse);
//     console.log(userIds.count);
//   })
//   .catch((err) => {
//     // handle error
//     console.error(err);
//   });
// });

// router.get('/phone', function (req, res) {
//   res.render('users', { title: 'User IDs'});
//   fetch('https://dummyjson.com/users')
//   .then((res) => { 
//     // status = res.id; 
//     return res.json() 
//   })
//   .then((jsonResponse) => {
//     const userIds = JSON.parse(jsonResponse);
//     console.log(userIds.count);
//   })
//   .catch((err) => {
//     // handle error
//     console.error(err);
//   });
// });

module.exports = router;
