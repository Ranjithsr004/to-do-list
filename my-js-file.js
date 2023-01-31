const taskcontainer = document.querySelector(".task_container");
const globalstore = [];
console.log(taskcontainer);
const generateNewcard = (taskData) =>`
  <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-pencil"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button>
      </div>
      <div class="card-body">
         <img src=${taskData.imageUrl} class="card-img-top" alt="...">
        <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
        <p class="card-text">${taskData.taskDescription}</p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
    </div>
    </div>
  `;

const loadinitialcarddata = () =>
{
    //localstorage to get tasky card data
  const getCardData = localStorage.getItem("tasky");

  //convert to normal object
  const {cards} = JSON.parse(getCardData);

  //loop over these array of task object to create html , insert it to DOM
  cards.map((cardObject) => {
    taskcontainer.insertAdjacentHTML("beforeend",generateNewcard(cardObject));
      //update our globalstore
      globalstore.push(cardObject);
  }
  )

};
const savechanges = () => {
  const taskData = {
    id:`${Date.now()}`,
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value
  };
  taskcontainer.insertAdjacentHTML("beforeend",generateNewcard(taskData));

  globalstore.push(taskData);
  localStorage.setItem("tasky",JSON.stringify({cards:globalstore}));
} ;

//issue

//page refreshes will cause the data to get deleted
