function startTime()
{
    var tm=new Date();
    var y=tm.getFullYear();
    var mo=tm.getMonth();
    var d=tm.getDate();
    var h=tm.getHours();
    var m=tm.getMinutes();
    var s=tm.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time').innerHTML=y+"-"+(mo+1)+"-"+d+" "+h+":"+m+":"+s;
    setTimeout('startTime()',11000);
}
function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}