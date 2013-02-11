
var tnsValue = false;
var dashBoard;
var IconsToShow='';
//Ext.Loader.setConfig({enabled:true});
//Ext.Loader.setPath('Ext.ux', 'touch/builds/ux');

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
                                                             /*{
                                                                text: 'My Profile',
                                                                ui: 'normal-small',
                                                                handler: function() { window.location = "profile.html" }

                                                                },*/
                                                             {
                                                                 text: 'Settings',
                                                                 ui: 'normal-small',
                                                                 //handler:function(){window.location = "settings.html"}
                                                                 handler: function() { window.location = "PAMSettings.html" }
                                                                 
                                                             },
                                                             {
                                                                 text: 'Logout',
                                                                 ui: 'decline',
                                                                 handler: function() {
                                                                     
                                                                     Ext.Ajax.request({
                                                                         url: 'https://pam.suzlon.com/User_Track.aspx', params: { Track_Type: 'User_Logout' },
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
                    url: 'https://pam.suzlon.com/Counters.aspx',
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
                            // window.location= "settings.html";
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
            //left: '15%',
            //top: '15%',
            //left: '30px', 
            top: 0,
            //width:'100%',
            modal: true,
            hideOnMaskTap: true,
            hidden: true,
            //width:'80px',
            //height:'80%',
            scrollable: false,
            //toolbar: {docked: "top", xtype: "titlebar", ui: "light"},
            items: oneEarthIconList
            
        });
        
        //list.add(actionSheet);
        
        /******** Generating Icons ***************/
        //  list.setMasked({ xtype: 'loadmask', message: 'Please wait...<br/>While we build your <br/> Dashboard !!', centered: true, fullscreen: true, indicator: true });
        Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/Counters.aspx',
                          success:
                          function(response, request) {
                              var res = Ext.JSON.decode(response.responseText);
                              //var res = response.responseText;
                              tnsValue = res.tnc;
                              //dashBoard = res.cells;
                              /**Icons**/
                              //Method of PamCommon.js
                              if(res.Apps!="")
                              {
                                  IconsToShow=","+res.Apps+",";
                              }
                              
                              var showOneEarth=false;
                              if (IconsToShow == '' || (IconsToShow.search(',7,') < 0 && IconsToShow.search(',1,') < 0)) {
                                  showOneEarth=true;
                              }
                              
                              /**End Icons**/   
                              dashBoard = fixedDashboard.cells;
                              
                              if (res.tnc == "true") {
                                  
                                  //  list.unmask();
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
                                  
                                  
                                  //                    list.add({
                                  //                            id: 'OE',
                                  //                            html: '<div id="OE" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_OE" class="x-badge">0</span><img src="images/oneearth.png" title="OE" width=48 height=48 /><span id="Span2_OE" class="x-button-label" style="font-size:60%;">One Earth</span></div>',
                                  //                            listeners: {tap: {element: 'element',fn: oneEarthIcons}}
                                  //                            
                                  //                            });
                                  
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
                              /*
list.add(
{
id: 'OE',
html: '<div id="OE" style="text-align:center;margin:0px;padding:0px;height:60px;width:60px;" class="x-button-normal  x-iconalign-center x-hasbadge"><span style="display:none" id="badgeSpan_OE" class="x-badge">0</span><img src="images/oneearth.png" title="OE" width=48 height=48 /><span id="Span2_OE" class="x-button-label" style="font-size:60%;">One Earth</span></div>',
listeners: {tap: {element: 'element',fn: oneEarthIcons}}
});
*/
                              list.add({ xtype: 'toolbar', docked: 'top', layout: { pack: 'left' },
                                        style:blueHeader,
                                        //title:'<font style="font-size: 14px;">'+ res.userName +'</font>',
                                        items: [
                                            { xtype: 'container',width:'100%' , layout: 'hbox', ui: 'plain',
                                             
                                             items: [
                                                 {
                                                     xtype: 'button',
                                                     name: 'oneEarth',
                                                     ui: 'plain',
                                                     id:'SOneEarthID',
                                                     hidden:showOneEarth,
                                                     //text: '<img src="images/oneearth.png" height="26px"/><br/><span style="vertical-align:top,font-size:50%">OneEarth</font>',
                                                     text: '<img src="images/acu/PAM_OneEarth_logo.png" height="40px" />',
                                                     iconMask: true,
                                                     align: 'left',
                                                     style: 'left:-10px;top:-5px;',
                                                     handler: function() {
                                                         /*****/
                                                         Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/AsyncCall.aspx',params:{Item:'VMS'},
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
                                                     
                                                     //html:"<img src='http://mysite.suzlon.com/User%20Photos/Profile%20Pictuhttps://pam.suzlon.com/_t/suzlon_dkar_SThumb_jpg.jpg'/>",
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
                              //window.location="login.html";
                          } // failure
                          
                         });
        
        var tncBtnClick = function(obj) {
            if (obj.id == "btnAgree") {
                Ext.Ajax.request({ method: 'GET', url: 'https://pam.suzlon.com/TC.aspx' });
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
                //Ext.Msg.alert('You know','You have to Agree Terms and conditions to use paM',function(btn){if(btn=="ok")window.location="login.html?UserName=logout";})
                Ext.Msg.alert('Hey pal !!!', 'You have to Agree Terms to use<br/> <img src="images/acu/pam_small.png"/>');
            }
        }
            
            } 
            
    
}); 



