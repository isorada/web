export default function menu() {
    let mDiv=document.createElement('div')
    mDiv.id="menu_id1"
    let button=document.createElement("button")
    button.id="mButton"
    button.innerHTML="BROWSE MENU"
    button.onclick=function(){document.location.href="./pages/menu.html"}
    mDiv.append(button)
    document.body.append(mDiv)
}