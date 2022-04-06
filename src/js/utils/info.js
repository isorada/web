
export default function infoJson() {
  const myRequest = new Request('../src/misc/data/info.json');
    
  fetch(myRequest)
    .then(response => response.json())
    .then(data => {
      for (const info of data.info) {
        let h1 = document.createElement('h1');
        h1.innerHTML= info.first+" "+info.second+" "+info.third+" "+info.last;
        document.body.append(h1);
      }
    }).catch(console.error);
}
