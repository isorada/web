
export default function cDiv() {
    let cDiv=document.createElement("div")
    {
        cDiv.id="container_id1";
        {
            let bDiv=document.createElement("div");
            {
                bDiv.id="background_id1";
                let mDiv=document.createElement("div");
                {
                    mDiv.id="aboutUs_id1";
                    {
                        const h1=document.createElement("h1");
                        h1.id="aTitle_id1";
                        h1.innerHTML="About us:<br>";

                        const p=document.createElement("p");
                        p.id="desc_id1"
                        p.innerHTML="asdasSDAKDNASNDAKJJKkjkjkasdkjasdkjsajdksakjdaskdj<br>asdasdasdasdalksdaksdm<br>maskl";

                        let button=document.createElement("button");
                        button.id="aButton_id1";
                        button.innerHTML="Learn More";
                        button.addEventListener("click",function(){document.location.href="./pages/menu.html"});
                        mDiv.append(h1,p,button);
                    }
                }
                bDiv.append(mDiv);
            }
        cDiv.append(bDiv)
        }
    }
    document.body.append(cDiv);
}