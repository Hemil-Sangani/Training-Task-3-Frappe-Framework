// Copyright (c) 2025, hemil and contributors
// For license information, please see license.txt

frappe.listview_settings["Library Member"] = {
	onload: function (listview) {
		listview.page.add_button(__("Custom Button"), function () {
			console.log("This is a Custom Button in List View");
		});
	},
};
