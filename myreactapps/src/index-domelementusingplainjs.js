//DOM programming using plain js:

function createElement() {
    const heading = document.createElement('h1')
    heading.innerHTML = 'Hello'
    const rootElement=document.getElementById('root')
    rootElement.appendChild(heading)
}
createElement()