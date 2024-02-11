function buildCal(m, y, cM, cH, cDW, cD, brdr){
    var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var dim=[31,0,31,30,31,30,31,31,30,31,30,31];
    
    var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
    oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st
    
    var todaydate=new Date() //DD added
    var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added
    
    dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
    var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
    t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
    for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
    t+='</tr><tr align="center">';
    for(i=1;i<=42;i++){
    var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
    if (x==scanfortoday) //DD added
    x='<span id="today">'+x+'</span>' //DD added
    t+='<td class="'+cD+'">'+x+'</td>';
    if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
    }
    return t+='</tr></table></div>';
    }
   


    
   
       

    var pageActivities = 

    {
        "Home": {
            
            "Monday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "10:30-11:30", activity: "Yoga sessions (women's group)" },
                { time: "16:30-18:00", activity: "Footbal Sessions (Hadly stadium B4NL" },
            ],

            "Tuesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Wednesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "14:00-16:00", activity:"Gardening Club (Men's Group" },
                {time: "17:00-19:00", activity:"Welcome Wednesdays" }
            ],

            "Thursday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Friday": [
                { time: "10:00-14:00", activity: "Music Welbeing Sessions" },
                { time: "10:00-11:00", activity: "Welbeing walk" },
                {time: "11:00-13:00", activity:"Community Cafe"},
                {
                    time:"18:00", activity:"Film Evening (First Friday of each month"
                }
            ],
            "Saturday":[
                {time:"9:00-12:00", activity:"Numbers for Life Classes"}
            ]
            // Activities for other days
        },


        "About Us": {
            
            "Monday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "10:30-11:30", activity: "Yoga sessions (women's group)" },
                { time: "16:30-18:00", activity: "Footbal Sessions (Hadly stadium B4NL" },
            ],

            "Tuesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Wednesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "14:00-16:00", activity:"Gardening Club (Men's Group" },
                {time: "17:00-19:00", activity:"Welcome Wednesdays" }
            ],

            "Thursday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Friday": [
                { time: "10:00-14:00", activity: "Music Welbeing Sessions" },
                { time: "10:00-11:00", activity: "Welbeing walk" },
                {time: "11:00-13:00", activity:"Community Cafe"},
                {
                    time:"18:00", activity:"Film Evening (First Friday of each month"
                }
            ],
            "Saturday":[
                {time:"9:00-12:00", activity:"Numbers for Life Classes"}
            ]
            // Activities for other days
        },


        "Activities": {
            
            "Monday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "10:30-11:30", activity: "Yoga sessions (women's group)" },
                { time: "16:30-18:00", activity: "Footbal Sessions (Hadly stadium B4NL" },
            ],

            "Tuesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Wednesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "14:00-16:00", activity:"Gardening Club (Men's Group" },
                {time: "17:00-19:00", activity:"Welcome Wednesdays" }
            ],

            "Thursday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Friday": [
                { time: "10:00-14:00", activity: "Music Welbeing Sessions" },
                { time: "10:00-11:00", activity: "Welbeing walk" },
                {time: "11:00-13:00", activity:"Community Cafe"},
                {
                    time:"18:00", activity:"Film Evening (First Friday of each month"
                }
            ],
            "Saturday":[
                {time:"9:00-12:00", activity:"Numbers for Life Classes"}
            ]
            // Activities for other days
        },
        "Support and Learning": {
            
            "Monday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "10:30-11:30", activity: "Yoga sessions (women's group)" },
                { time: "16:30-18:00", activity: "Footbal Sessions (Hadly stadium B4NL" },
            ],

            "Tuesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Wednesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "14:00-16:00", activity:"Gardening Club (Men's Group" },
                {time: "17:00-19:00", activity:"Welcome Wednesdays" }
            ],

            "Thursday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
            ],

            "Friday": [
                { time: "10:00-14:00", activity: "Music Welbeing Sessions" },
                { time: "10:00-11:00", activity: "Welbeing walk" },
                {time: "11:00-13:00", activity:"Community Cafe"},
                {
                    time:"18:00", activity:"Film Evening (First Friday of each month"
                }
            ],
            "Saturday":[
                {time:"9:00-12:00", activity:"Numbers for Life Classes"}
            ]
            // Activities for other days
        }, "Legal Supports": {
            
            "Monday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "10:30-11:30", activity: "Yoga sessions (women's group)" },
                { time: "16:30-18:00", activity: "Footbal Sessions (Hadly stadium B4NL" },
            ],

            "Tuesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "11:00-15:00",activity:"Immigration Guide"}

            ],

            "Wednesday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "14:00-16:00", activity:"Gardening Club (Men's Group" },
                {time: "17:00-19:00", activity:"Welcome Wednesdays" }
            ],

            "Thursday": [
                { time: "9:30-14:30", activity: "ESOL Classes" },
                { time: "9:00-15:00", activity: "Digital skills" },
                {time: "11:00-15:00",activity:"Immigration Guide"}

            ],

            "Friday": [
                { time: "10:00-14:00", activity: "Music Welbeing Sessions" },
                { time: "10:00-11:00", activity: "Welbeing walk" },
                {time: "11:00-13:00", activity:"Community Cafe"},
                {
                    time:"18:00", activity:"Film Evening (First Friday of each month"
                },
                {time: "11:00-15:00",activity:"Immigration Guide"}

            ]
            
            // Activities for other days
        },
      // Activities for other pages
    };
    
    var currentPagePath = window.location.pathname; // Example: "/Home%20Page.html"
    var currentPageEncoded = currentPagePath.split('/').pop(); // Extract the last part of the path
    var currentPage = decodeURIComponent(currentPageEncoded); // Decode the URL component
    
    // Remove the file extension
    currentPage = currentPage.replace(/\.[^/.]+$/, ""); // Remove everything after the last dot (including the dot itself)
    
    var today = new Date().getDay();
        var todayName;
        switch (today) {
            case 0:
                todayName = "Sunday";
                break;
            case 1:
                todayName = "Monday";
                break;
            case 2:
                todayName = "Tuesday";
                break;
            case 3:
                todayName = "Wednesday";
                break;
            case 4:
                todayName = "Thursday";
                break;
            case 5:
                todayName = "Friday";
                break;
            case 6:
                todayName = "Saturday";
                break;
        }


        var scheduleDiv = document.getElementById("schedule");
        var CalenderHeading=document.getElementById("CalenderHeading");
        CalenderHeading.innerHTML="<h3>Today's Activities</h3>";
        var activities = pageActivities[currentPage][todayName];
        if (activities) {
            var scheduleHTML = " ";
            scheduleHTML += "<ul>";
            activities.forEach(function(activity) {
                scheduleHTML += "<li>" +activity.activity  + " : " + activity.time + "</li>";
            });
            scheduleHTML += "</ul>";
            scheduleDiv.innerHTML = scheduleHTML;
        } else {
            scheduleDiv.innerHTML = "<p>No activities scheduled for today.</p>";
        }
    