const main_container = document.getElementById("root");

function custom_render(main_container,elem){
    const dom_elemt = document.createElement(elem.type);
    for(let p in elem.props){
        if(p === 'children') continue; //because at some place the children is passed as props
        dom_elemt.setAttribute(p,elem.props[p]);
    }
    dom_elemt.innerHTML = elem.children;
    main_container.appendChild(dom_elemt);
}

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"visit Google"
}

custom_render(main_container,reactElement);