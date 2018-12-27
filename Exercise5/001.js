function soal1(objList,id,action)
{   
    var objLen = Object.keys(objList).length;
    switch(action) {
        case 'view':
            return objList[id];
            break;
        case 'delete':
            // switch the of next keys:values pair to previous
            // e.g. if obj has 4 keys and key no 1 is deleted then 
            //      key 2 copied to key 1
            //      key 3 copied to key 2
            //      key 4 copied to key 3
            //      as key 4 is the last and already copied, it can be removed
            if(id !== objLen - 1){
                for(var i = id; i < objLen - 1; i++) {
                    objList[i] = objList[i + 1]
                }
            } 
            delete objList[objLen - 1]
            return objList;
            break;
        default:
            return 'now action available'
            break;
    }
}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/