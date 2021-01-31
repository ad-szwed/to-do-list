function newItem(){
    
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  // input check and adding valid input
  if (!inputValue) {
    alert('no input');
  } else {
    li.append(inputValue);
    $('#list').append(li);
  }

  // double-click crossing out
  li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
  });
  
  // delete button
  let deleteButton = $('<crossOutButton></crossOutButton>');
  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);
  deleteButton.on('click', deleteListItem);

  function deleteListItem() {
      li.addClass('delete')
  }
  $('#list').sortable();
}


