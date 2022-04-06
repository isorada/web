
export default function hDiv() {
    let hDiv=document.createElement("div");
    {

        hDiv.id="header_id1";
        
        let background=document.createElement("div");
        {
            
            background.id="backgroundImg_id1";
            
            let logo=document.createElement("div");
            {
                logo.id="logo_id1";
                {
                    let img=document.createElement("img");
                    img.id="img_id1";
                    img.src="../src/misc/imgs/logos/logo2.png";
                    logo.append(img);
                }
            }
            let prev=document.createElement("div");
            {
                prev.id="prev_id1"
                {
                    const h3=document.createElement("h3");
                    h3.id="h3_id1";
                    h3.innerHTML="OPINIONS";
                    prev.append(h3);
                }
                {
                    let prevImg=document.createElement("img");
                    prevImg.id="prevImg_id1";
                    prevImg.src=".././src/misc/imgs/cnp.png"
                    prev.append(prevImg);
                }
            }
            background.append(logo,prev)
        }
    hDiv.append(background) 
    }
    document.body.append(hDiv);
}