let clicks = 0
let timeout = false
let time = 60
let time_ms = 0

const text = document.querySelector("#update")
const text2 = document.getElementById("text2")
const pad = document.querySelector(".click_pad")
const timer_text = document.getElementById("timer")
const bar = document.getElementById("bar")
const cps = document.getElementById("cps")
const box = document.getElementById("box")

function display()
{
    text.innerHTML = "your average speed is " + (clicks/60) + " clicks per second"
    text2.innerHTML = "You did " + clicks + " clicks in 1 minute"
    timeout = true
}


function click()
{

    pad.addEventListener("click",()=>
    {
        clicks = clicks+1
        if(timeout==false)
        {
            text.innerHTML = "you did " + clicks + " clicks"
        }
    })

}

function timer()
{
    if(time>0)
    {
        time = time - 1
        timer_text.innerHTML = "Time left :-> 0:" + time
    }
    else
    {
        timer_text.innerHTML = "Time out"
    }
    if(time>40)
    {
        timer_text.setAttribute("style","color: green;")
    }
    if(time>20 && time<40)
    {
        timer_text.setAttribute("style","color: yellow;")
    }
    if(time<20)
    {
        timer_text.setAttribute("style","color: red;")
    }
}

function ms()
{
    time_ms = time_ms+1
    let height_bar = (clicks/(time_ms))*10000
    let height_box = box.offsetHeight
    bar.setAttribute("style","height: "+ height_bar+"px;")
    cps.innerHTML = (clicks/(60-time)) + " -CPS"
    if(height_bar >= height_box)
    {
        box.setAttribute("style","height:"+(height_bar + 25)+"px;")
    }
}
// starts the click function to record clicks
click()

// runs the display function after 60 seconds
setTimeout(display,60000)

//runs the timer function every second
setInterval(timer,1000)

//runs function ms every mili second to display bar
setInterval(ms,1)
