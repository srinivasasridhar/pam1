
var tnsValue = false;
var dashBoard;
var IconsToShow='';
var oneEarthIconList = 
[
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
/***************************
On Click of Big Icons
****************************/
var bigClick = function() {
    var bText = document.getElementById("badgeSpan_" + this.id).innerText;
    if (this.id == 'vms' && parseInt(bText) == 0) {
        Ext.Msg.alert('You have', 'No Visitors Today !!');
        return false;
    }
    sessionStorage['AppTrackTime'] = new Date();

    Ext.Ajax.request({
        url: 'res/User_Track.aspx', method: 'post', params: { Track_Type: 'App_Track', App_type: this.id },
        success: function(response) {
            var result = response.responseText;
            if (result == 'vms') {
                if (parseInt(bText) != 0) {
                    sessionStorage['AppId'] = 1;
                    window.location = "vms.html";
                }

            }
            else if (result == 'policy') {
                window.location = "policy.html";
            }
            else if (result == 'holidays') {
                window.location = "holiday.html";
            }
            else if (result == 'share') {
                window.location = "share.html";
            }
            else if (result == 'tms') {
            window.location = "tms.html";
            }
            else if (result == 'ticket') {
                window.location = "ticket.html";
            }
            else if (result == 'feedback') {
                window.location = "feedback.html";
            }
            else if (result == 'cats') {
                window.location = "cranes.html";
            }
            else if (result == 'profile') {
                window.location = "profile.html";
            }
            else if (result == 'idea') {
                window.location = "idea.html";
            }
            else if (result == 'dci') {
                sessionStorage['AppId'] = 2;
                window.location = "DCM.htm";
            }
            else if (result == 'about') {
                window.location = "about.html";
            }
            else if (result == 'ic') {
                window.location = "ic.html";
            }
            else if (result == 'cafeteria') {
                window.location = "cafteria.htm";
            }
            else if (result == 'settings') {
                window.location = "PAMSettings.html";
            }
            else if (result == 'carbooking') {
                sessionStorage['AppId'] = 5;
                window.location = "carbooking.html";
            }

            else if (result == 'sapps') {
                sessionStorage['AppId'] = 3;
                window.location = "sap_ps/sapps.htm";
            }
            else if (result == 'iCRMS') {
                sessionStorage['AppId'] = 4;
                window.location = "iCRMS.html";
            }
            else if (result == 'scada') {
                sessionStorage['AppId'] = 4;
                window.location = "scadaimport.html";
            }
            else {
                
            }
        }
    });





}
/**End of Big Icon Click **/
var fDashboard =
{
    cells: [
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
      
      {
          id: 'idea',
          html: '<div id="idea" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_idea" class="x-badge">0</span><img src="images/acu/ideaMgt.png" title="Idea" width=48 height=48 /><span id="Span2_idea" class="x-button-label" style="font-size:60%;">Idea</span></div>',
          listeners: {
              tap: {
                  element: 'element',
                  fn: bigClick
              }
          }
      },
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
      
   ]
};
Ext.application({
    viewport: { autoMaximize: true },
    name: 'paM',
    icon: {
        57: 'touch/resources/icons/Icon.png',
        72: 'touch/resources/icons/Icon~ipad.png',
        114: 'touch/resources/icons/Icon@2x.png',
        144: 'touch/resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'touch/resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'touch/resources/loading/Homescreen~ipad.jpg',
    
    launch: function() {
        var iconsToShow;
        
        var overlayTNC = Ext.Viewport.add({
            xtype: 'panel',
            left: '5%',
            top: '5%',
            modal: true,
            hideOnMaskTap: false,
            hidden: true,
            width: '90%', height: '90%', scrollable: true,
            style: 'background:white;border:4px solid #E4601D',
            styleHtmlContent: true
        });
        
        var actionSheet = Ext.create('Ext.ActionSheet', { hideOnMaskTap: true,
                                                         items: [
                                                            
                                                             {
                                                                 text: 'Settings',
                                                                 ui: 'normal-small',
                                                                 handler: function() { window.location = "PAMSettings.html" }
                                                                 
                                                             },
                                                             {
                                                                 text: 'Logout',
                                                                 ui: 'decline',
                                                                 handler: function() {
                                                                     Ext.Ajax.request({
                                                                         url: 'https://pam.suzlon.com/res/User_Track.aspx', params: { Track_Type: 'User_Logout' },
                                                                         success: function(response) {
                                                                             window.location = "login.html?UserName=logout";
                                                                         }
                                                                         
                                                                     });
                                                                     
                                                                 }
                                                             }
                                                         ]
                                                        });
        /********** Click on Small Icon (Overlay's) ************/
        var iconHandler = function(obj) {
            if (tnsValue) {
                if (obj.id == "Cafeteria") overlayCafe.setMasked({ xtype: 'loadmask', centered: true, fullscreen: true, indicator: true });
                
                Ext.Ajax.request({
                    method: 'POST',
                    url: 'https://pam.suzlon.com/res/Counters.aspx',
                    //url:url,
                    params: { count: obj.id },
                    success: function(response, request) {
                        if (obj.id == "Cafeteria") {
                            overlayCafe.setHtml(response.responseText);
                            overlayCafe.add(
                                {
                                    xtype: 'panel', id: 'panelCafe', dock: 'bottom', layout: { type: 'vbox', align: 'middle' },
                                    
                                    items: [
                                        { xtype: 'rating',
                                         itemsCount: 5,
                                         itemCls: 'x-rating-star',
                                         itemHoverCls: 'x-rating-star-hover',
                                         clearIcon: true
                                         
                                        },
                                        { xtype: 'button',
                                         text: 'rate it',
                                         ui: 'action', style: 'height:10px;width:70px;font-size:80%'
                                        }
                                    ]
                                });
                            
                            overlayCafe.unmask();
                            overlayCafe.showBy(obj); //>>> obj is the button object
                        }
                        if (obj.id == "Leaves") {
                            overlayLeaves.setHtml(response.responseText);
                            overlayLeaves.showBy(obj); //>>> obj is the button object
                        }
                        if (obj.id == "settings") {
                            window.location = "PAMSettings.html";
                        }
                        
                        
                        
                    }, //end of success
                    failure: function(response, request) {
                        Ext.Msg.alert('Sorry', 'Something went wrong!,<br/> Contact Mobile Admin');
                        
                    } // end of failure
                });
            }
        }
            
            
            var list = new Ext.Panel({ fullscreen: true, layout: 'fit', scroll: 'vertical', align: 'center', pack: 'center' });
        
        /** To show overlay popup when user tap's on Small Icons **/
        var overlayLeaves = Ext.Viewport.add({
            xtype: 'panel',
            left: 0,
            top: 0,
            modal: true,
            hideOnMaskTap: true,
            hidden: true,
            style: 'background:white;border:4px solid #E4601D',
            styleHtmlContent: true
            
        });
        
        var overlayCafe = Ext.Viewport.add({
            xtype: 'panel',
            left: 0,
            top: 0,
            modal: true,
            hideOnMaskTap: true,
            hidden: true,
            style: 'background:white;border:4px solid #E4601D',
            styleHtmlContent: true
        });
        
        var oneEarthIcons = Ext.Viewport.add({
            xtype: 'panel',
            scrollable: 'vertical', animate: true,
            pack: 'center',
            style: 'background:white;margin: auto !important; left:-10px; text-align: center;background:white;border:2px solid #000',
            defaults: { style: "float: left;margin-top:0px;" },
            top: 0,
            modal: true,
            hideOnMaskTap: true,
            hidden: true,
            scrollable: false,
            items: oneEarthIconList
            
        });
        
        //list.add(actionSheet);
        
        /******** Generating Icons ***************/
        Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/res/Counters.aspx',
                          success:
                          function(response, request) {
                              var res = Ext.JSON.decode(response.responseText);
                              tnsValue = res.tnc;
                              /**Icons**/
                              if(res.Apps!="")
                                  IconsToShow=","+res.Apps+",";
                              
                              var showOneEarth=false;
                              if (IconsToShow == '' || (IconsToShow.search(',7,') < 0 && IconsToShow.search(',1,') < 0)) {
                                  showOneEarth=true;
                              }
                              
                              /**End Icons**/   
                              dashBoard = fDashboard.cells;
                              
                              if (res.tnc == "true") {
                                  list.add({
                                      xtype: 'container', scrollable: 'vertical', pack: 'center',
                                      style: 'margin: auto !important; text-align: center;',
                                      defaults: {
                                          style: "float: left;margin-top:10px;",
                                          height: 80,
                                          width: 80
                                      }, items: dashBoard,
                                      
                                  });
                                  hideIcons();
                              }
                              else {
                                  
                                  Ext.Ajax.request({ method: 'GET', url: 'tnc.htm', success: function(response, request) { overlayTNC.setHtml(response.responseText); } });
                                  overlayTNC.show();
                                  overlayTNC.add({ xtype: 'panel', docked: 'bottom', layout: { type: 'hbox', align: 'middle' }, style: 'padding-top:5px;',
                                                  items: [
                                                      { xtype: 'spacer' },
                                                      { xtype: 'button', id: 'btnAgree', text: 'Agree', ui: 'confirm-small', handler: tncBtnClick },
                                                      { xtype: 'spacer' },
                                                      { xtype: 'button', id: 'btnDisAgree', text: 'Disagree', ui: 'decline-small', handler: tncBtnClick },
                                                      { xtype: 'spacer' }
                                                  ]
                                                 });
                              }
                              list.add({ xtype: 'toolbar', docked: 'top', layout: { pack: 'left' },
                                        style:blueHeader,
                                        items: [
                                            { xtype: 'container',width:'100%' , layout: 'hbox', ui: 'plain',
                                             items: [
                                                 {
                                                     xtype: 'button',
                                                     name: 'oneEarth',
                                                     ui: 'plain',
                                                     id:'SOneEarthID',
                                                     hidden:showOneEarth,
                                                     text: '<img src="images/acu/PAM_OneEarth_logo.png" height="40px" />',
                                                     iconMask: true,
                                                     align: 'left',
                                                     style: 'left:-10px;top:-5px;',
                                                     handler: function() {
                                                         /*****/
                                                         Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/res/AsyncCall.aspx',params:{Item:'VMS'},
                                                                           success:
                                                                           function(response, request) {
                                                                               var s = document.getElementById("badgeSpan_vms");
                                                                               var res = Ext.JSON.decode(response.responseText);
                                                                               s.innerText = parseInt(res.counter, 10);
                                                                               if(parseInt(res.counter, 10)==0)
                                                                                   s.style.visibility = 'hidden';
                                                                               else
                                                                                   s.style.display = 'block'; 
                                                                           }, //success
                                                                           failure: function(response, request) {
                                                                               
                                                                           } // failure
                                                                           
                                                                          });
                                                         
                                                         /*****/
                                                         oneEarthIcons.show();
                                                         oneEarthIcons.getLayout().setAnimation('slide');
                                                         oneEarthIcons.showBy(this)
                                                             }
                                                     
                                                 },
                                                 {
                                                     xtype:'spacer'
                                                 },
                                                 
                                                 {
                                                     xtype: 'button', name: 'userName', align:'right' , ui: 'plain', style:'text-decoration:underline;',
                                                     text: res.userName,
                                                     handler: function() { Ext.Viewport.add(actionSheet); actionSheet.show(); }
                                                 },
                                                 {
                                                     html:"<img onerror='ImgError(this);'  src='paM_Profile_Pics/suzlon_"+res.domainId+"_SThumb.jpg' />",
                                                     style:"margin-top:10px;margin-right:10px;"
                                                 }
                                             ]}// Container End
                                        ]
                                       });
                              list.unmask();
                              
                          }, //success
                          failure: function(response, request) {
                              Ext.Msg.alert('Sorry', 'Not able bulild your Dashboard, Contact Mobile Admin.!');
                          } // failure
                          
                         });
        
        var tncBtnClick = function(obj) {
            if (obj.id == "btnAgree") {
                Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/res/TC.aspx' });
                overlayTNC.hide();
                tnsValue = true;
                list.setMasked({ xtype: 'loadmask', message: 'Please wait...<br/>While we build your <br/> Dashboard !!', centered: true, fullscreen: true, indicator: true });
                
                //>> Building icons
                list.add({
                    xtype: 'container', scrollable: 'vertical', pack: 'center',
                    style: 'margin: auto !important; text-align: center;',
                    defaults: {
                        style: "float: left;margin: 10px;", // overflow: hidden;border: 1px solid #888;",
                        height: 80,
                        width: 80
                    }, items: dashBoard
                });
                list.unmask();
                hideIcons();
            }
            else {
                Ext.Msg.alert('Hey pal !!!', 'You have to Agree Terms to use<br/> <img src="images/acu/pam_small.png"/>');
            }
        }
            
            } 
            
    
}); 
function CallCounterThread() {
    Ext.Ajax.request({ method: 'GET', url: 'res/AsyncCall.aspx', params: { Item: 'tms' },
        success:
            function(response, request) {
                var s = document.getElementById("badgeSpan_tms");
                var res = Ext.JSON.decode(response.responseText);
                s.innerText = parseInt(res.counter, 10);
                s.style.display = 'none';
            }, //success
        failure: function(response, request) {

        } // failure

    });
}
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



