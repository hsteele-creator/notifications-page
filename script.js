const readBtn = document.querySelector("#read");
const comments = document.querySelectorAll(".comment");
const notifications = document.querySelector("#notifications")

let marked = []



for(let comment of comments) {
    comment.addEventListener("click", function() {
        comment.classList.toggle("marked")

        if(!marked.includes(comment.id)) {
            marked.push(comment.id)
        } else {

            for(let i = 0; i < marked.length; i++) {
                if(marked[i] == comment.id) {
                    marked.splice(i, 1)
                }
            }
        }   
        notifications.innerText = `Notifications ${marked.length}`

        console.log(marked)
    })
}


readBtn.addEventListener("click", function() {
    marked = []
    notifications.innerText = `Notifications ${marked.length}`

    for(let comment of comments) {
        comment.classList.remove("marked")
    }
})