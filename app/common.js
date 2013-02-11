


/********** Big Icon Definitions ********************
This is a custom method for making a Big Icons Dashboard:

/****************************************************/

var GridView = function(args) {
    var totalItems = args.cells.length;
    var maxBtnsPerPane = args.cols * args.rows;
    var noPanes = Math.ceil(totalItems / maxBtnsPerPane);
    var panes = [];
    var cellIndex = 0;
    var showIndicator;

    // Create the panes:
    for (var i = 0; i < noPanes; i++) {
        panes[i] = new Ext.Panel({
            title: 'Dashboard' + (i + 1),
            layout: { type: 'vbox', align: 'stretch', valign: 'middle' },
            pack: 'center',
            defaults: { flex: 1 }
        });

        var thisCount = i + maxBtnsPerPane;

        // Loop through how many rows we need:
        for (var rowCount = 0; rowCount < args.rows; rowCount++) {
            var thisRow = new Ext.Panel({ layout: { type: 'hbox', align: 'stretch', pack: 'center' }, id: 'row' + (rowCount + 1), defaults: { flex: 1} });

            // Now we need to add the cells:
            for (var colCount = 0; colCount < args.cols; colCount++) {
                var cellLabel, handlerFunc;

                (cellIndex > (totalItems - 1)) ? cellLabel = '' : cellLabel = args.cells[cellIndex].label;

                if (cellIndex < totalItems) {
                    var thisCell = new Ext.Panel({
                        title: args.cells[cellIndex].label,
                        cls: 'dashboardButton',
                        layout: { type: 'vbox', align: 'center', pack: 'center' },
                        style: 'color:white;font:normal;',
                        id: args.cells[cellIndex].id,
                        items: [{ html: args.tpl.replace(/\{(\w+)\}/g, function(match, key) { return args.cells[cellIndex][key]; })}],
                        //listeners: { tap: { element: 'element', fn: function() { Ext.Msg.alert('Clicked on ' ,  this.id);} }}
                        listeners: { tap: { element: 'element', fn: bigClick} }

                    });
                }
                else
                    var thisCell = new Ext.Panel({ title: '' })

                thisRow.add(thisCell);
                cellIndex++;
            }
            panes[i].add(thisRow);
        }
    }

    (noPanes == 1) ? showIndicator = false : showIndicator = true;

    var gridview = new Ext.Carousel({
        title: args.title,
        items: panes,
        indicator: showIndicator
    });

    return gridview;
};
var isPhone = Ext.os.deviceType == 'Phone';
/************End of Big Icons Definition *****************/


function ImgError(source) {//alert("s");
    //  source.src = "Misc-User-icon.png";
    source.src = "images/userphoto.png";
    //source.src = "dog-large.jpg";
    source.onerror = "";
    return true;
}







/******************************
Not in Use
********** Big Icon Definitions ********************/

var dashboardCfg = {
    defaultCls: 'dashboardButton',
    cols: 4,
    rows: 3,
    title: 'Dashboard',
    cells: [
		{ id: 'adboe_ai', label: 'AI', icon: 'images/apps/adobe_ai.png', display: 'block', badge: '5' },
		{ id: 'adobe_dw', label: 'DW', icon: 'images/apps/adobe_dw.png', display: 'none', badge: '5' },
		{ id: 'email', label: 'EMail', icon: 'images/apps/email.png', display: 'none', badge: '5' },
		{ id: 'chrome', label: 'Chrome', icon: 'images/apps/chrome.png', display: 'none', badge: '5' },
		{ id: 'ie', label: 'IE', icon: 'images/apps/explorer.png', display: 'none', badge: '5' },
		{ id: 'ff', label: 'FireFox', icon: 'images/apps/firefox.png', display: 'none', badge: '5' },
		{ id: 'games', label: 'Games', icon: 'images/apps/games.png', display: 'none', badge: '5' },
		{ id: 'earth', label: 'Earth', icon: 'images/apps/googleEarth.png', display: 'none', badge: '5' },
		{ id: 'mp', label: 'Media', icon: 'images/apps/mediaPlayer.png', display: 'none', badge: '5' },
		{ id: 'safari', label: 'Safari', icon: 'images/apps/safari.png', display: 'none', badge: '5' },
		{ id: 'webcam', label: 'Cam', icon: 'images/apps/webcam.png', display: 'none', badge: '5' },
		{ id: 'something', label: 'Home', icon: 'images/apps/safari.png', display: 'none', badge: '5' }

	],
    //
    //tpl: '<div style="text-align:center;font-size:12px;font-weight:bold;"><img src="{icon}" title="{label}" width="46" height="46" /><br/><span>{label}</span></div>'
    //tpl:'<div id="{id}" class="x-button-normal x-button x-iconalign-center x-hasbadge"><span id="ext-element-99" class="x-badge"></span><img src="{icon}" title="{label}" width="46" height="46" /></div><span id="Span1" class="x-button-label">{label}</span>'
    tpl: '<div id="{id}" class="x-button-normal x-button x-iconalign-center x-hasbadge"><span style="display:{display}" id="badgeSpan_{id}" class="x-badge">{badge}</span><img src="{icon}" title="{label}" width="46" height="46" /></div><span id="Span1" class="x-button-label">{label}</span>'

};




