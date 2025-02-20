frappe.pages["custom-page"].on_page_load = function(wrapper) {
    let page = frappe.ui.make_app_page({
        parent: wrapper,
        title: 'Custom Page',
        single_column: true
    });
    page.set_title("Custom Page");
    page.set_title_sub('Subtitle');
    page.set_indicator("Correct","green");
    page.set_primary_action("Print",()=>console.log("Print"));
    page.set_secondary_action("Refresh",()=>console.log("Refresh"));
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