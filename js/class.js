class Listing 
{
    constructor(image, text,link)
    {
        this.image = image;
        this.text = text;
        this.link = link;
    }
    open()
    {
        if(this.link)
        {
            window.open(this.link,'_blank')
        }
    }
}