/**********************************/
var fixedDashboard =
{
    cells: [
    
       /*{
          id: 'vms',
          html: '<div id="vms" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:block" id="badgeSpan_vms" class="x-badge">3</span><img src="images/acu/vms.png" title="VMS" width=48 height=48 /><span id="Span2_vms" class="x-button-label" style="font-size:60%;">VMS</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
     
     
      {
          id: 'policy',
          html: '<div id="policy" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:block" id="badgeSpan_policy" class="x-badge">4</span><img src="images/acu/policy.png" title="Policies" width=48 height=48 /><span id="Span2_policy" class="x-button-label" style="font-size:60%;">Policies</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'share',
          html: '<div id="share" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_share" class="x-badge">0</span><img src="images/acu/share.png" title="Share" width=48 height=48 /><span id="Span2_share" class="x-button-label" style="font-size:60%;">Share</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },*/
      {
          id: 'feedback',
          html: '<div id="feedback" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_feedback" class="x-badge">0</span><img src="images/acu/suggestion.png" title="Feedback" width=48 height=48 /><span id="Span2_feedback" class="x-button-label" style="font-size:60%;">Feedback</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      /*
      {
          id: 'rc',
          html: '<div id="rc" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_rc" class="x-badge">0</span><img src="images/acu/rc.png" title="Reason<br/>Code" width=48 height=48 /><span id="Span2_rc" class="x-button-label" style="font-size:60%;">Reason<br/>Code</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },*/
      {
          id: 'idea',
          html: '<div id="idea" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_idea" class="x-badge">0</span><img src="images/acu/ideaMgt.png" title="Idea" width=48 height=48 /><span id="Span2_idea" class="x-button-label" style="font-size:60%;">Idea</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },/*
      {
          id: 'cats',
          html: '<div id="cats" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_cats" class="x-badge">0</span><img src="images/acu/cranes2.png" title="Cranes" width=48 height=48 /><span id="Span2_cats" class="x-button-label" style="font-size:60%;">Cranes</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },*/
      
      {

      id: 'carbooking',
      html: '<div id="carbooking" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_carbooking" class="x-badge">0</span><img src="images/car.jpg" title="Car Booking" width=46 height=48 /><span id="Span2_carbooking" class="x-button-label" style="font-size:60%;">CBS</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }
      ,
      {
          id: 'dci',
          html: '<div id="dci" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_dci" class="x-badge">0</span><img src="images/acu/dci.png" title="DCM" width=48 height=48 /><span id="Span2_dci" class="x-button-label" style="font-size:60%;">DCM</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'iCRMS',
          html: '<div id="iCRMS" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_iCRMS" class="x-badge">0</span><img src="images/acu/Icrms.png" title="iCRMS " width=48 height=48 /><span id="Span2_ic" class="x-button-label" style="font-size:60%;">iCRMS</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'sapps',
          html: '<div id="sapps" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_sapps" class="x-badge">0</span><img src="images/acu/ps_icon2.png" title="SAPPS" width=48 height=48 /><span id="Span2_sapps" class="x-button-label" style="font-size:60%;">SAP PS</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }
       ,
        {
            id: 'tms',
            html: '<div id="tms" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_tms" class="x-badge">0</span><img src="images/acu/tms.png" title="TMS" width=48 height=48 /><span id="Span2_tms" class="x-button-label" style="font-size:60%;">TMS</span></div>',
            listeners: {
                tap: {
                    element: 'element',
                    fn: bigClick
                }
            }
        },
      {
          id: 'settings',
          html: '<div id="settings" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_settings" class="x-badge">0</span><img src="images/acu/setting.png" title="paM Profile" width=48 height=48 /><span id="Span2_settings" class="x-button-label" style="font-size:60%;">Settings</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }
      ,
//      {
//          id: 'profile',
//          html: '<div id="profile" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_profile" class="x-badge">0</span><img src="images/acu/training.png" title="paM Profile" width=48 height=48 /><span id="Span2_profile" class="x-button-label" style="font-size:60%;">Profile</span></div>',
//          listeners: {
//              tap: {
//                  element: 'element',
//                  fn: bigClick
//              }
//          }
//      },
      {
          id: 'ticket',
          html: '<div id="ticket" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_ticket" class="x-badge">0</span><img src="images/acu/ticket.png" title="paM Ticket" width=48 height=48 /><span id="Span2_ticket" class="x-button-label" style="font-size:60%;">paM Ticket</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'holidays',
          html: '<div id="holidays" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_holidays" class="x-badge">0</span><img src="images/acu/holidays.png" title="Holidays" width=48 height=48 /><span id="Span2_holidays" class="x-button-label" style="font-size:60%;">Holidays</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'about',
          html: '<div id="about" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_about" class="x-badge">0</span><img src="images/acu/about.png" title="About Us" width=48 height=48 /><span id="Span2_about" class="x-button-label" style="font-size:60%;">About Us</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
      {
          id: 'scada',
          html: '<div id="scada" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_scada" class="x-badge">0</span><img src="images/acu/settings.png" title="Scada Import " width=48 height=48 /><span id="Span2_scada" class="x-button-label" style="font-size:60%;">SCADA<br/>Import</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }
      /*,
      {
          id: 'ic',
          html: '<div id="ic" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_ic" class="x-badge">0</span><img src="images/acu/ic.png" title="Invoicing<br/>Cell" width=48 height=48 /><span id="Span2_ic" class="x-button-label" style="font-size:60%;">Invoicing<br/>Cell</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      }*/
   ]
};
/***********************************/


