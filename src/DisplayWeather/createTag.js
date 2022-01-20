export default function createHTMLTag(tagType, tagId, tagClass){
    const temp = document.createElement(tagType)
    temp.setAttribute('id', tagId)
    if(tagClass !== ''){
        temp.classList.add(tagClass)
    }
    return temp
}