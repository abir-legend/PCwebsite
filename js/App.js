l = new Listing('https://m.media-amazon.com/images/I/61wbV8oqAbL._SL1500_.jpg','Rtx 3090','https://www.amazon.in/GeForce-RTX-3090-Founders-Graphics/dp/B08HR6ZBYJ')

const ll = []
for(i = 0; i < 10; i++)
{
    ll.push(l);
}


// remove this in  production
function Carousel()
{
    alert('This shouldnt be in production')
    Par = document.querySelector('.Carousel');
    Chi = document.querySelector('.Car_Child');
    for(i in ll)
    {
        Par.appendChild(Chi.cloneNode(true));
    }
}
const timer = ms => new Promise(res => setTimeout(res, ms))


async function myAsyncFunction() {
    let a = 0
    while(true)
    {
        await timer(100);
        if (a == 359)
        {
            a = 0
        }
        else{
            a = a+1
        }
        console.log(a)
        document.documentElement.style.setProperty('--hue', a);
    }
}

// myAsyncFunction();


// Carousel()