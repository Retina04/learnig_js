function leapyear(year){
    const remainder = year %4;
    if(remainder === 0)
    {
        console.log(year , "The year is a leapyear");
    }
    else{
        console.log(year , "The year is a not aleapyear"); 
    }
}
leapyear(1899)