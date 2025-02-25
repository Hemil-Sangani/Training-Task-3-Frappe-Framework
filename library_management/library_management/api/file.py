import frappe
from frappe.query_builder.functions import Count

@frappe.whitelist(allow_guest=True)
def display_result(doctype):
    LM = frappe.qb.DocType(doctype)
    count_pages = Count(LM.first_name).as_("total_records")
    data = frappe.qb.from_(LM).select(LM.first_name, LM.email_address, LM.phone, LM.custom_age).where(LM.custom_age != 0).where(LM.first_name=="Suresh").run()
    total_records = len(data)
    total_pages = frappe.qb.from_(LM).select(count_pages).run(as_dict=True)
    library_membership = frappe.qb.DocType("Library Membership")
    membership_data = frappe.qb.from_(library_membership).inner_join(LM).on(LM.name == library_membership.library_member).select(LM.full_name).distinct().run()
    adult_member = frappe.db.count(doctype,{
        "custom_age": (">=", 18)
    })
    return f"There are Total {total_records} members in {doctype} and {adult_member} are Adult Members and Total Pages are {total_pages[0].total_records} and Members having Memberships are {len(membership_data)}"
