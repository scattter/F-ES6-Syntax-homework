const inject = (lst1, lst2) => {
    let index = []
    let newLst = []
    lst2.map(it => {
        index.push(it.index)
    })

    const size = lst1.length + lst2.length
    var acount = 0;
    for (var id = 0; id < size; id++) {
        if (index.length > 0 & id - acount === index[0]) {
            index.shift()
            newLst.push(lst2.find(con => {
                return con.index === id - acount
            }).content)
            acount++;
        } else {
            newLst.push(lst1.shift())
        }
    }
    return newLst
}
export { inject };
