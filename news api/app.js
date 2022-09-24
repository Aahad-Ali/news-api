// let businessNews = document.getElementById("Business");

// const newsData = async () => {
//     try {
//         let news = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2fad53c28a024172b8b74cafaa5f2af2')
//         let api = news.json();
//         // console.log(api)
//         if (news) {
//             api.then((data1) => {

//                 for (let key1 in data1.articles) {

//                     let card = document.createElement("div");
//                     card.setAttribute("class", 'card');

//                     let image = document.createElement('img');
//                     image.setAttribute("class", "card-img-top");
//                     image.setAttribute("src", data1.articles[key1].urlToImage);


//                     if (data1.articles[key1].urlToImage === null) {
//                         image.textContent = "image: " + "Image not found";
//                     } else {
//                         image.textContent = `image: ${data1.articles[key1].urlToImage}`;
//                     }

//                     card.appendChild(image);

//                     let cardBody = document.createElement("div");
//                     card.setAttribute("class", 'card-body');
//                     card.appendChild(cardBody);

//                     let heading1 = document.createElement('h3');
//                     heading1.setAttribute("class", "card-title")
//                     heading1.textContent = data1.articles[key1].title;
//                     cardBody.appendChild(heading1);

//                     let authorHeading = document.createElement("h5");
//                     authorHeading.setAttribute("class", 'author');

//                     if (data1.articles[key1].author === null) {
//                         authorHeading.textContent = "Author: " + "Not found";
//                     } else {
//                         authorHeading.textContent = `Author: ${data1.articles[key1].author}`;
//                     }

//                     cardBody.appendChild(authorHeading)

//                     let pTime = document.createElement('p');
//                     pTime.setAttribute("class", 'card-text');
//                     pTime.textContent = `Published at: ${data1.articles[key1].publishedAt}`;
//                     cardBody.appendChild(pTime);

//                     let tSource = document.createElement('p');
//                     tSource.setAttribute("class", 'card-text');
//                     tSource.textContent = `Source : ${data1.articles[key1].source.name}`;
//                     cardBody.appendChild(tSource);


//                     let contant = document.createElement('p');
//                     contant.setAttribute("class", 'card-text');
//                     contant.textContent = `${data1.articles[key1].contant}`;
//                     cardBody.appendChild(contant);

//                     let description = document.createElement('p');
//                     description.setAttribute("class", 'card-text');
//                     description.textContent = ` Description :${data1.articles[key1].description}`;
//                     cardBody.appendChild(description);



//                     let readMore = document.createElement('a');
//                     readMore.setAttribute("class", 'btn btn-primary');
//                     readMore.textContent = "Read more";
//                     readMore.setAttribute("target", "_blank");
//                     readMore.setAttribute("href", data1.articles[key1].url);
//                     cardBody.appendChild(readMore);

//                     businessNews.appendChild(card);
//                 }
//             })
//         }
//     }
//     catch {
//         console.log(error)
//     }
// }
// newsData();


// =================================================================================================


let businessNews = document.getElementById("Business");

