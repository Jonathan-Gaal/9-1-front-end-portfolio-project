let URL = "https://pursuit-9-1-full-stack-project.herokuapp.com/api/quotes";

fetch(URL)
    .then(res => res.json())
    .then((resJson) => {


        console.log(resJson)
    })
    .catch((err) => {
    console.error(err)
    })

    