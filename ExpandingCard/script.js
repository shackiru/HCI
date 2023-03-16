const panels = document.querySelectorAll(".content-panel")
panels.forEach(panel => 
    {
        panel.addEventListener("mouseenter", ()=>
        {
            removeActiveClass()
            panel.classList.add("active")
        })
    })

function removeActiveClass()
{
    panels.forEach(panel =>
        {
            panel.classList.remove("active")
        })
}