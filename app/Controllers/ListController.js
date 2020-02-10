import ListService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let screenLists = _store.State.lists
  let screenElem = document.getElementById("listRow")
  let template = ""
  screenLists.forEach(list => {
    template += list.Template
  })
  screenElem.innerHTML = template

}



//Public
export default class ListController {
  constructor() {
    console.log("list controller")
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  createList(event) {
    event.preventDefault()
    let listName = event.target.nameYourList.value
    //let text = formData.input.value
    console.log(listName)
    let newList = {
      listName: listName
    }
    ListService.createList(newList)
    _drawLists()

  }

  addItem(event, id) {
    event.preventDefault()
    ListService.addItem(event, id)
    _drawLists()

  }

  delList(id) {
    ListService.delList(id)
    _drawLists()
  }

  delItem(listId, itemId) {
    ListService.delItem(listId, itemId)
    _drawLists()
  }
}
