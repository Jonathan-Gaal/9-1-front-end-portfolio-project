let URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com/api/quotes';

main = document.querySelector('.main')
imageOptions = document.querySelector('#imageOptions');
mainImage = document.querySelector('#mainImage');
selectImageBtn = document.querySelector('#selectImageBtn');

fetch(URL)
    .then(res => res.json())
    .then((resJson) => {


        console.log(resJson)
    })
    .catch((err) => {
    console.error(err)
    })

    console.log(imageOptions.value)


selectImageBtn.addEventListener('click', (e) => {
    
    if (imageOptions.value === "img1") {
        main.style.backgroundImage =
          "url('./assets/images/at-the-bazaar.jpeg')";
    }
    if (imageOptions.value === "img2") {
         main.style.backgroundImage = "url('./assets/images/bedu-camp-sunset.jpeg')"
    }
    if (imageOptions.value === "img3") {
      main.style.backgroundImage = "url('./assets/images/beirut-plaza.jpeg')";
    }
    if (imageOptions.value === "img4") {
        main.style.backgroundImage = "url('./assets/images/bukhara.jpeg')";
    }
     if (imageOptions.value === "img5") {
       main.style.backgroundImage = "url('./assets/images/instrument-player.jpeg')";
     }
     if (imageOptions.value === "img6") {
       main.style.backgroundImage = "url('./assets/images/market-in-jaffa.jpeg')";
     }
     if (imageOptions.value === "img7") {
       main.style.backgroundImage = "url('./assets/images/market.jpeg')";
     }
     if (imageOptions.value === "img8") {
       main.style.backgroundImage = "url('./assets/images/private-meeting.jpeg')";
     }
     if (imageOptions.value === "img9") {
       main.style.backgroundImage = "url('./assets/images/rug-seller.jpeg')";
     }
     if (imageOptions.value === "img10") {
       main.style.backgroundImage = "url('./assets/images/still-life.jpeg')";
     }
     if (imageOptions.value === "img11") {
       main.style.backgroundImage = "url('./assets/images/two-musicians.jpeg')";
     }
    



    })



    