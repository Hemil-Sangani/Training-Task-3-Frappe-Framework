# Copyright (c) 2025, hemil and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.naming import getseries


class LibraryTransaction(Document):
	def autoname(self):
		prefix = 'LT-{}-'.format(self.library_member)
		series_number = getseries(prefix, 3)
		self.name = f"{prefix}{series_number}"  
	
	def after_insert(self):
		frappe.msgprint(f"You Added a new Transaction with {self.name} name")

	def on_submit(self):
		frappe.msgprint("You Succesfully Submitted the Transaction")
