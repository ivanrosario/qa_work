var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

// function Visible(elem, name){
//   webdriverio
//     .remote(options).init().url('https://internet.frontier.com/').isVisible(elem).then(function(img){
//       console.log( name+ ' was: ' + img);
//     })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });

// }

// Visible('.hero','hero');
// Visible('.graphic', 'graphic');
// Visible('.section--bg', 'section');


webdriverio
  .remote(options).init().url('https://internet.frontier.com/').elements('a').then(function(img){
    var value = img.value;
    value.forEach(element => {
      
      var word = img.elementIdAttribute(value.ELEMENT, 'href');
      console.log(word);
      
    });
    console.log(img);
  })
  .end()
  .catch(function(err) {
     console.log(err);
});


// webdriverio
//   .remote(options).init().url('https://internet.frontier.com/')
//   .addValue('#zip', '2345')
//   .click('#js-track-form-check-availability').then(function(result){

//   })
//   .end()
//   .catch(function(err) {
//       console.log(err);
//   });

// webdriverio
// .remote(options).init().url('https://internet.frontier.com/').getSource().then(function(img){
//   // var value = img.value;
//   // var word = 0;
//   // value.forEach(element => {
//   //   word++;
//   //   console.log(word);

//   // });
//   // console.log(img);
//   var count1 = (img.match(/href/g) || []).length;
//   console.log(count1);
// })
// .end()
// .catch(function(err) {
//    console.log(err);
// });


// webdriverio
//     .remote(options).init().url('https://internet.frontier.com/').then(function(){

//         var isVisible = webdriverio
//         .remote(options).init().url('https://internet.frontier.com/').isVisible('hero');
//         console.log('hero', isVisible); // outputs:true

//         isVisible = webdriverio
//         .remote(options).init().url('https://internet.frontier.com/').isVisible('.graphic');
//         console.log( 'graphic',isVisible); // outputs:true

//         isVisible = webdriverio
//         .remote(options).init().url('https://internet.frontier.com/').isVisible('.section--bg');
//         console.log( 'section', isVisible); // outputs:true
//       })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//    });