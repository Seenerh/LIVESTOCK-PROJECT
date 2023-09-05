const forms = document.querySelector(".forms"),
    pwsShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwsShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bxs-hide", "bxs-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bxs-show", "bxs-hide");
        })
    })
})

links.forEach(link => {
        link.addEventListener("click", e => {
            preventDefault(); //prevent form submit
            form.classList.toggle("show-singup");
        })

    })
    // console.log(forms, pwsShowHide, links);