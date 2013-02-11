function CallCounterThread() {
    Ext.Ajax.request({ method: 'GET', url: 'res/AsyncCall.aspx', params: { Item: 'tms' },
        success:
            function(response, request) {
                var s = document.getElementById("badgeSpan_tms");
                var res = Ext.JSON.decode(response.responseText);
                //s.innerText = parseInt(res.counter, 10) + parseInt(document.getElementById("badgeSpan_tms").innerText);
                s.innerText = parseInt(res.counter, 10);
                s.style.display = 'none';
            }, //success
        failure: function(response, request) {

        } // failure

    });
}

//6000 = 6 Seconds
//setInterval(CallCounterThread, 2000);

function hideIcons() {
try{
    if(document.getElementById('idea'))    document.getElementById('idea').style.display = 'none';
    if (document.getElementById('feedback')) document.getElementById('feedback').style.display = 'none';
    if (IconsToShow=='' || IconsToShow.search(',1,') < 0) {
        //VMS
        document.getElementById('vms').style.display = 'none'; 
    }
    if (IconsToShow == '' || IconsToShow.search(',2,') < 0) {
        //DCI
        document.getElementById('dci').style.display = 'none'; 
    }
    if (IconsToShow == '' || IconsToShow.search(',3,') < 0) {
        //SAPPS
        document.getElementById('sapps').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',4,') < 0) {
        //ICRMS
        document.getElementById('iCRMS').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',5,') < 0) {
        //CARBOOKING
        document.getElementById('carbooking').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',9,') < 0) {
    //ABOUT
        document.getElementById('about').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',10,') < 0) {
    //Ticket
        document.getElementById('ticket').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',6,') < 0) {
        //Settings
        document.getElementById('settings').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',12,') < 0) {
        //SCADA
        document.getElementById('scada').style.display = 'none';
    }
    if (IconsToShow == '' || IconsToShow.search(',13,') < 0) {
        //TMS
        document.getElementById('tms').style.display = 'none';
    }
}

catch (ex) { }

CallCounterThread();
}



var oneEarthIconList = 
[
//{xtype:'titlebar',text:'One Earth`s',style:'font-size:80%;padding-bottom:5px;font-weight:bold;'},
{
         id:'vms',
         html:'<div id="vms" style="text-align:center;margin:0px;padding-bottom:15px;height:60px;width:60px;border:1px red;" ' +
                'class="x-button-normal  x-iconalign-center x-hasbadge"><span id="badgeSpan_vms" ' +
                'class="x-badge" style="left:40px;display:none;">0</span><img src="images/acu/vms.png" title="VMS" width=48 height=48 />'+
                '<span id="Span2_vms" class="x-button-label" style="font-size:60%;">VMS</span></div>',
         listeners:{
            tap:{
               element:'element',
               fn:bigClick
            }
         }
      },
      {

      id: 'cafeteria',
      html: '<div id="cafeteria" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_cafeteria" class="x-badge">0</span><img src="images/acu/icono_cafeteria.png" title="Cafeteria" width=46 height=48 /><span id="Span2_ic" class="x-button-label" style="font-size:60%;">Cafeteria</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }
      

      
];