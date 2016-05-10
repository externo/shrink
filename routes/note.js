module.exports = function (app, mongo, db) {

  // Categories
  app.get('/admin/note', function (req, res) {
    db.collection('notes').find()
      .toArray(function (err, categories) {
        res.json(categories);
      }
    );
  });

  app.post('/admin/note', function (req, res) {
    db.collection('notes').insertOne(
      req.body,
      function (err, result) {
        db.collection('notes').find()
          .toArray(function (err, notes) {
            res.json(notes);
          }
        );
      });
  });

  app.delete('/admin/note/:id', function (req, res) {
    var typeId = new mongo.ObjectID(req.params.id);
    db.collection('notes').deleteOne(
      {_id: typeId},
      function (err, results) {
        db.collection('notes').find()
          .toArray(function (err, notes) {
            res.json(notes);
          }
        );
      }
    );
  });

};