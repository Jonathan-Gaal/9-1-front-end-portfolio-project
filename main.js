let URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com/api/quotes';

main = document.querySelector('.main')
imageOptions = document.querySelector('#imageOptions');
mainImage = document.querySelector('#mainImage');
selectImageBtn = document.querySelector('#selectImageBtn');
selectQuotesAside = document.querySelector(".select-quotes-aside");
header = document.querySelector('.header');
footer = document.querySelector('.footer');



fetch(URL)
    .then(res => res.json())
  .then((resJson) => {
      
    resJson.forEach((el) => {
      const asideQuoteP = document.createElement("p");
      asideQuoteP.innerText = el.quote;
      selectQuotesAside.append(asideQuoteP);
      asideQuoteP.addEventListener('click', ()=> {
        const quoteH1 = document.createElement('h1');
        quoteH1.innerText = `${el.quote}  -  ${el.author}`;
        footer.innerHTML = '';
        footer.append(quoteH1);
        quoteH1.style.fontSize = '20px'

      })
    });

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
       main.style.backgroundImage = "url('./assets/images/market.jpeg')";
     }
     if (imageOptions.value === "img6") {
       main.style.backgroundImage = "url('./assets/images/private-meeting.jpeg')";
     }
     if (imageOptions.value === "img7") {
       main.style.backgroundImage = "url('./assets/images/rug-seller.jpeg')";
     }
     if (imageOptions.value === "img8") {
       main.style.backgroundImage = "url('./assets/images/still-life.jpeg')";
     }
     if (imageOptions.value === "img9") {
       main.style.backgroundImage = "url('./assets/images/two-musicians.jpeg')";
     }
    



    })



    