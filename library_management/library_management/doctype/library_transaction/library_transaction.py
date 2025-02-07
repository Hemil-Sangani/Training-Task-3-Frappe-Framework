# Copyright (c) 2025, hemil and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryTransaction(Document):
	def before_insert(self):
		frappe.msgprint(f"You Added a new Transaction with {self.name} name")

	def on_submit(self):
		frappe.msgprint("You Succesfully Submitted the Transaction")
