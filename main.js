(function(){
    var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");
    
    function makeArray(nodeList){
        let arr = [];
        for(let i = 0; i < nodeList.length; i++){
            arr.push(nodeList[i]);
        }
        return arr;
    }

    function sortBy(e){
       
        let target = e.target
        thsArr = makeArray(ths)
        console.log(target)
        console.log(thsArr)
    }
    for(var i = 0; i < ths.length; i++){
        ths[i].onclick = sortBy;
    }

})();