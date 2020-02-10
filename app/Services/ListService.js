import List from "../Models/List.js";
import _store from "../store.js";
//import swal from 'sweetalert';

//let testList = new List();



//Public
class ListService {
  constructor() {
    console.log("list service")
  }

  createList(object) {
    let newList = new List(object)
    _store.State.lists.push(newList)
    console.log(_store.State.lists)
    _store.saveState()

  }

  addItem(event, idList) {
    let newItem = event.target.nameYourItem.value
    console.log(newItem)
    let addItem = _store.State.lists.find(list => list.id === idList)
    addItem.items.push(newItem)
    console.log(_store.State.lists)
    _store.saveState()
  }

  delList(id) {
    let allLists = _store.State.lists.filter(list => list.id !== id)
    _store.State.lists = allLists
    _store.saveState()
  }

  //NOTE this is actually itemName not itemId - I just kept my variable name inacurate - oh well
  delItem(listId, itemId) {
    let onHere = _store.State.lists.find(list => list.id == listId)
    let delThis = onHere.items.findIndex(item => item == itemId)

    onHere.items.splice(delThis, 1)
    _store.saveState()

  }


  // confirmDelete() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}


const SERVICE = new ListService();
export default SERVICE;
