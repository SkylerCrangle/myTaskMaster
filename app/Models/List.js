import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //console.log("models list")
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listName = data.listNameModel;
    this.id = data.id || generateId();
    this.items = data.items || []
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you





  // get Template() {
  //   return /*html*/`
  //   <div class="row">
  //     <div class="col-5 bg-success p-2 m-4">

  //       <div class="row">
  //         <div class="col-12" id="idListTitle">'${this.listName}'</div>
  //       </div>    
  //   `
  // }

  get ListItems() {
    let template = ""
    this.items.forEach(item => {
      // template += item.Template
      template += `<div class="row justify-content-around">

      <div class="col-2">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1"> 
        </label>
        </div>
      </div>

      <div class="col-7" id="idListItem"> ${item}</div>

      <div class="col-2">
        <img class="img-fluid p-1" src="./deleteimg.png" alt="" onclick="">
      </div>

    </div>
      
      `
    })
    return template
  }

  get Template() {
    return /*html*/`
    <div class="row">

    <div class="col-5 bg-success p-2 m-4">

      <div class="row justify-content-around">
        <h1 class="col-7" id="idListTitle">${this.listName}</h1>
        <img class="img-fluid col-3" src="./deleteimg.png" alt="" onclick="app.listController.delList('${this.id}')">
        <div class="col-12">
          <form onsubmit="app.listController.addItem(event, '${this.id}')">
            <div class="form-group">
              <label for="nameYourItem">Create your next To-do Item:</label>
              <input type="text" name="nameYourItem" class="form-control" placeholder="Name your list">
            </div>
            <button class="m-2 col-3 btn btn-primary" type="submit">Create</button>
          </form>
        </div>
      </div>
      <div>${this.ListItems}</div>
      </div>
      
      </div>


`
  }




}
