// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
    sections.forEach((section, index) => {
        items.splice(section.index + index, 0, section.content)
    });
    return items;
}
export { inject };
