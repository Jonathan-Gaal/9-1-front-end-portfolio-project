let URL = 'https://pursuit-9-1-full-stack-project.herokuapp.com/api/quotes';

main = document.querySelector('.main')
imageOptions = document.querySelector('#imageOptions');
mainImage = document.querySelector('#mainImage');
form = document.querySelector('form');
selectQuotesAside = document.querySelector(".select-quotes-aside");
header = document.querySelector('.header');
footer = document.querySelector('.footer');
formErrorLabel = document.querySelector("#formErrorLabel");

fetchData(URL);
function fetchData(URL) {
  fetch(URL)
    .then(res => res.json())
    .then((resJson) => {
      console.log(resJson);
      resJson.forEach((el) => {
        const asideQuoteP = document.createElement("p");
        asideQuoteP.innerText = `${el.quote}`
        selectQuotesAside.append(asideQuoteP);
        asideQuoteP.addEventListener('click', () => {
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
}


function turnOnHidden() {
  formErrorLabel.classList.toggle("hidden");
}
    



form.addEventListener('submit', (e) => {
  e.preventDefault()
  
    if (imageOptions.value === "inputRequest") {
      turnOnHidden();
      setTimeout(turnOnHidden, 3000);
    }
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
      main.style.backgroundImage = "url('./assets/images/harpist.jpeg')";
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
  if (imageOptions.value === "img12") {
    main.style.backgroundImage = "url('./assets/images/carpet-menders.jpeg')";
  }
  if (imageOptions.value === "img13") {
    main.style.backgroundImage = "url('./assets/images/men-praying.jpeg')";
  }
  if (imageOptions.value === "img14") {
    main.style.backgroundImage = "url('./assets/images/danger-in-desert.jpeg')"
  }
  if (imageOptions.value === "img15") {
    main.style.backgroundImage = "url('./assets/images/people-chatting.jpeg')";
  }
  if (imageOptions.value === "img16") {
    main.style.backgroundImage = "url('./assets/images/the-scribe.jpeg')";
  }
  if (imageOptions.value === "img17") {
    main.style.backgroundImage = "url('./assets/images/desert-rendezvous.jpeg')";
  }
  if (imageOptions.value === "img18") {
    main.style.backgroundImage =
      "url('./assets/images/arriving-at-mosque.jpeg')";
  }
  if (imageOptions.value === "img19") {
    main.style.backgroundImage = "url('./assets/images/slipper-merchant.jpeg')";
  }

    })



    