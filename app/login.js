Ext.setup({ viewport: { autoMaximize: true },
    name: 'Suzlon',
    onReady: function() {
        Ext.destroy("");
        var formPanel = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            layout: 'card', align: 'center', layout: { pack: 'center' },
            items: [
            {
                //xtype:'panel',layout:{pack: 'center'},
                html: '<center><div ><img src="images/SuzlonLogo.png" width="80"></div><div ><img src="images/acu/pam.png" ></div></center>',
                align: 'center'
            }
            ,{
            //html: 'paM - Personal Assistant on Mobile ',
            html: 'Personal Assistant on Mobile ',
            //style:"font-size:0.9em;text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; color: #9c8468; opacity: 0.3;text-align:center;padding-bottom:5px;"
            style: "text-shadow: 0px 1px 1px #4d4d4d; color: #222;text-align:center;font-size:0.8em;padding-bottom:5px;"
            }
            ,
            {
                xtype: 'fieldset', id: 'login_fieldset', //style:'margin-top:10px;',
                //instructions: 'User Id and Password required',
                items:
                    [
                    { xtype: 'textfield', name: 'name', label: 'User Id', placeHolder: 'User Id', labelWidth: '35%' },
                    { xtype: 'passwordfield', name: 'password', label: 'Password', placeHolder: 'Password', labelWidth: '35%' },
                    { xtype: 'checkboxfield', hidden:true, name: 'rememberMe', label: 'Remember me for 2 weeks', labelWidth: '80%', checked: true },
                    /***************
                    Login Button
                    ****************/
                    { xtype: 'button', name: 'login', text: 'Login', ui: 'confirm', //height:30, width:100,docked:'left',
                                handler: function() {
                                    var formVals = JSON.stringify(formPanel.getValues(), null, 2);
                                    var vals = Ext.JSON.decode(formVals);
                                    if (vals.name == '') { Ext.Msg.alert('Required', 'User Id and Password'); return false; }
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Authentication in progress...<br/>Please wait' });
                                     Ext.Ajax.request({
                                        url: 'http://localhost:81/pam/res/checklogin.aspx', 
										params: { UserName: vals.name, Password: vals.password, IsRemember: vals.rememberMe },
                                        success: function(response) {
                                            formPanel.unmask();
                                            var text = response.responseText;
                                            //var result = Ext.JSON.decode(text);
											var result = text;
                                            if (result.login == 'true') {

                                                //For tracking
                                                Ext.Ajax.request({
                                                    url: 'http://localhost:81/pam/res/User_Track.aspx',
													callbackKey: 'callback',
													params: { Track_Type: 'User_Login' },
                                                    success: function(response) {
                                                        window.location = 'home.html?UserName=' + vals.name;
                                                    }
                                                });

                                            }
                                            else if (result.login == 'sorry') {
                                                Ext.Msg.alert('WOW !!!', 'Good to know that you wanna try me.. <br/>hold your breath.. request to enable login to paM team first.');
                                            }
                                            else {
                                                Ext.Msg.alert('Sorry', 'User Id / Password is wrong');
                                            }
                                        },
                                        failure: function() { Ext.Msg.alert('Status', 'Login failed'); formPanel.unmask(); }
                                    }); //>> Ajax End

                                }
                            }
                    /***************/
                    
                    //,{html: '&nbsp;'}
                    ]
            } // fieldset end
             /*,
           
            { xtype: 'panel', layout: {type: 'vbox'},//cls:'x-container',
            //style:'background-color:#F7F7F7;',
            //style:'border:1px solid red;position:relative;',
                        items: [
                            { xtype: 'button', name: 'login', text: 'Login', ui: 'confirm',
                                handler: function() {
                                    var formVals = JSON.stringify(formPanel.getValues(), null, 2);
                                    var vals = Ext.JSON.decode(formVals);
                                    if (vals.name == '') { Ext.Msg.alert('Required', 'User Id and Password'); return false; }
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Authentication in progress...<br/>Please wait' });
                                    Ext.Ajax.request({
                                        url: 'https://pam.suzlon.com/res/checklogin.aspx', params: { UserName: vals.name, Password: vals.password, IsRemember: vals.rememberMe },
                                        success: function(response) {
                                            formPanel.unmask();
                                            var text = response.responseText;
                                            var result = Ext.JSON.decode(text);
                                            if (result.login == 'true') {

                                                //For tracking
                                                Ext.Ajax.request({
                                                    url: 'https://pam.suzlon.com/res/User_Track.aspx', params: { Track_Type: 'User_Login' },
                                                    success: function(response) {
                                                        window.location = 'home.html?UserName=' + vals.name;
                                                    }
                                                });

                                            }
                                            else if (result.login == 'sorry') {
                                                Ext.Msg.alert('WOW !!!', 'Good to know that you wanna try me.. <br/>hold your breath.. request to enable login to paM team first.');
                                            }
                                            else {
                                                Ext.Msg.alert('Sorry', 'User Id / Password is wrong');
                                            }
                                        },
                                        failure: function() { Ext.Msg.alert('Status', 'Login failed'); formPanel.unmask(); }
                                    }); //>> Ajax End

                                }
                            }
                            ]}//>> Container End
                            
                    */
            ,{
                html: 'Simple ! Your Own ! Fun !',
                //style:"font-size:1.2em;text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000; color: #9c8468; opacity: 0.3;text-align:center;padding-bottom:15px;"
                style: "text-shadow: 0px 1px 1px #4d4d4d; color: #222;text-align:center;font-size:1.2em"
            }
            ,
            {
                html: 'Usage is based upon the agreement of “Terms of Use”<br/>Have a question… raise paM ticket.',
                //style:'text-shadow: 2px 2px 5px #111;font-size: 0.8em;color: #f5f5f5;text-align:center'
                //style:'text-shadow: 0px -0px 10px #fff, 0px -3px 9px #FF0;font-size: 1em;color: #000;text-align: center;padding: 10px 0px 5px 0px;/*background: #151515;*/'
                //style:"text-shadow: 0px 1px 1px #4d4d4d; color: #222;text-align:center;font-size:0.6em"
                style: "text-shadow: -1px -1px 1px #fff, 1px 1px 1px ; color: #9c8468; opacity: 1.5;text-align:center;font-size:0.6em"
            }
            
                   
    ]

        });

        Ext.get("login_fieldset").wrap({
            tag: 'form',
            id: 'login_form_id'
        });
    Ext.Ajax.request({ url: 'http://localhost:81/pam/res/checklogin.aspx', params: { UserName: isLogout },
        method: 'POST', success:
    function(response) {
                //var result = Ext.JSON.decode(response.responseText);
				var result = response.responseText;
                        if(result.login==undefined)
                        {
                                formPanel.setValues({ name: result.name, password: result.password });
                                if (result.direct) {
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Please wait...' });

                                      Ext.data.JsonP.request({
                                        url: 'https://pam.suzlon.com/res/User_Track.aspx', params: { Track_Type: 'User_Login' },
                                        success: function(response) {
                                            window.location = 'home.html';
                                        }
                                    });
                             }
                        }
                        else
                        {
                        ///Ext.Msg.alert('Login failed',result.login);
                        }
                }
    });
/*
    formPanel.add({
        xtype: 'toolbar', docked: 'bottom', layout: { pack: 'right' },
        items:
                    [{ xtype: 'container', layout: 'hbox',
                        items: [
                            { xtype: 'button', name: 'login', text: 'Login', ui: 'confirm',
                                handler: function() {
                                    var formVals = JSON.stringify(formPanel.getValues(), null, 2);
                                    var vals = Ext.JSON.decode(formVals);
                                    if (vals.name == '') { Ext.Msg.alert('Required', 'User Id and Password'); return false; }
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Authentication in progress...<br/>Please wait' });
                                    Ext.Ajax.request({
                                        url: 'https://pam.suzlon.com/res/checklogin.aspx', params: { UserName: vals.name, Password: vals.password, IsRemember: vals.rememberMe },
                                        success: function(response) {
                                            formPanel.unmask();
                                            var text = response.responseText;
                                            var result = Ext.JSON.decode(text);
                                            if (result.login == 'true') {

                                                //For tracking
                                                Ext.Ajax.request({
                                                    url: 'https://pam.suzlon.com/res/User_Track.aspx', params: { Track_Type: 'User_Login' },
                                                    success: function(response) {
                                                        window.location = 'home.html?UserName=' + vals.name;
                                                    }
                                                });

                                            }
                                            else if (result.login == 'sorry') {
                                                Ext.Msg.alert('WOW !!!', 'Good to know that you wanna try me.. <br/>hold your breath.. request to enable login to paM team first.');
                                            }
                                            else {
                                                Ext.Msg.alert('Sorry', 'User Id / Password is wrong');
                                            }
                                        },
                                        failure: function() { Ext.Msg.alert('Status', 'Login failed'); formPanel.unmask(); }
                                    }); //>> Ajax End

                                }
                            }
                            ]}//>> Container End
                    ]} //>> Tool Bar End

);

*/

        /*
        formPanel.add({
        xtype: 'toolbar',
        docked: 'bottom',
        layout: { pack: 'center' },
        items: [
        {
        xtype: 'button',
        text: 'Set Data',
        handler: function() {
        formPanel.setValues({
        name: 'Ed',
        email: 'ed@sencha.com',
        password: 'secret'
        })
        }
        },
        {
        xtype: 'button',
        text: 'Get Data',
        handler: function() {
        Ext.Msg.alert('Form Values', JSON.stringify(formPanel.getValues(), null, 2));
        }
        },
        {
        xtype: 'button',
        text: 'Clear Data',
        handler: function() {
        formPanel.reset();
        }
        }
        ]
        });
        */

    }
});




