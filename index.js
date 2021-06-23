//parent element to store cards
const taskContainer=document.querySelector(".task__container");
console.log(taskContainer);

//global store
//const globalStore=[];

// const loadInitialTaskCards=() => {
//   //access local storage
//  const getInitialData=localStorage.tasky;
//  if(!getInitialData)  return;
//   // convert strinified-object to object
//   const taskObjects =JSON.parse(getInitialData);
//   //map around the array to generate html cards and inject it to DOM
//   cards.map((cardObject) =>{
//     const createNewCard=newCard(cardObject);
//     taskContainer.insertAdjacentHTML("beforeend",createNewCard); //to insert inside parent element
//   globalStore.push(cardObject);
//   });
// };

const newCard=(
  {
  id,
  imageUrl,
  taskTitle,
  taskType,
  taskDescription,
})=>`<div class="col-md-6 col-lg-4 id=${id}">
<div class="card text-center">
<div class="card-header  d-flex justify-content-end gap-2">
  <button type="button" class="btn btn-outline-success">
    <i class="fas fa-pencil-alt"></i>
  </button>
  <button type="button" class="btn btn-outline-danger">
    <i class="fas fa-dumpster"></i>
  </button>
</div>
<img src=${imageUrl}
 class="card-img-top" alt="..."
/>
<div class="card-body">
  <h5 class="card-title">${taskTitle}</h5>
  <p class="card-text">${taskDescription}</p>
  <span class="badge bg-primary">${taskType}</span>
</div>
<div class="card-footer text-muted">
  <button type="button" class="btn btn-outline-primary float-end rounded-pill">
    Open Task</button>
</div>
</div>
</div>`;

const saveChanges = ()=> {
 const taskData = {
   id: `${Date.now()}`,  //unique number for card id
   imageUrl :document.getElementById("imageurl").value,
   taskTitle:document.getElementById("tasktitle").value,
   taskType: document.getElementById("tasktype").value,
   taskDescription: document.getElementById("taskdescription").value,
 };
 
 // HTML Code
 const createNewCard = newCard(taskData);
  taskContainer.insertAdjacentHTML("beforeend",createNewCard); //to insert inside parent element
  // globalStore.push(taskData);
  // //Application Programming Interface(API)
  // //adding to local storage
  // localStorage.setItem("tasky",JSON.stringify({cards: globalStore}));    
};
