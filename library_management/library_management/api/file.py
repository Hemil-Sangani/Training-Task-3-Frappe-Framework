import frappe

@frappe.whitelist()
def display_result(doctype):
    data = frappe.get_all(doctype)
    total_records = len(data)
    adult_member = frappe.db.count(doctype,{
        "custom_age": (">=", 18)
    })
    return f"There are Total {total_records} members in {doctype} and {adult_member} are Adult Members"