const newsData = async () => {
    try {
        let news = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-08-24&sortBy=publishedAt&apiKey=2fad53c28a024172b8b74cafaa5f2af2')
        let api = news.json();
        // console.log(api)
        if (news) {
            api.then((data1) => {

                for (let key1 in data1.articles) {

                    let card = document.createElement("div");
                    card.setAttribute("class", 'card');

                    let image = document.createElement('img');
                    image.setAttribute("class", "card-img-top");
                    image.setAttribute("src", data1.articles[key1].urlToImage);


                    if (data1.articles[key1].urlToImage === null) {
                        image.textContent = "image: " + "Image not found";
                    } else {
                        image.textContent = `image: ${data1.articles[key1].urlToImage}`;
                    }

                    card.appendChild(image);

                    let cardBody = document.createElement("div");
                    card.setAttribute("class", 'card-body');
                    card.appendChild(cardBody);

                    let heading1 = document.createElement('h3');
                    heading1.setAttribute("class", "card-title")
                    heading1.textContent = data1.articles[key1].title;
                    cardBody.appendChild(heading1);

                    let authorHeading = document.createElement("h5");
                    authorHeading.setAttribute("class", 'author');

                    if (data1.articles[key1].author === null) {
                        authorHeading.textContent = "Author: " + "Not found";
                    } else {
                        authorHeading.textContent = `Author: ${data1.articles[key1].author}`;
                    }

                    cardBody.appendChild(authorHeading)

                    let pTime = document.createElement('p');
                    pTime.setAttribute("class", 'card-text');
                    pTime.textContent = `Published at: ${data1.articles[key1].publishedAt}`;
                    cardBody.appendChild(pTime);

                    let tSource = document.createElement('p');
                    tSource.setAttribute("class", 'card-text');
                    tSource.textContent = `Source : ${data1.articles[key1].source.name}`;
                    cardBody.appendChild(tSource);


                    let contant = document.createElement('p');
                    contant.setAttribute("class", 'card-text');
                    contant.textContent = `${data1.articles[key1].contant}`;
                    cardBody.appendChild(contant);

                    let description = document.createElement('p');
                    description.setAttribute("class", 'card-text');
                    description.textContent = ` Description :${data1.articles[key1].description}`;
                    cardBody.appendChild(description);



                    let readMore = document.createElement('a');
                    readMore.setAttribute("class", 'btn btn-primary');
                    readMore.textContent = "Read more";
                    readMore.setAttribute("target", "_blank");
                    readMore.setAttribute("href", data1.articles[key1].url);
                    cardBody.appendChild(readMore);

                    businessNews.appendChild(card);
                }
            })
        }
    }
    catch {
        console.log(error)
    }
}
newsData();


// ===============================================================================================================


// let bitcoinNews = document.getElementById("bitcoin");
// const api = async () => {
//     try {
//         let getNews = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=a5084503198c4f7ba1f22cbc87c817e6');
//         let completeNews = getNews.json();
//         // console.log(completeNews);
//         if (getNews) {
//             completeNews.then((data2) => {
//                 for (let key in data2.articles) {
//                     // console.log(data2.articles[key].content);
//                     let card = document.createElement("div");//card for each article
//                     card.setAttribute("class", "card cards");
//                     let card_img = document.createElement("img");
//                     card_img.setAttribute("class", "card-img-top");
//                     card_img.setAttribute("alt", "Card image");
//                     card_img.setAttribute("src", data2.articles[key].urlToImage);
//                     card.appendChild(card_img);
//                     let card_body = document.createElement("div");
//                     card_body.setAttribute("class", "card-body");
//                     card.appendChild(card_body);
//                     let card_title = document.createElement("h4");
//                     card_title.setAttribute("class", "card-title");
//                     card_title.textContent = data2.articles[key].title;
//                     card_body.appendChild(card_title);
//                     let authorHeading = document.createElement("h6");
//                     authorHeading.setAttribute("class", "author-heading")
//                     if (data2.articles[key].author === null) {
//                         authorHeading.textContent = "Author: " + "Unknown";
//                     } else {
//                         authorHeading.textContent = `Author: ${data2.articles[key].author}`;
//                     }
//                     card_body.appendChild(authorHeading);
//                     let publishedTime = document.createElement("p");
//                     publishedTime.setAttribute("class", "published-time");
//                     publishedTime.textContent = `Published at: ${data2.articles[key].publishedAt}`
//                     card_body.appendChild(publishedTime);
//                     let sourceText = document.createElement("p");
//                     sourceText.setAttribute("class", "source-text");
//                     sourceText.textContent = `Source: ${data2.articles[key].source.name}`
//                     card_body.appendChild(sourceText);
//                     let card_text = document.createElement("div");
//                     card_text.setAttribute("class", "card-text");
//                     card_text.textContent = data2.articles[key].content;
//                     card_body.appendChild(card_text);
//                     let description = document.createElement("p");
//                     description.setAttribute("class", "description-text");
//                     description.textContent = `Description: ${data2.articles[key].description}`;
//                     card_body.appendChild(description);
//                     let card_btn = document.createElement("a");
//                     card_btn.setAttribute("class", "btn btn-primary");
//                     card_btn.setAttribute("target", "_blank");
//                     card_btn.textContent = "See More Info"
//                     card_btn.setAttribute("href", data2.articles[key].url);
//                     card_body.appendChild(card_btn);
//                     bitcoinNews.appendChild(card);
//                 }
//             }
//             );
//         }
//     }
//     catch {
//         console.log(error);
//     }
// }
// api();