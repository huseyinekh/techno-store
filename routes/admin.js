const Category = require('../models/Category');
const Product = require('../models/Product')
const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }

})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }
    else {
        cb(null, false);
    }

}
const upload = multer({
    storage, //storage:storage
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter
})


//add category 'POST' method

router.post('/categories', (req, res, next) => {

    const category = new Category(req.body);
    category.save((err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
});



//update category  'PUT' method

router.put('/categories/:category_id', (req, res, next) => {
    const promise = Category.findByIdAndUpdate(
        req.params.category_id,
        req.body,
        {
            new: true
        });

    promise.then((category) => {
        if (!category)
            next({ message: 'the category wAS NOT FOUND. ', code: 404 });
        res.json(category);
    }).catch((err) => {
        res.json(err)
    });
});



//delete category  'DELETE' method

router.delete('/categories/:category_id', (req, res) => {
    const promise = Category.findByIdAndRemove(req.params.category_id);

    promise.then((category) => {
        res.json(category)
    }).catch((err) => {
        res.json(err)
    });
});

router.post('/products', upload.single('productImage'), (req, res, next) => {
    console.log(req.file)
    const product = new Product(req.body)
    product.save((err, data) => {
        if (err)
            res.json(err);
        res.json(data);
    });
})

module.exports = router;