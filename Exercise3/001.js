function soal1(param)
{
    var newString = '';
    for(var i = param.length - 1; i >= 0; i--) {
        newString += param[i];

        if (i > 0) {
            newString += '\n';
        }
    }
    return newString;
}

console.log(soal1("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/