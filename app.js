const courseNameInput = document.querySelector("#courseNameInput");
const courseRatingInput = document.querySelector("#courseRatingInput");
const addBtn = document.querySelector("#btnAdd");
const coursesList = document.querySelector("#coursesList");
const alertCtrl = document.querySelector("ion-alert-controller");

clear = () => {
    courseNameInput.value = "";
    courseRatingInput.value = "";
}

addBtn.addEventListener("click", () => {
    const enteredCourseName = courseNameInput.value;
    const enteredCourseRating = courseRatingInput.value;

    if (
        enteredCourseName.trim().length <= 0 ||
        enteredCourseRating.trim().length <= 0 ||
        enteredCourseRating < 1 ||
        enteredCourseRating > 5
    ) {
        console.log("Invalid input");
        alertCtrl.create({
            header: "Invalid Input",
            message: "Please enter valid course and rating",
            buttons: ["Okay"],
        }).then((alertElement) => { alertElement.present(); });
        return;
    }
    const newItem = document.createElement("ion-item");
    newItem.innerHTML = `<strong>${enteredCourseName}</strong> &nbsp; ${enteredCourseRating}/5`;
    coursesList.appendChild(newItem);
    clear();
});