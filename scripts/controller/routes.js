
page('/booklist-client/', () => app.Book.fetchAll(app.booksView.initIndexPage));

page('/booklist-client/books/:id', ctx => app.booksView.initBookPage(ctx));


page('/booklist-client/add', ctx => app.booksView.initAddPage(ctx));

page('/', () => app.Book.fetchAll(app.booksView.initIndexPage));

page();