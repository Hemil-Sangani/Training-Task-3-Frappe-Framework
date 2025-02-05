// Copyright (c) 2025, hemil and contributors
// For license information, please see license.txt
// This is Demo Text

frappe.ui.form.on("Library Member", {
	refresh(frm) {
		frm.add_custom_button(__("Library Membership"), function () {
			frappe.call({
				method: "library_management.library_management.doctype.library_member.library_member.create_record",
				args: {
					library_member_name: frm.doc.name,
				},
				callback: function (r) {
					if (r) {
						frappe.msgprint("New Membership Created");
					}
				},
			});
		});
	},
});
