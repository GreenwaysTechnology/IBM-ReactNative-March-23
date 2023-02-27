//strings
let firstName = "Subramanian"
let lastName = 'Murugan'
//String concatnation : +
console.log("Name " + firstName + lastName)
//String concatnation : ,
console.log("Name ", firstName, lastName)
//String concatnation : `` and string interpolation 
console.log(`Name ${firstName} ${lastName}`)

//es 6 back tic notation is used for string concatation.
let title = 'IBM'
let doc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Hello</h1>" +
    "</body>";
console.log(doc)

let docOne = `<html>
           <head>
            <title>${title}</title>
            </head>
          <body>
            <h1>Hello</h1>
          </body>
        `;
console.log(docOne)