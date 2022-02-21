function storeSearchterm(term) {
    
   if(term.code=="Enter"){
     let input = document.getElementById("searchbar").value 
     localStorage.setItem("search_term",input)
     window.location.href = "search.html";
   }

}

export default storeSearchterm