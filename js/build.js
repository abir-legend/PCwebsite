class generator
{
    icon(classb,classa ='fa-solid')
    {
        var icon = document.createElement("i");
        icon.classList.add(classa);
        icon.classList.add(classb);
        return icon
    }
    div(classa)
    {
        var div = document.createElement("div");
        div.classList.add(classa);
        return div;
    }
    input(classa,type = 'text')
    {
        var input = document.createElement("input");
        input.classList.add(classa);
        input.type = type
        return input;
    }
    options(classa,name,list)
    {
        var cpuSelect = document.createElement('select');
        cpuSelect.name = name;
        for (let option of list) 
        {
            const cpuOption = document.createElement('option');
            cpuOption.textContent = option;
            cpuSelect.appendChild(cpuOption);
        }
        cpuSelect.classList.add(classa);
    }
};
class MyMenu extends HTMLElement 
{
    constructor() 
    {
        var gen = new generator();
        super();
        this.classList.add("Menu");
        var logo = gen.div("Logo");
        logo.appendChild(gen.icon('fa-microchip'));
        logo.addEventListener("click", () => this.Goto('main'));
        var search =gen.div("Searchbar");
        search.appendChild(gen.input('SearchText'))
        var button = gen.div('SearchButton')
        search.appendChild(button)
        search.appendChild(gen.div('suggestionbox'));
        var jump = search.appendChild(gen.div('sugesstionjump'));
        jump.appendChild(gen.icon('fa-arrow-up'))
        button.appendChild(gen.icon('fa-magnifying-glass'));
        var build = gen.div("build");
        build.addEventListener("click", () => this.Goto('build'));
        build.appendChild(gen.icon('fa-bolt'));
        var theme = gen.div("theme");
        theme.appendChild(gen.icon('fa-palette'));
        var user = gen.div("user");
        user.appendChild(gen.icon('fa-regular','fa-user'));

        this.appendChild(logo);
        this.appendChild(search);
        this.appendChild(build);
        this.appendChild(theme);
        this.appendChild(user);
    };

    Goto(link) 
    {
        console.log(link);
        const currentPage = window.location.href.replace(window.location.origin, '');
        console.log(currentPage);
        if(currentPage != '/'+link+'.html')
        {
            window.location.href = link+'.html';
        }
    }
};

class partRow extends HTMLElement 
{
    constructor() 
    {
        var gen = new generator();
        super();
        this.classList.add("ItemRow");
        var image = gen.div("itemImage");
        var name = gen.div("itemName");
        var price = gen.div("itemprice");
        price.textContent = 'price'
        var add = gen.div("add")
        add.textContent = 'add'
        price.appendChild(add)
        var details = gen.div("details");
        details.appendChild(gen.div("details1"))
        details.appendChild(gen.div("details2"))
        details.appendChild(gen.div("details3"))
        details.appendChild(gen.div("details4"))
        details.appendChild(gen.div("details5"))
        details.appendChild(gen.div("details6"))

        this.appendChild(image);
        this.appendChild(name);
        this.appendChild(price);
        this.appendChild(details);
    };
}

class carousel extends HTMLElement 
{
    children = []
    pointers = null;
    constructor() 
    {
        var gen = new generator();
        super();
        this.classList.add("Carousel");

        if(this.pointers == null)
        {
            this.pointers = gen.div("pointers");
        }
        var controls = gen.div("controls");
        controls.appendChild(gen.div("left"));
        controls.appendChild(gen.div("right"));
        controls.appendChild(pointers);



        this.appendChild(controls);
        // this.appendChild(search);
        // this.appendChild(build);
        // this.appendChild(user);
    }
    setChild(count)
    {
        
    }
}
  
function unfocus()
{
    suggestionBox.style.display = 'none';
    suggestionJump.style.display = 'none';
}
function focus()
{
    console.log('focus');
    if (searchText.value) {
        console.log(searchText.value);
        suggestionBox.style.display = 'block';
        suggestionJump.style.display = 'block';
    }
    else
    { 
        unfocus()
    }
}

customElements.define('menu-bar', MyMenu);
customElements.define('carousel-bar', carousel);
customElements.define('part-row', partRow);
const searchBar = document.querySelector('.Searchbar');
const searchText = document.querySelector('.SearchText');
const suggestionBox = document.querySelector('.suggestionbox');
const suggestionJump = document.querySelector('.sugesstionjump');
searchText.addEventListener('focus',() => focus());
searchText.addEventListener('input',() => focus());
searchText.addEventListener('blur', () => unfocus());

document.addEventListener("keyup", (e) => {
    console.log(e);
    if(e.key == '/')
        searchText.focus();
        
});

unfocus()
