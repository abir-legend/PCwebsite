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
        var search =gen.div("Searchbar");
        search.appendChild(gen.input('SearchText'))
        var button = gen.div('SearchButton')
        search.appendChild(button)
        search.appendChild(gen.div('suggestionbox'));
        var jump = search.appendChild(gen.div('sugesstionjump'));
        jump.appendChild(gen.icon('fa-arrow-up'))
        button.appendChild(gen.icon('fa-magnifying-glass'));
        var build = gen.div("build");
        build.appendChild(gen.icon('fa-bolt'));
        var user = gen.div("user");
        user.appendChild(gen.icon('fa-regular','fa-user'));

        this.appendChild(logo);
        this.appendChild(search);
        this.appendChild(build);
        this.appendChild(user);
    }
};
  
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
const searchBar = document.querySelector('.Searchbar');
const searchText = document.querySelector('.SearchText');
const suggestionBox = document.querySelector('.suggestionbox');
const suggestionJump = document.querySelector('.sugesstionjump');
searchText.addEventListener('focus',() => focus());
searchText.addEventListener('input',() => focus());
searchText.addEventListener('blur', () => unfocus());
