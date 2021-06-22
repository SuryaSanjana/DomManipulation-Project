//parent element to store cards
const taskContainer=document.querySelector(".task__container");
console.log(taskContainer);

const newCard=(
    {
    id,
    imageUrl,
    taskDAta,
    taskType,
    taskDescription,
})=>`<div class="col-md-6 col-lg-4">
<div class="card text-center">
  <div class="card-header  d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-dumpster"></i>
    </button>
  </div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlF12944TXKLlGMzXn6DQGu1N-yt6UE8vs4g&usqp=CAU"
   class="card-img-top" alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <span class="badge bg-primary">Amazing</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" class="btn btn-outline-primary float-end rounded-pill">
      Open Task</button>
  </div>
</div>
</div>`


const saveChanges = ()=> {
    const taskDAta ={
        id: `${Date.now()}`,  //unique number for card id
        imageUrl :document.getElementById("imageUrl").value,
        taskTitle:document.getElementById("tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };

    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend")
};