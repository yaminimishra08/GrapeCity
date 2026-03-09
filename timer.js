// total time = 1 hour (3600 seconds)
let totalTime = 3600;

let timer = null;


// function to display time in MM:SS format
function updateDisplay()
{
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    // add 0 if seconds < 10
    if(seconds < 10)
        {
            seconds = "0" + seconds;
        }
        
        document.getElementById("timer").innerText = minutes + ":" + seconds;
}

// start timer
function startTimer()
{
    if(timer !== null)
        {
            return;
        }
        
        timer = setInterval(function()
        {
            if(totalTime > 0)
                {
                    totalTime--;
                    updateDisplay();
                }
                else
                    {
                        clearInterval(timer);
                        timer = null;
                        alert("Time is up!");
                    }
                },1000);
            }
            
            // pause timer
            function pauseTimer()
            {
                clearInterval(timer);
                timer = null;
            }
            
            // reset timer
            function resetTimer()
            {
                clearInterval(timer);
                timer = null;
                
                totalTime = 3600;
                
                updateDisplay();
}

//show timer when page loads
updateDisplay();