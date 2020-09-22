// TODO 可以思考一下可否用reduce来做
const parseData = ({ data, column }) => {
    // TODO 使用map做数组与数组的转化，不用声明新数组
    let output = [];
    data.map(it => {
        let item = {};
        // TODO 不是map使用场景
        column.map(key => {
            item[key.name] = it.shift()
        })
        output.push(item)
    });
    return output;
}
export { parseData };
