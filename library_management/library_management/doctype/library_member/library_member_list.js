// Copyright (c) 2025, hemil and contributors
// For license information, please see license.txt

frappe.listview_settings["Library Member"] = {
	onload: function (listview) {
		listview.page.add_button(__("Custom Button"), function () {
			frappe.call({
				method: "library_management.library_management.api.file.display_result",
				args: { doctype: listview.doctype},
				callback: function (r) {
					frappe.msgprint(r.message);
				}
			})
		});
	},
};
