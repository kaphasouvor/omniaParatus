const list = document.querySelector('#song-list ul');
  const forms = document.forms;

  // delete songs
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add songs
  const addForm = forms['add-song'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const songName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    songName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    songName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(songName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide songs
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter songs
  const searchBar = forms['search-songs'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const songs = list.getElementsByTagName('li');
    Array.from(songs).forEach((song) => {
      const title = song.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        song.style.display = 'block';
      } else {
        song.style.display = 'none';
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });