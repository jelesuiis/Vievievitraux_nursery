const htmlTemplate = document.createElement("header");

fetch("template.html").then(response => response.text()).then(text => {
    htmlTemplate.innerHTML = text;

    for (const childNode of htmlTemplate.getRootNode().childNodes) {
        switch (childNode.nodeName) {
            case "HEADER":
                document.body.prepend(childNode)
                break;
            case "FOOTER":
                document.body.append(childNode)
                break;
        }
    }
})