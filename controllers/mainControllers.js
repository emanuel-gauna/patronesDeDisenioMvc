const path = require("path");/*  requerir "path" */

const controller = {
    home: (req, res) =>{/* propiedad  home*/
       return res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    about: (req, res) =>{/* metodo about */
            return res.sendFile(path.join(__dirname, "../views/about.html"))
        }
    }
module.exports = controller;