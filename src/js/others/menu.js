export default function menu() {
    let mDiv=document.createElement('div')
    mDiv.id="menu_id1"
    let button=document.createElement("button")
    button.id="mButton"
    button.innerHTML="BROWSE MENU"
    mDiv.append(button)
    document.body.append(mDiv)
}