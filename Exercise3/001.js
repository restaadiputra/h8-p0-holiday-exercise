function soal1(param) {
    if(param.length === 1) {return param}
    return soal1(param.substr(1)) + '\n' + param[0]
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