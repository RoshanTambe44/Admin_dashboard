var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [55, 49, 44, 24, 15, 65, 56, 12, 54, 8, 21, 54];
var barColors = [];
var hoverColor = "#4318FF"; // Purple color for hover effect

const myChart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            hoverBackgroundColor: hoverColor, // Color on hover
            data: yValues,
            borderRadius: 10 // Set border radius for bars
        }]
    },
    options: {
        responsive: true, // Makes the chart responsive
        legend: { display: false },
        title: {
            display: true,
            text: "Total Spents"
        },
        plugins: {
            tooltip: {
                enabled: true // Enable tooltips on hover
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    }
});

const auth = document.querySelector("#auth");
const signIn = document.querySelector("#signin");
const signUp = document.querySelector("#signup");
const menu = document.querySelector("#menu");
const sidebar = document.querySelector("#sidebar");
const states = document.querySelector("#states");
const blackDiv = document.querySelector("#blackDiv");



menu.addEventListener("click", ()=>{
    sidebar.classList.add("absolute")
    sidebar.classList.replace("w-[21%]", "w-52")
    sidebar.classList.replace("-translate-x-80",  "translate-x-0");
    blackDiv.classList.remove("hidden")    
    
    
    
    
    
})


blackDiv.addEventListener("click", ()=>{
    sidebar.classList.replace("translate-x-0",  "-translate-x-80");
    sidebar.classList.replace( "w-52" , "w-[21%]")
    blackDiv.classList.add("hidden")
})


let toggle = true
auth.addEventListener("click", ()=>{
    if(toggle){
        signIn.classList.replace("hidden", "flex")
        signUp.classList.replace("hidden", "flex")
        
        
        toggle = false
    }
    else{
        signIn.classList.replace("flex", "hidden")
        signUp.classList.replace( "flex" ,"hidden")
        toggle = true

    }
    
    
})

