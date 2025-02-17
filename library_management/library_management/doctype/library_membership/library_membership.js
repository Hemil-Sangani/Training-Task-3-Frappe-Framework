// Copyright (c) 2025, hemil and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Membership", {
    refresh: function(frm) {
        // You can add refresh logic here
    },
    on_submit: function(frm) {
        frappe.msgprint("You Successfully Created the Membership");
    }
});
