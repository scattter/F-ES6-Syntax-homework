const parseData = (input) => {
    let output = [];
    input.data.map(it => {
        let item = {};
        input.column.map(key => {
            item[key.name] = it.shift()
        })
        output.push(item)
    });
    return output;
}
export { parseData };
