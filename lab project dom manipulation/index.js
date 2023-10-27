
let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];


let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "grey"

mainEl.innerHTML="<h1>DOM Manipulation</h1>"

mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "blue"
topMenuEl.classList.add("flex-around");

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
 subMenuEl.style.position = "absolute";
 subMenuEl.style.top = "0";


menuLinks.forEach(el => {
    let atag = document.createElement("a");
    atag.href = el.href
    atag.textContent = el.text
    topMenuEl.append(atag);
});

let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function(event) {
    topMenuLinks = 
    console.log(topMenuLinks);
});



topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
  
    const clickedLink = event.target;
  
    if (!clickedLink.classList.contains('active')) {
      if (menuLinks.some(link => link.text === clickedLink.textContent && link.subLinks)) {
        subMenuEl.style.top = "100%";
        subMenuEl.innerHTML = ""; 
        menuLinks.forEach(el => {
            if (el.text == clickedLink.textContent){
                el.subLinks.forEach(sub => {
                    let submenuItem = document.createElement("a");
                    submenuItem.textContent = sub.text;
                    subMenuEl.append(submenuItem);
                });
                
            } 
            
        })


      } else {
        subMenuEl.style.top = "0";
      }
    }
  

  });


  
