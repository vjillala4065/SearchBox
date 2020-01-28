(function(app) {
    const Component = ng.core.Component;
    const NgModule = ng.core.NgModule;
    const CommonModule = ng.common.CommonModule;
    const FormsModule = ng.forms.FormsModule;
    
      app.TestService = function () {
          this.message = 'Hello Message Test';
      };
         
    app.searchComponent = Component({
          selector: 'search',
          template: `
          <div class="search-container">
          <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback"></span>
          <input type="text" class="form-control" placeholder="Search" #myInput [(ngModel)]="name" (input)="filterItem(myInput.value)" (keydown)="keyPressHan($event)"/>
          <button class="reset" *ngIf="name !== ''"  type="reset" (click)="resetItems()"  ><span  class="fa fa-times form-control-feedback clear-icon"></span></button>
        </div>
          <div *ngIf="name !== ''">
          <ul>
            <li *ngFor="let item of filteredItems" [innerHTML]="highTest(myInput.value, item.name)" ></li>
          </ul>
          </div>
          </div>`,
          providers: [app.TestService]
      })
      .Class({
          constructor: [app.TestService, function(testService) {
              this.title = 'sdfsf';
              this.body =  'Service Body Test';

              this.testService = testService;
              this.name = '';
              this.items = items = [
                {
                  name: 'First item'
                },
                {
                  name: 'Second item'
                },
                {
                  name: 'Third item'
                },
                {
                    name: "Coffees teas"
                },
                {
                    name: 'Sweet and savory sauces'
                },
                {
                    name: 'Desserts and candies'
                },
                {
                    name: 'Smetana, Quark and Cheddar Cheese'
                },
                {
                    name: 'Breads, crackers, pasta, and cereal'
                },
                {
                    name: 'Beers, and ales'
                },
                {
                    name: 'Selishes, spreads, and seasonings'
                },
                {
                    name: 'Sweet breads'
                },
                {
                    name: 'Cheese Burger'
                },

              ];
          }],
          ngOnInit: function() {
  
          },
          filterItem: function(value){
            if(!value){
                this.assignCopy();
            }
            
            this.filteredItems = Object.assign([], this.items).filter(
               item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
            )
         },
         highTest: function(value, nameText) {
             if(!value) return '';
            const index = nameText.toLowerCase().indexOf(value.toLowerCase());
            if(index !== -1){
                return nameText = nameText.substring(0,index) + "<b>" + nameText.substring(index,index+value.length) + "</b>" + nameText.substring(index + value.length);
                
                
            } else {
                return nameText;
            }
         },
         assignCopy: function(){
            this.filteredItems = Object.assign([], this.items);

         },
         resetItems: function(){
             this.name = ''
         },
         keyPressHan: function(event){
            if (event.key === "Escape") {
               this.resetItems()
            }
         }
      });
      
         
     app.ServiceModule = NgModule({
      imports: [CommonModule, FormsModule],
      declarations: [app.searchComponent],
      exports: [app.searchComponent]
    })
    .Class({
      constructor: function() { }
    });
      
    app.AppComponent = Component({
      selector: 'my-app',
      template:
        `
        <search></search>
        `
    })
    .Class({
      constructor: function AppComponent() { }
    });
  
  })(window.app || (window.app = {}));
  