var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
script.async = true
script.defer = true
document.body.appendChild(script);

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

var about = document.querySelector('.AboutUs')

if(about)
{
    about.innerHTML = ''
    aboutwho(about);
}
else{
    var div = document.createElement("div");
    div.classList.add('AboutUs');
    document.body.appendChild(div)
    aboutwho(about);
}




link = 'https://api.github.com/repos/abir-legend/pcwebsite/stats/contributors'
    // Fetch contributors data from GitHub API
    fetch(link)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Debugging: Check the structure of the response

      // Extract contributor names and lines added per week
      const contributors = data.map(contributor => contributor.author.login);
      const weeklyAdds = data.map(contributor =>
        contributor.weeks.map(week => week.a)
      );

      // Create a chart using Chart.js
      const ctx = document.getElementById('contributors-graph').getContext('2d');
      new Chart(ctx, {
        type: 'line', // Change the chart type to 'line'
        data: {
          labels: data[0].weeks.map(week => formatDate(week.w)),
          datasets: data.map(contributor => ({
            label: contributor.author.login,
            data: contributor.weeks.map(week => week.a),
            backgroundColor: getRandomColor(contributor.author.login),
            borderColor: getRandomColor(contributor.author.login),
            fontColor: 'white',
            borderWidth: 1,
            fill: true,
            fontColor: 'white'
          }))
        },
        options: {
            interaction: {
                intersect: false
              },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
                ticks: { color: 'white', beginAtZero: true },
                title: {
                    color:'white',
                    display: true,
                    text: 'Time of Commit'
                }
            },
            y: {
                ticks: { color: 'white', beginAtZero: true },
                title: {
                    color:'white',
                    display: true,
                    text: 'Lines Added'
                }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'white'
                    }
                }
            }
            }
            
        });
        })
    .catch(error => {
      console.error('Error:', error);
    });
  
    // Helper function to generate a random color
    function getRandomColor(a) {
        var style = getComputedStyle(document.body);        
        if(a == 'abir-legend')
        {
            return style.getPropertyValue('--Background_1');
        }
        if(a == 'Hrithickbiswas')
        {
            return style.getPropertyValue('--Background_3');
            
        }
        if(a == 'Leadplex226')
        {
            return style.getPropertyValue('--Forground_5');
            
        }
        if(a == 'SourvavD04')
        {
            return style.getPropertyValue('--Forground_2');
        }
    }

    function formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      return `${day}/${month}`;
    }

    function aboutwho(aboutUsContainer)
    {
        const aboutUsDiv = document.createElement('div');
        aboutUsDiv.className = 'AboutUs';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'titl';
        titleDiv.textContent = 'About Us';

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'descrip';
        descriptionDiv.textContent = 'PC Component Master is a user-friendly website developed as part of our final year project in college. Designed for PC enthusiasts, gamers, and DIY computer builders, our website serves as the ultimate guide for selecting, comparing, and understanding various PC components.';

        const aboutMoreDiv = document.createElement('div');
        aboutMoreDiv.className = 'aboutmore';

        const memberDiv = document.createElement('div');
        memberDiv.className = 'member';

        const projectGitHubDiv = document.createElement('div');
        projectGitHubDiv.className = 'per proj';
        projectGitHubDiv.textContent = 'Project GitHub';
        const projectGitHubIcon = document.createElement('i');
        projectGitHubIcon.className = 'fa-brands fa-github';
        projectGitHubIcon.addEventListener('click', () => {
            window.open('https://github.com/abir-legend/PCwebsite', '_blank');
          });

        // Append project GitHub elements to the memberDiv
        memberDiv.appendChild(projectGitHubDiv);
        memberDiv.appendChild(projectGitHubIcon);
        memberDiv.appendChild(document.createElement('div'));

        people = {'Abir Dutta':{'https://github.com/abir-legend':'https://www.linkedin.com/in/abir-dutta-401088153/'},
            'Hritick Biswas':{'https://github.com/Hrithickbiswas':'https://www.linkedin.com/in/hrithick-biswas-343099244'},
            'Sourav Das':{'https://github.com/SourvavD04':'https://www.linkedin.com/in/souravdas04/'},
            'Subham Pal':{'https://github.com/Leadplex226':'https://www.linkedin.com/in/subham-pal-549aa71ba'},}
        for (const contributor in people) {
            if (people.hasOwnProperty(contributor)) {
              const contributorDiv = document.createElement('div');
              contributorDiv.className = 'per';
              contributorDiv.textContent = contributor;
              const  ghl = Object.keys(people[contributor])
              const  lil = people[contributor][ghl]
                console.log(ghl,lil);
                const  githubIcon = document.createElement('i');
              githubIcon.className = 'fa-brands fa-github';
              githubIcon.addEventListener('click', () => {
                window.open(ghl, '_blank');
              });
          
              
              const  linkedinIcon = document.createElement('i');
              linkedinIcon.className = 'fa-brands fa-linkedin';
              linkedinIcon.addEventListener('click', () => {
                window.open(lil, '_blank');
              });
              // Append contributor elements to the memberDiv
              memberDiv.appendChild(contributorDiv);
              memberDiv.appendChild(githubIcon);
              memberDiv.appendChild(linkedinIcon);
            }
          }

        const contributorsGraphDiv = document.createElement('div');
        contributorsGraphDiv.className = 'contri';

        const contributorsCanvas = document.createElement('canvas');
        contributorsCanvas.id = 'contributors-graph';

        // Append contributors canvas to the contributorsGraphDiv
        contributorsGraphDiv.appendChild(contributorsCanvas);

        // Append elements to the aboutMoreDiv
        aboutMoreDiv.appendChild(memberDiv);
        aboutMoreDiv.appendChild(contributorsGraphDiv);

        // Append elements to the aboutUsDiv
        aboutUsDiv.appendChild(titleDiv);
        aboutUsDiv.appendChild(descriptionDiv);
        aboutUsDiv.appendChild(aboutMoreDiv);

        // Append the aboutUsDiv to the .aboutus element in the document
        // const aboutUsContainer = document.querySelector('.aboutus');
        aboutUsContainer.appendChild(aboutUsDiv);
    }