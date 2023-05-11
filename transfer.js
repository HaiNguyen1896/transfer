function doS() {
    let amount = document.getElementById("value").value;
    let frCurr = document.getElementById("frCurr").value;
    let toCurr = document.getElementById("toCurr").value;
    let kq;
    if(frCurr=="USD" && toCurr =="VND"){
        kq = "Result: " + (amount*23000) +" VND";
    }
    else if (frCurr=="VND" && toCurr =="USD"){
        kq = "Result: " + (amount/23000) +" USD";
    }
    else if (frCurr=="VND" && toCurr =="VND"){
        kq = "Result: " + amount +" VND";
    }
    else{
        kq = "Result: " + amount +" USD";
    }
    document.getElementById("result").innerHTML=kq;
}