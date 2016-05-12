module.exports = function (app, mongo, db) {

  // Categories
  app.get('/admin/category', function (req, res) {
    db.collection('categories').find()
      .toArray(function (err, categories) {
        res.json(categories);
      }
    );
  });

  app.post('/admin/category', function (req, res) {
    db.collection('categories').insertOne(
      req.body,
      function (err, result) {
        db.collection('categories').find()
          .toArray(function (err, categories) {
            res.json(categories);
          }
        );
      });
  });

  app.get('/admin/category/:id', function (req, res) {
    var categoryId = new mongo.ObjectID(req.params.id);
    db.collection('categories').findOne({_id: categoryId}, function (err, doc) {
      res.json(doc);
    });
  });

  app.delete('/admin/category/:id', function (req, res) {
    var typeId = new mongo.ObjectID(req.params.id);
    db.collection('categories').deleteOne(
      {_id: typeId},
      function (err, results) {
        db.collection('categories').find()
          .toArray(function (err, categories) {
            res.json(categories);
          }
        );
      }
    );
  });

  app.get('/admin/category/:id/article', function (req, res) {
    db.collection('articles')
      .find({
        status: 'pending',
        category: req.params.id
      })
      .toArray(function (err, articles) {
        res.json(articles);
      }
    );
  });

};