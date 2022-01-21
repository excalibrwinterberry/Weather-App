export default function createHTMLTag(tagType, tagId, tagClass){
    const temp = document.createElement(tagType)
    temp.setAttribute('id', tagId)
    if(tagClass.length !== 0){
        temp.classList.add(...tagClass)
    }
    return temp
}