Ext.setup({ viewport: { autoMaximize: true },
    name: 'Suzlon',
    onReady: function() {
        Ext.destroy("");
        var formPanel = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            layout: 'card', align: 'center', layout: { pack: 'center' },
            items: [
            {
                html: '<center><div ><img src="images/SuzlonLogo.png" width="80"></div><div ><img src="images/acu/pam.png" ></div></center>',
                align: 'center'
            }
            ,{
            html: 'Personal Assistant on Mobile ',
            style: "text-shadow: 0px 1px 1px #4d4d4d; color: #222;text-align:center;font-size:0.8em;padding-bottom:5px;"
            }
            ,
            {
                xtype: 'fieldset', id: 'login_fieldset',
                items:
                    [
                    { xtype: 'textfield', name: 'name', label: 'User Id', placeHolder: 'User Id', labelWidth: '35%' },
                    { xtype: 'passwordfield', name: 'password', label: 'Password', placeHolder: 'Password', labelWidth: '35%' },
                    { xtype: 'checkboxfield', hidden:true, name: 'rememberMe', label: 'Remember me for 2 weeks', labelWidth: '80%', checked: true },
                    /***************
                    Login Button
                    ****************/
                    { xtype: 'button', name: 'login', text: 'Login', ui: 'confirm',
                                handler: function() {
                                    var formVals = JSON.stringify(formPanel.getValues(), null, 2);
                                    var vals = Ext.JSON.decode(formVals);
                                    if (vals.name == '') { Ext.Msg.alert('Required', 'User Id and Password'); return false; }
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Authentication in progress...<br/>Please wait' });
                                    Ext.Ajax.request({
                                        url: 'https://pam.suzlon.com/checklogin.aspx', params: { UserName: vals.name, Password: vals.password, IsRemember: vals.rememberMe },
                                        success: function(response) {
                                            formPanel.unmask();
                                            var text = response.responseText;
                                            var result = Ext.JSON.decode(text);
                                            if (result.login == 'true') {

                                                //For tracking
                                                Ext.Ajax.request({
                                                    url: 'https://pam.suzlon.com/User_Track.aspx', params: { Track_Type: 'User_Login' },
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
                    ]
            } // fieldset end
            ,{
                html: 'Simple ! Your Own ! Fun !',
                style: "text-shadow: 0px 1px 1px #4d4d4d; color: #222;text-align:center;font-size:1.2em"
            }
            ,
            {
                html: 'Usage is based upon the agreement of “Terms of Use”<br/>Have a question… raise paM ticket.',
                style: "text-shadow: -1px -1px 1px #fff, 1px 1px 1px ; color: #9c8468; opacity: 1.5;text-align:center;font-size:0.6em"
            }
            
                   
    ]

        });

        Ext.get("login_fieldset").wrap({
            tag: 'form',
            id: 'login_form_id'
        });
    Ext.Ajax.request({ url: 'https://pam.suzlon.com/checklogin.aspx', params: { UserName: isLogout },
        method: 'POST', success:
    function(response) {
                var result = Ext.JSON.decode(response.responseText);
                        if(result.login==undefined)
                        {
                                formPanel.setValues({ name: result.name, password: result.password });
                                if (result.direct) {
                                    formPanel.setMasked({ xtype: 'loadmask', message: 'Please wait...' });

                                    Ext.Ajax.request({
                                        url: 'https://pam.suzlon.com/User_Track.aspx', params: { Track_Type: 'User_Login' },
                                        success: function(response) {
                                            window.location = 'home.html';
                                        }
                                    });
                             }
                        }
                }
    });

    }
});




