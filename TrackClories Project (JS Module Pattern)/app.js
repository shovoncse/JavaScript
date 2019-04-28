// Storage Controller
const StroageCtrl = (function (){
  // Public Methods
  return {
    storeItems: function (item){
      let items;

      // Check if any items in ls
      if(localStorage.getItem('items') === null){
        items = [];
        // Push New Items
        items.push(item);
        // Set ls
        localStorage.setItem('items', JSON.stringify(items));
      }else {
        // Get what is already in ls
        items = JSON.parse(localStorage.getItem('items'));

        // Push new items
        items.push(item);

        // Reset LS
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function (){
      let items;

      // Check if any items in ls
      if(localStorage.getItem('items') === null){
        items = [];
      }else {
        // Get what is already in ls
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },
    deleteFromLs: function (id){
      
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(item.id === id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items',JSON.stringify(items));

    },
    updateItemLs: function (updatedItem){

      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(updatedItem.id === item.id){
          items.splice(index, 1 , updatedItem);
        }
      });

      localStorage.setItem('items',JSON.stringify(items));
    },
    clearAllFromStorage: function (){
      localStorage.removeItem('items');
    }
  }
})();

// Item Controller
const ItemCtrl = (function(){

  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;

  }

  // Data Structure / Null
  const data = {
    items: StroageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // Public Methods
  return {

    getItems: function (){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      }else{
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create new Item
      newItem = new Item(ID, name, calories);

      // Add to Item Array
      data.items.push(newItem);
      return newItem;
    },
    updateItem: function(updateName, updateCalories){

      // Calories to number
      calories = parseInt(updateCalories);

      let found = null;

      data.items.forEach(item => {
        if(item.id === data.currentItem.id){

          item.name = updateName;
          item.calories = calories;
          found = item;
        }
      });

      return found;

    },
    deleteItem: function (id){
      // get ids
      const ids = data.items.map(item => {
        return item.id;
      });

      // Get Index
      const index = ids.indexOf(id);

    // Remove Item
    data.items.splice(index, 1);
    
    },
    clearAll: function (){
      // Remove Item
      data.items = [];
    
    },
    setCurrentItem: function (item){
      data.currentItem = item;
    },
    getCurrentItem: function (){
      
      return data.currentItem;
    },
    getTotalCalories: function (){
      
      let total = 0;

      // loop through items and add cals
      data.items.forEach(item => {
        total += item.calories;
      });

      //Set total cal in data structure
      data.totalCalories = total;

      return data.totalCalories;

    },
    getItemById: function (id){
      let found = null;

      // loop through items
      data.items.forEach(item => {
        if(item.id === id){
          found = item;
        }
      });

      return found;
    },
    logData: function (){
      return data;
    }
  }
})(); 



// UI Controller
const UICtrl = (function(){
  
  const UISelector = {
    itemList: '#item-list',
    allItemsInList: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemNameInput: '#item-name',
    itemCalorieInput: '#item-calories',
    totalCaloies: '.total-calories',
    clearBtn: '.clear-btn'
  } 
  // Public Methods
  return {

    // Populate Items List
    populateItemList: function(Items){
      let html = '';
      Items.forEach(item => {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });

      // Inser List Items
      document.querySelector(UISelector.itemList).innerHTML = html;
    },
    getSelectors: function (){
      return UISelector;
    },
    getinput: function(){
      return {
        name:document.querySelector(UISelector.itemNameInput).value,
        calories:document.querySelector(UISelector.itemCalorieInput).value
      }
    },
    addListItem:function (item){
      // Show the List
      document.querySelector(UISelector.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add Class
      li.className = 'collection-item';
      // Add Id
      li.id = `item-${item.id}`;
      // Add html
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories}</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>
      `;

      // Insert Item
      document.querySelector(UISelector.itemList).insertAdjacentElement('beforeend', li);

    },
    hideList: function (){
      document.querySelector(UISelector.itemList).style.display = 'none';
    },
    showTotalCalories: function (totalCal){
      document.querySelector(UISelector.totalCaloies).textContent = totalCal;
    },
    clearFields: function (){
      document.querySelector(UISelector.itemNameInput).value = '';
      document.querySelector(UISelector.itemCalorieInput).value = '';
    },
    addItemToForm: function (){
      document.querySelector(UISelector.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelector.itemCalorieInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    updateListItem: function (item){
      let listItems = document.querySelectorAll(UISelector.allItemsInList);

      // Turn Nodelist into array (i think not necessary);
      // listItems = Array.from(listItems);

      listItems.forEach(listItem => {
        const itemId = listItem.getAttribute('id');

        if(itemId === `item-${item.id}`){
          document.querySelector(`#${itemId}`).innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
          `;
        }
      });
    },
    deleteListItem: function (id){
      const itemId = `#item-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    removeItems: function (){
      let listItems = document.querySelectorAll(UISelector.allItemsInList);

      // Turn Node list into Array;
      listItems = Array.from(listItems);

      listItems.forEach(item => item.remove());

    },
    clearEditState: function (){
      UICtrl.clearFields();
      document.querySelector(UISelector.updateBtn).style.display = 'none';
      document.querySelector(UISelector.deleteBtn).style.display = 'none';
      document.querySelector(UISelector.backBtn).style.display = 'none';
      document.querySelector(UISelector.addBtn).style.display = 'inline';
    },
    showEditState: function (){
      document.querySelector(UISelector.updateBtn).style.display = 'inline';
      document.querySelector(UISelector.deleteBtn).style.display = 'inline';
      document.querySelector(UISelector.backBtn).style.display = 'inline';
      document.querySelector(UISelector.addBtn).style.display = 'none';
    }
  }

})();


// App Controller
const App = (function(ItemCtrl, UICtrl, StroageCtrl){

  // Load Event Listeners
  const loadEventListeners = function(){
    // Get Ui selectors
    const UISelector = UICtrl.getSelectors();

    // Add Item Event
    document.querySelector(UISelector.addBtn).addEventListener('click', itemAddSubmit);

    // Disable Submit on enter
    document.addEventListener('keypress', e => {
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });
    // Edit Icon Click
    document.querySelector(UISelector.itemList).addEventListener('click', itemEditClick);
    // Update Item Event
    document.querySelector(UISelector.updateBtn).addEventListener('click', itemUpdatesubmit);
    
    // Delete Item Event
    document.querySelector(UISelector.deleteBtn).addEventListener('click', deleteItem);
    
    // Clear Items Event
    document.querySelector(UISelector.clearBtn).addEventListener('click', clearAllItemsClick);
    
    // Back Btn Event
    document.querySelector(UISelector.backBtn).addEventListener('click', () => {
      UICtrl.clearEditState()}
      );
  }

  // Add Item Submit
  const itemAddSubmit = function(e){
    //Get form Input from UI Controller
    const input = UICtrl.getinput();

    // Check for name & calorie input
    if(input.name !== '' && input.calories !== ''){

      // Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      
      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories(); 
      // Add Total Calories in UI
      UICtrl.showTotalCalories(totalCalories);
      // StoreIn Local Storage
      StroageCtrl.storeItems(newItem);
      // Clear Fields
      UICtrl.clearFields();
    }
    e.preventDefault();
  }

  const itemEditClick = function (e){
    // Event Delegation
    if(e.target.classList.contains('edit-item')){
      
      // Get List Item ID (item-0, item-1)
      const listId = e.target.parentNode.parentNode.id;
      // Break into an array
      const listIdArr = listId.split('-');
      // Get the actual id
      const id = parseInt(listIdArr[1]);
      // Get Item
      const itemToEdit = ItemCtrl.getItemById(id);
      // Set Current Item
      ItemCtrl.setCurrentItem(itemToEdit);
      //Add Item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  const itemUpdatesubmit = function (e){
    
    //Get form Input from UI Controller
    const input = UICtrl.getinput();

    // Check for name & calorie input
    if(input.name !== '' && input.calories !== ''){

      // Add Item
      const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
      
      // Update item to UI list
      UICtrl.updateListItem(updatedItem);

      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories(); 
      // Add Total Calories in UI
      UICtrl.showTotalCalories(totalCalories);
      
      // Update Local Storage
      StroageCtrl.updateItemLs(updatedItem);
    
      // Clear Edit State
      UICtrl.clearEditState();
    }

    e.preventDefault();
  } 

  const deleteItem = function (e){

    // Get Current Item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from Data Structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete From UI
    UICtrl.deleteListItem(currentItem.id);

    // Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories(); 
    // Add Total Calories in UI
    UICtrl.showTotalCalories(totalCalories);
    // Delete From Storage
    StroageCtrl.deleteFromLs(currentItem.id);
    // Clear Edit State
    UICtrl.clearEditState();
    

    e.preventDefault();
  }

  const clearAllItemsClick = function (){
    // Delete all Items from DetaStruture
    ItemCtrl.clearAll();
    // Get Total Calories
    const totalCalories = ItemCtrl.getTotalCalories(); 
    // Add Total Calories in UI
    UICtrl.showTotalCalories(totalCalories);
    // Remove From UI
    UICtrl.removeItems();
    // Clear From LS
    StroageCtrl.clearAllFromStorage();
    // Hide UL
    UICtrl.hideList();
  }

  // Public Methods
  return {
      init: function(){
      // Clear edit state / set initial set
      UICtrl.clearEditState();
      //Initially Fetch Items from Data Structure
       const Items = ItemCtrl.getItems();

      //  Check if any items
      if(Items.length === 0){
        UICtrl.hideList();
      }else{
      // Populate list With items
       UICtrl.populateItemList(Items);
      }
      
      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories(); 
      // Add Total Calories in UI
      UICtrl.showTotalCalories(totalCalories);
      // Load Event Listeners
      loadEventListeners();

      }
  }

})(ItemCtrl, UICtrl , StroageCtrl);

// Initialize App
App.init();