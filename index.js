// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    completeTask: function () {
      this.complete = true;
    }


  }

  return task;
}

const task1 = newTask("Clean Cat Litter", "If litter is overly dirty, dispose of all the litter and pour new litter into the litter box. Else scoop the cat doings into a trash bag and dispose.");

const task2 = newTask("Do Laundry", "Place dirty garments into the washing machine. Add detergent, set desired cycle, and push start. Once washing is complete, transfer the wet articles into the dryer. Now, select the desired cycle and push start. Upon completion retrieve and fold the articles and put away.");
 // task 1

const tasks = [task1, task2]

task1.logTaskState(task1); // Clean Cat Litter has not been completed
task1.completeTask(task1);
task1.logTaskState(task1); // Clean Cat Litter has been completed
