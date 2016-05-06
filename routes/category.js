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
    console.log(req.body);
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

};