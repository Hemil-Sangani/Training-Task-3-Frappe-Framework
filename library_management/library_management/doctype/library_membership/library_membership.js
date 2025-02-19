// Copyright (c) 2025, hemil and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Membership", {
    refresh: function(frm) {
        frm.add_custom_button('PRO', function() {
            frappe.confirm("Are you sure You Want To Buy PRO Membership",()=>{
                let d = new frappe.ui.Dialog({  
                    title: 'PRO Membership Form',
                    fields: [{
                        fieldname: 'from_date',
                        label: 'From Date',
                        fieldtype: 'Date',
                    },
                    {
                        fieldname: 'to_date',
                        label: 'To Date',
                        fieldtype: 'Date',
                    },
                    
                {
                    fieldname: 'library_member',
                    label: 'Library Member',
                    fieldtype: 'Link',
                    options: 'Library Member',
                }],
                size: 'small',
                primary_action_label: 'Submit',
                primary_action(values){
                        frappe.warn("Are you sure you want to buy PRO Membership","You are Becoming Pro Member",()=>{
                            let success_dialog = frappe.msgprint({
                                title: 'Congratulations',
                                message: 'You are Now Pro Member',
                                indicator: 'green',
                                primary_action:{
                                    action:()=>{
                                        console.log(values)
                                        debugger
                                   frappe.new_doc("Library Membership",{library_member:values.library_member}, doc=>{
                                    doc.from_date = values.from_date
                                    doc.to_date = values.to_date
                                    doc.pro_member = true
                                    doc.paid = true
                                   })
                                    success_dialog.hide();
                                }
                            }
                            })
                        },
                    "Continue")
                    d.hide();
    
                    }
                
                });
                d.show();
            })
            let d = new frappe.ui.Dialog({
                'title': 'Want Pro Subscription?',

            })
        });
    },
    on_submit: function(frm) {
        frappe.msgprint("You Successfully Created the Membership");
    }
});
