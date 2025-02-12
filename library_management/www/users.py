# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: MIT. See LICENSE

import frappe
def get_context(context):
    context.users = frappe.get_list("User", fields=["first_name", "last_name", "email", "roles"])