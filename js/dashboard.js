/* =====================================
   PH PERTAMA ISTC DASHBOARD
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeProgressChart();
    initializeManpowerChart();
    initializeMaterialChart();

    initializeExportButtons();

    updateDashboardTime();

    setInterval(updateDashboardTime, 1000);

    checkProjectHealth();

});

/* =====================================
   LIVE DATE & TIME
===================================== */

function updateDashboardTime(){

    let clock = document.getElementById("dashboardClock");

    if(!clock) return;

    const now = new Date();

    clock.innerHTML =
        now.toLocaleDateString() +
        " | " +
        now.toLocaleTimeString();

}

/* =====================================
   REFRESH DASHBOARD
===================================== */

function refreshDashboard(){

    location.reload();

}

/* =====================================
   PRINT REPORT
===================================== */

function printDailyReport(){

    window.print();

}

/* =====================================
   EXPORT TABLES
===================================== */

function initializeExportButtons(){

    const buttons =
        document.querySelectorAll(".btn-export");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            alert(
                "Export feature ready.\nConnect to Excel/PDF backend later."
            );

        });

    });

}

/* =====================================
   PROJECT HEALTH CHECK
===================================== */

function checkProjectHealth(){

    const planned = 72;
    const actual = 68;

    const variance =
        planned - actual;

    if(variance > 5){

        console.warn(
            "Project behind schedule."
        );

    }

}

/* =====================================
   PROGRESS CHART
===================================== */

function initializeProgressChart(){

    const ctx =
        document.getElementById(
            "progressChart"
        );

    if(!ctx) return;

    new Chart(ctx,{

        type:"line",

        data:{

            labels:[
                "W1",
                "W2",
                "W3",
                "W4",
                "W5",
                "W6",
                "W7",
                "W8"
            ],

            datasets:[

                {
                    label:"Planned",

                    data:[
                        5,
                        12,
                        20,
                        35,
                        50,
                        65,
                        80,
                        100
                    ],

                    borderColor:"#005EB8",

                    backgroundColor:
                    "rgba(0,94,184,.1)",

                    tension:.4,

                    fill:true
                },

                {
                    label:"Actual",

                    data:[
                        4,
                        10,
                        18,
                        31,
                        45,
                        58,
                        68,
                        68
                    ],

                    borderColor:"#D62828",

                    backgroundColor:
                    "rgba(214,40,40,.08)",

                    tension:.4,

                    fill:true
                }

            ]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    position:"top"
                }

            }

        }

    });

}

/* =====================================
   MANPOWER TREND
===================================== */

function initializeManpowerChart(){

    const ctx =
        document.getElementById(
            "manpowerChart"
        );

    if(!ctx) return;

    new Chart(ctx,{

        type:"bar",

        data:{

            labels:[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],

            datasets:[

                {

                    label:"Manpower",

                    data:[
                        105,
                        112,
                        118,
                        124,
                        120,
                        119
                    ],

                    backgroundColor:
                    "#005EB8"

                }

            ]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false

        }

    });

}

/* =====================================
   MATERIAL CHART
===================================== */

function initializeMaterialChart(){

    const ctx =
        document.getElementById(
            "materialChart"
        );

    if(!ctx) return;

    new Chart(ctx,{

        type:"doughnut",

        data:{

            labels:[
                "Delivered",
                "Outstanding"
            ],

            datasets:[

                {

                    data:[
                        82,
                        18
                    ],

                    backgroundColor:[

                        "#005EB8",
                        "#E5E7EB"

                    ]

                }

            ]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{
                    position:"bottom"
                }

            }

        }

    });

}

/* =====================================
   NOTIFICATION SYSTEM
===================================== */

function showNotification(message){

    const div =
        document.createElement("div");

    div.className =
        "dashboard-notification";

    div.innerHTML =
        message;

    document.body.appendChild(div);

    setTimeout(()=>{

        div.remove();

    },4000);

}

/* =====================================
   DEMO ALERTS
===================================== */

setTimeout(()=>{

    showNotification(
        "⚠ Control Cable inventory below target."
    );

},3000);

setTimeout(()=>{

    showNotification(
        "📋 1 Inspection Request pending approval."
    );

},7000);

setTimeout(()=>{

    showNotification(
        "📊 Weekly Progress Report ready."
    );

},11000);