# Copyright (c) 2025, hemil and contributors
# For license information, please see license.txt

import frappe

def execute(filters=None):
    data = []
    columns = [
        {
            "fieldname": "first_name",
            "fieldtype": "Data",
            "label": "First Name"
        },
        {
            "fieldname": "email_address",
            "fieldtype": "Data",
            "label": "Email Address"
        },
        {
            "fieldname": "phone",
            "fieldtype": "Data",
            "label": "Phone"
        },
        {
            "fieldname": "custom_age",
            "fieldtype": "Int",
            "label": "age"
        },
    ]

    members = frappe.get_all("Library Member", fields=["first_name", "email_address", "phone","custom_age"])
    for member in members:
        data.append({
            'first_name': member['first_name'],
            'email_address': member['email_address'],
            'phone': member['phone'],
            "custom_age":member['custom_age'],
        })
    data.append({
        'first_name': "Krish",
        'email_address': "hemil@gmail.com",
        'phone': "9090909090",
        'custom_age':99
    })
    chart = get_chart(data)
    report_summary = get_report_summary(data)

    return columns, data, None, chart, report_summary


def get_chart(data):
    age_group = get_age_group(data)
    
    return {
       "data": {
           "labels":age_group.keys(),
           "datasets" : [{"name":"Age Group Participation","values":age_group.values()}],
        },
        "type": "percentage",
        "height":300,
        "colors": ["red", "blue", "green", "orange"],
    }

def get_report_summary(data):
    average_member_age = round(sum([d["custom_age"] for d in data]) / len(data),2)

    return [{
 "value": average_member_age,
 "indicator": "Green" if average_member_age > 21 else "Blue",
 "label": "Average Memeber Age",
 "datatype": "Integer",
}]
    
def get_age_group(data):
    age_group = {"children":0,"youth":0,"adult":0,"senior_citizen":0}
    for d in data:
        if d["custom_age"] in range(0,18):
            age_group["children"]+=1
        elif d["custom_age"] in range(18,30):
            age_group["youth"]+=1
        elif d["custom_age"] in range(30,60):
            age_group["adult"]+=1
        else:
            age_group["senior_citizen"]+=1
    return age_group
