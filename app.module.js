(function(app) {
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var AppComponent = app.AppComponent;
  
    app.AppModule = NgModule({
      imports: [BrowserModule, app.ServiceModule],
      declarations: [AppComponent],
      providers: [],
      bootstrap: [AppComponent]
    })
    .Class({
      constructor: function() { }
    });
  })(window.app || (window.app = {})); 