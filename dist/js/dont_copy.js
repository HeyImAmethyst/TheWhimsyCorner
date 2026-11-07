var message="Hewwo! Please do not directly copy my code ^^' If you need help with building your website I have links to the resources I used to build my own! I can try to help you if the resources I link aren't sufficient but I am a beginner myself so I can't guarantee I'll be able to help well.";
 
///////////////////////////////////
function clickIE4()
{
    if (event.button==2)
    {
        alert(message);
        return false;
    }
}
 
function clickNS4(e)
{
    if (document.layers||document.getElementById&&!document.all)
    {
        if (e.which==2||e.which==3)
        {
            alert(message);
            return false;
        }
    }
}
 
if (document.layers)
{
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById)
{
    document.onmousedown=clickIE4;
}

function Do()
{
    alert(message);
    return false;
}
 
document.oncontextmenu = Do;