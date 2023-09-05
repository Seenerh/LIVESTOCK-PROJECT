ej.base.enableRipple(true);
   
   var calendar = new ej.calendars.Calendar({   
          //sets the start view.
    start: "Year",
    //sets the value.
    value: new Date()   
    });
    calendar.appendTo('#element');