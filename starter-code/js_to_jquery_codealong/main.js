// Convert favorites list to jQuery:


function addToList(list, newThing) {
  var newThingLi = document.createElement('li');
  var newThingText = document.createTextNode(newThing);
  var newThingElement = `<li>${newThing}<li>`;
  newThingLi.appendChild(newThingText);
  list.appendChild(newThingLi);
}

window.onload = function() {
  //var button = document.getElementById('new-thing-button');
  var $button =$('#new-thing-button'); // second method
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');
  var $newThingInput = ${'#newThing'}
  $button.on('click', function(event)
  {
    event.preventDefault();
    var newThing = $newThingInput.val()
    if(newThing === '')
    {
      alert('You...')
    }
    else {
      addToList(thingList, newThing);
    }
  })

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList(thingList, newThing);
      newThingInput.value = '';
    }
  };

};
