// function myFunction() {
//     var txt;
//     var person = prompt("Add some thing to do", "Type here");
//     if (person == null || person == "") {
//         txt = "Nothing to do";
//     } else {
//         txt = person;
//     }
//     document.getElementById("todo1").innerHTML = txt;
//     document.getSelection().innerHTML = txt;
// }

const add = document.querySelector('.add')
const todo = document.querySelector('.todo ul')
const done = document.querySelector('.done ul')
const todone = document.querySelectorAll('.it button')
const del = document.querySelector('.delete')

function addTodo(e){
  const stuff = window.prompt("Add another to do Item")
  if(stuff === null) return
  todo.innerHTML += `
    <li class="it"> ${stuff} <button> > </button></li>
  `
  const todone = document.querySelectorAll('.it button')
  todone.forEach(function(change){
    change.addEventListener('click', function(e){
      moveTodo(e)
    })
  })
}

function moveTodo(e){
  done.appendChild(e.target.parentNode)
  e.target.parentNode.removeChild(e.target)
}

add.addEventListener('click',function(e){
  addTodo(e)
})

todone.forEach(function(change){
  change.addEventListener('click', function(e){
    moveTodo(e)
  })
})

del.addEventListener('click', function(e){
  const doneItems = done.querySelectorAll("li")
  if(doneItems.length === 0) return
  done.removeChild(doneItems[0])
})