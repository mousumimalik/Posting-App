let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // to stop- when click on form submit button it'll automatically refresh. It'll not refresh automatically it'll update number of times it clicked.

    console.log("Button Clicked");

    formValidation(); // if we invoke here it'll run every time click on the submit button.

    // acceptData(); if we invoke this here every time click on submit button it'll push the data even if it's showing error.
});

let formValidation = () => {
    if( input.value === "" )  { // if the textarea/input is empty it'll show Failure otherwise if there's any input it'll show Success.
        msg.innerHTML = "Post cannot be blank"; // if textarea/input is blank show eroor message on the browser.

        console.log("Failure");
    }
    else {
        console.log("Success");

        msg.innerHTML = ""; // if there's input then remove error message from the browser.

        acceptData(); // if invoke here it will push data only if it's success.
    }
};

// formValidation(); if we invoke here/below the function it'll run ony one time coz js run from top to bottom.

// collected data by acceptData() will pushed here.
let data = {

};

// whatever gonna write on textarea/input will collect here & push inside the data.
let acceptData = () => {
    data["text"] = input.value; // pshing collected data inside data. -input.value; collecting data written inside textarea/input box.

    // console.log("Data Pushed");
    console.log(data); // it'll show the object stored in data.

    createPost();
};

// it'll show the typed data on the browser.
let createPost = () => {
    posts.innerHTML += `
        <div>
            <p>${ data.text }</p>
            <span class="options">
                <i onClick="editPost(this)" class="fas fa-edit"></i>
                <i onClick="deletePost(this)" class="fas fa-trash-alt"></i> 
            </span>
        </div>
    `;

    input.value = ""; // after posting/submitting the textarea/input box get empty again.
};

// delete a post. 
let deletePost = ( e ) => {
    // use this on trash icon onClick function coz it'll only click on that particular icon only.

    // e.remove(); remove the trash icon.

    // e.parentElement.remove(); delete both the icon coz deleting the parent of trash icon which includes edit icon also.
    
    e.parentElement.parentElement.remove(); // delete all- icons text, coz here we targeting parent's parent which is entire div.
};

// edit a post.
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML; // it'll go from the edit icon to span.option then goes to p tag.

    e.parentElement.parentElement.remove(); // it'll remove the post after editing it. Coz of this only edited post will posted otherwise both before edit & after edit post will posted.
};