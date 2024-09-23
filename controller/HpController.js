const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    abouts:(req, res)=>{
        res.render('abouts');
    },
    contacts:(req, res)=>{
        res.render('contacts');
    },
    users:(req, res)=>{
        res.render('users');
    },
    products:(req, res)=>{
        res.render('products');
    }
};
module.exports = con;