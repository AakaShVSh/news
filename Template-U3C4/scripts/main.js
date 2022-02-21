async function apiCall(url) {


    try{
        let fetch_data = await fetch(url);
        let data = await fetch_data.json();
        return data;
    }catch(err){
        console.log(err)
    }


}

var click = JSON.parse(localStorage.getItem("article"))||[];
function appendArticles(articles, main) {
console.log(articles);
    articles.forEach(element => {
        
        let div = document.createElement("div");
        div.id = "box_art";
        

        let img = document.createElement("img");
        img.src = element.urlToImage;

        let h2 = document.createElement("h2");
        h2.innerHTML = element.title;

        let des = document.createElement("p");
        des.innerHTML = element.description;

        div.onclick = () =>{
            click.push(element);
            localStorage.setItem("article",JSON.stringify(click));
            window.location.href = "news.html"
        }
       
        div.append(img,h2,des); 
        main.append(div);
    });
  
}

export { apiCall, appendArticles }



