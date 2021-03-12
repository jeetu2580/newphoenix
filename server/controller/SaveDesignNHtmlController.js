var SaveDesignNHtmlController = module.exports;
var fs = require('file-system');


SaveDesignNHtmlController.init = (app,isAuthenticated,jwtVerify) =>{
 
    app.post('/saveDesign',jwtVerify, (req, res) => { 
        var Foldername = "./"+req.body.formValues.emailName;
        fs.mkdir(Foldername, function(err) {
            if (err) {
              return res.send({status : 406})
            } else {
                writeHtml(req.body, function(message) {
                     return res.send(message)
                
                })
               
            }
          })
      });
}
