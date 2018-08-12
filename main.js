(function(){
    var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");
   
    function sortBy(){
        console.log("sortuję!!!")
    }
    for(var i = 0; i < ths.length; i++){
        ths[i].onclick = sortBy;
    }

})();