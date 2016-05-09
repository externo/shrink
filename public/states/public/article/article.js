'use strict';

angular
  .module('app')
  .controller('ArticleController', ArticleController);

function ArticleController(baseUrl, ArticleService, CategoryService) {

  var Article = this;

  Article.baseUrl = baseUrl;
  Article.currentArticle = null;      // temp variable for edit selected article
  Article.newArticle = null;          // temp variable for add new article
  Article.openForm = false;        // help variable for toggle open/close for add-new-article form
  Article.openArticle = false;        // help variable for toggle open/close for edit-current-article form

  Article.inRange = function (articleDatetime, dateRange) {

    return inRange(articleDatetime, dateRange);
  };

  Article.toggleForm = function () {
    Article.openForm = !Article.openForm;
    Article.openArticle = false;
  };

  Article.addArticle = function () {

    var msg = 'Добавена е статия със заглавие ' + Article.newArticle.title + ' в категория ' + Article.newArticle.category;

    Article.newArticle.status = 'pending';

    var file = Article.newImage;
    var fileData = new FormData();
    fileData.append('file', file);
    var options = {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined}
    };

    FileService.upload(fileData, options, function (res) {
      Article.newArticle.image = res;
      Article.newArticle.datetime = new Date();
      Article.newImage = null;

      ArticleService.create(Article.newArticle, function (res) {
        Article.articles = res;
        Article.openForm = false;
        Article.newArticle = null;

        NotyService.success(msg);
        HistoryService.create(msg, 'success');
      });
    });

  };

  Article.getArticle = function (id) {
    ArticleService.find(id, function (res) {
      Article.currentArticle = res;
      Article.openForm = false;
      Article.openArticle = true;
    });
  };

  Article.editArticle = function () {

    var msg = 'Редактирана е статия със заглавие ' + Article.currentArticle.title + ' в категория ' + Article.currentArticle.category;

    if (Article.editImage) {
      FileService.remove(Article.currentArticle.image);

      var file = Article.editImage;
      var fileData = new FormData();
      fileData.append('file', file);
      var options = {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      };

      FileService.upload(fileData, options, function (res) {
        Article.currentArticle.image = res;
        Article.currentArticle.datetime = new Date();
        Article.editImage = null;

        ArticleService.update(Article.currentArticle, function (res) {
          Article.articles = res;
          Article.openArticle = false;
          Article.currentArticle = null;

          NotyService.success(msg);
          HistoryService.create(msg, 'warning');
        });
      });
    } else {
      Article.currentArticle.datetime = new Date();
      ArticleService.update(Article.currentArticle, function (res) {
        Article.articles = res;
        Article.openArticle = false;
        Article.currentArticle = null;

        NotyService.success(msg);
        HistoryService.create(msg, 'warning');
      });
    }

  };

  Article.archiveArticle = function () {
    Article.currentArticle.status = 'archive';

    var msg = 'Архивирана е статия със заглавие ' + Article.currentArticle.title + ' в категория ' + Article.currentArticle.category;

    ArticleService.update(Article.currentArticle, function (res) {
      Article.articles = res;
      Article.openArticle = false;
      Article.currentArticle = null;

      SoundService.archive();
      NotyService.info(msg);
      HistoryService.create(msg, 'info');
    });
  };

  Article.removeArticle = function () {
    if (Article.currentArticle.file) {
      var id = Article.currentArticle.file;
      FileService.remove(id);
    }

    var msg = 'Изтрита е статия със заглавие ' + Article.currentArticle.title + ' в категория ' + Article.currentArticle.category;

    ArticleService.remove(Article.currentArticle._id, function (res) {

      Article.articles = res;
      Article.openArticle = false;
      Article.currentArticle = null;

      SoundService.deleteArticle();
      NotyService.error(msg);
      HistoryService.create(msg, 'danger');
    });
  };

  Article.cancelArticle = function () {
    Article.openArticle = false;
    Article.currentArticle = null
  };

  ArticleService.findAll(function (response) {
    var articlesLength = response.length;
    if (articlesLength) {
      articlesLength > 1 ? NotyService.info('Заредени са ' + response.length + ' статии') : NotyService.info('Заредена е 1 статия');
    } else {
      NotyService.info('Няма добавени статии');
      NotyService.success('Добавете статия чрез бутона [Добави]');
    }
    Article.articles = response;
  });

  CategoryService.findAll(function (response) {
    Article.categories = response;
  });

}
