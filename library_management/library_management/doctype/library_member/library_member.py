# Copyright (c) 2025, hemil and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryMember(Document):
	def before_save(self):
		self.full_name = f"{self.first_name} {self.last_name or ''}"
		
@frappe.whitelist()
def create_record(library_member_name):
	member = frappe.get_doc('Library Member', library_member_name)
	new_record = frappe.new_doc('Library Membership')
	new_record.full_name = member.full_name
	new_record.library_member = member.name
	new_record.docstatus = 1


	new_record.insert()
	frappe.db.commit()

