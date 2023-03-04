class Parts 
{
    constructor(name,image,link)
    {
        this.image = image;
        this.name = name;
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

class Cpu extends Parts
{
    constructor(name,image,link,Uid,ReleaseDate,brand,Igpu,socket,cores,threads,frequency,turboFrequency,Tdp,nm,MemoryMax,l3)
    {
        this.image = image;
        this.name = name;
        this.link = link;
        this.Uid = Uid;
        this.ReleaseDate = ReleaseDate;
        this.brand = brand;
        this.Igpu = Igpu;
        this.socket = socket;
        this.cores = cores;
        this.threads = threads;
        this.frequency = frequency;
        this.turboFrequency = turboFrequency;
        this.Tdp = Tdp;
        this.nm = nm;
        this.MemoryMax = MemoryMax;
        this.l3 = l3;
    }
    super(name,image,link)
}