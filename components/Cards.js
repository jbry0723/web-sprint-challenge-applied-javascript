// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res=>{
        const articleData=res.data.articles
        let propertyNames=Object.keys(articleData)
        newArray=[]
        propertyNames.forEach(propname=>{
            articleData[propname].forEach(item=>{
            newArray.push(item)    
            })
            
        })
         // // for (foobarBanana in articleData) {
        //     articleData[foobarBanana].forEach(item=>{
        //         newArray.push(item) 
        //     })
        // } alternate method, found code.
    

        newArray.forEach(info=>{
            let newCard=cardMaker(info)
            let endPoint=document.querySelector(".cards-container")
            endPoint.appendChild(newCard)
        })
       
        
            
})
            
        
        

        

    function cardMaker({authorName,authorPhoto,headline,id}){
        

        let cardDiv=document.createElement('div')
        let headlineDiv=document.createElement('div')
        let authorDiv=document.createElement('div')
        let imgDiv=document.createElement('div')
        let imgFile=document.createElement('img')
        let authorSpan=document.createElement('span')

        cardDiv.appendChild(headlineDiv)
        cardDiv.appendChild(authorDiv)
        authorDiv.appendChild(imgDiv)
        imgDiv.appendChild(imgFile)
        authorDiv.appendChild(authorSpan)

        cardDiv.classList.add('card')
        headlineDiv.classList.add('headline')
        authorDiv.classList.add('author')
        imgDiv.classList.add('img-container')

        headlineDiv.textContent=headline
        imgFile.src=authorPhoto
        authorSpan.textContent=`By ${authorName}`

        cardDiv.addEventListener("click",(event)=>{
            console.log(headlineDiv.textContent)
        })

        return cardDiv
        
        
    }
    
    

    