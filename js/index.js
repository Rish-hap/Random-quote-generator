$(document).ready(function() {
  var rquote="";
  var rauthor="";
  var rnum;
  var colour= ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  function getQuote(){
  /**{
    var quotes = ["hello", "namaste", "ola", "whats up","For the Night is Dark and full of terror"];
    var author = ["English", "Indian", "Spanish", "American","Interstellar"];
    var num= Math.floor(Math.random() * 5)
    var rquote = quotes[num];
    var rauthor = author[num];
    $(".quote").text(rquote);
    $(".author").text(rauthor);
  }
  */
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url,function(data){
    $(".quote").html('"'+data.quoteText+'"');
    $(".author").html("-"+data.quoteAuthor);
    rquote=data.quoteText;
    rauthor=data.quoteAuthor;
    rnum=Math.floor(Math.random()*9);
    $("body").css("background-color",colour[rnum]);
    $(".btn").css("background-color",colour[rnum]);
    $(".quote").css("color",colour[rnum]);
    $(".author").css("color",colour[rnum]);
   
  })
  }
  $("#buttn").on("click",function(){
    getQuote();
  })
  $(".tweet").on("click",function(){
    window.open("https://twitter.com/intent/tweet?text="+rquote+"-"+rauthor);
  })
  getQuote();

});