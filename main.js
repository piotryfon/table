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
       
        let target = e.target,
        thsArr = makeArray(ths),
        trsArr = makeArray(trs),
        index = thsArr.indexOf(target)

        trsArr.sort(function(a, b){
            let tdA = a.children[index].textContent,
                tdB = b.children[index].textContent;

            if(tdA < tdB){
                return 1;
            }else if(tdA > tdB){
                return -1;
            }else {
                return 0
            };

            console.log(tdB)

        });
        /*
        console.log(target)
        console.log(thsArr)
        console.log(index)
         */
        console.log(trsArr)
    }
    for(var i = 0; i < ths.length; i++){
        ths[i].onclick = sortBy;
    }

})();