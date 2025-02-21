frappe.pages["custom-page"].on_page_load = function(wrapper) {
    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Custom Page',
        single_column: true
    });
    page.set_title("Custom Page");
    page.set_title_sub('Subtitle');
    page.set_indicator("Correct","green");
    page.set_primary_action("Add Library Member",()=>{
        const csrfToken = frappe.csrf_token;
        fetch('http://library.test:8000/api/resource/Library%20Member',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-Frappe-CSRF-Token": csrfToken,
            },
            body: JSON.stringify({
                "first_name": "Ravindra",
                "last_name": "Jadeja",
                "email_address": "ravi_jadeja@tester.com",
                "custom_age": 32
            })
    }).then(frappe.msgprint("New Library Member Created"));})
    page.set_secondary_action("Admin Detail",()=>{
        fetch('http://library.test:8000/api/resource/User/Administrator',{
            method: 'GET',
            headers: {
                "Authorization": 'token 5c27a03d037091f:626f5dc61cb7389'
            }
        }).then(r => r.json()).then(r => {
            frappe.msgprint("Admininstrator Name:" + r.data.full_name + "<br>" + "Email:" + r.data.email)
    })
    });
    page.add_menu_item("Item 1",()=>console.log("Item 1"));
    page.add_menu_item("Item 2",()=>console.log("Item 2"),true);
    page.add_action_item("Action 1",()=>console.log("Action 1"));
    page.add_action_item("Action 2",()=>console.log("Action 2"),true);
    page.add_inner_button("Inner Button",()=>console.log("Inner Button"));
    page.add_inner_button("Inner Button 2",()=>console.log("Inner Button 2"),"Button Group");
    page.add_inner_button("Inner Button 3",()=>console.log("Inner Button 3"),"Button Group");
    page.change_inner_button_type("Inner Button",null,"primary")
    page.add_field({
        fieldname: 'page_date',
        label: 'Creation Date',
        fieldtype: 'Date',
    })
    page.add_field({
        fieldname: 'first_name',
        label: 'First Name',
        fieldtype: 'Data',
    })
    page.add_field({
        fieldname: 'second_name',
        label: 'Second Name',
        fieldtype: 'Data',
    change(){
        console.log(page.get_form_values())
    }
    })
}