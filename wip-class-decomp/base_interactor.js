//base_interactor implementation heavily based on subarctic
class base_interactor {
    Base_interactor(){
        //TODO: add constructors
    }
    
    //TODO: assign global variables
    _child_index = null; //int
    _child_list = []; //vector
    _clip_bounds = null; //rectangle
    _constraint_flags = null; //int
    _enabled_constraint = null; //int
    _flags = null; //int
    _h = null; //int
    _h_constraint = null; //int
    _parent = null; //interactor
    _part_a_constraint = null; //int
    _part_b_constraint = null; //int
    _user_data = []; //vector
    _visible_constraint = null; //int
    _w = null; //int
    _w_constraint = null; //int
    _x = null; //int
    _x_constraint = null; //int
    _y = null; //int
    _y_constraint = null; //int
    static default_child_hint = null; //int


    active_constraints(){
        return 0; //TODO: return correct int
    }

    add_child(child){ //TODO: confirm completeness
        this._child_list.append(child);
    }

    add_user_datum(datum){
        this._user_data.append(datum);
    }

    attach_dependent(on_part_num, dep_obj, dep_part){
        //TODO: implement attach_dependent
    }

    bound(){
        return this._clip_bounds;
    }

    callback_obj(){
        return this.callback_obj; //TODO: add real callback obj
        //there was no callback object in the list of variables for this class
    }

    child_index(){
        return this._child_index;
    }

    child(indx){
        return this._child_list[indx]; //TODO: confirm correctness
    }

    clear_child_list(){
        this._child_list.length = 0;
    }

    _clear_constraint_flag_bit(mask_value){ //_ in front to make protected
        //TODO: implement _clear_constraint_flag_bit
    }

    _clear_flag_bit(mask_value){
        //TODO: implement _clear_flag_bit
    }

    configure(){
        //TODO: implement configure
    }

    constraint_flag_is_set(mask_value){
        return this._constraint_flags == mask_value; //TODO: confirm correctness
    }

    constraint_flag_string(){
        return String(this._constraint_flags);
    }

    constraint_on(coord_code){
        //TODO: implement constraint_on
    }

    custom_fun1(val1, const_val){
        //TODO: implement custom_fun1
    }

    custom_fun2(val1, val2, const_val){
        //TODO: implement custom_fun2
    }

    _damage_fixed(){
        //TODO: implement damage_fixed
    }

    damage_from_child(originator, user_info, top_left, sz){
        //TODO: implement damage_from_child
    }

    damage_self(){
        //TODO: implement damage_self
    }

    damage_self(originator, user_info, top_left, sz){
        //TODO: implement damage_self
    }

    damage_self(left, top, wid, hi){
        //TODO: implement damage_self
    }

    damage_self(user_info){
        //TODO: implement damage_self
    }

    damage_self(top_left, sz){
        //TODO: implement damage_self
    }

    detach_dependent(on_part_num, dep_obj, dep_part){
        //TODO: implement detach_dependent
    }

    do_action(evt){
        //TODO: implement do_action
    }

    do_action(action_num, evt, parm){
        //TODO: implement do_action
    }

    do_callback(evt){
        //TODO: implement do_callback
    }

    do_callback(evt, callback_num, callback_info){
        //implement callback_info
    }

    drag_feature_point(){
        return 0; //TODO: return correct int
    }

    _draw_children(d){
        //TODO: implement _draw_children
    }

    _draw_self_local(d){
        //TODO: implement _draw_self_local
    }

    draw_self(parent_d){
        //TODO: implement draw_self
    }

    enabled_constraint(){
        //TODO: implement enabled_constraint
    }

    enabled(){
        //TODO: implement enabled
    }

    _enter_local_coordinates(parent_draw){
        //TODO: implement _enter_local_coordinates
    }

    eval_enabled(){
        //TODO: implement eval_enabled
    }

    eval_h(){
        //TODO: implement eval_h
    }

    eval_part_a(){
        //TODO: implement eval_part_a
    }

    eval_part_b(){
        //TODO: implement eval_part_b
    }

    eval_visible(){
        //TODO: implement eval_visible
    }

    eval_w(){
        //TODO: implement eval_w
    }

    eval_x(){
        //TODO: implement eval_x
    }

    eval_y(){
        //TODO: implement eval_y
    }

    eval(coord_code){
        //TODO: implement eval_h
    }

    _exit_local_coords(parent_draw, local_draw){
        //TODO: implement _exit_local_coords
    }

    feature_point_enabled(indx){
        //TODO: implement feature_point_enabled
    }

    feature_point(indx){
        //TODO: implement feature_point
    }

    filter_pt(original_pt, obj, feature_pt){
        //TODO: implement filter_pt
    }

    find_child(the_child){ //TODO: check correctness
        // returns index of the_child or null if no children match
        // const indx = null;
        // for (const i in Range(this._child_list.length)){
        //     if (this._child_list[i] == the_child){
        //         indx = i;
        //     }
        // }
        return this._child_list.indexOf(the_child);
    }

    first_callback_num(){
        //TODO: implement first_callback_num
    }

    fixed_children(){
        //TODO: implement fixed_children
    }

    flag_is_set(mask_value){
        //TODO: implement flag_is_set
    }

    flag_string(){
        return String(this._flags);
    }

    focus_set_enter(cause_evt, of_agent, user_info){
        //TODO: implement focus_set_enter
    }

    focus_set_exit(cause_evt, of_agent, user_info){
        //TODO: implement focus_set_exit
    }

    get_awt_component(){
        //implement get_awt_component
        //may need to be redesigned for javascript
    }

    get_external_constraint(for_part){
        //TODO: implement get_external_constraint
    }

    get_part(what_code){
        //TODO: implement get_part
    }

    get_top_level(){
        //TODO: implement get_top_level
    }

    get_value(part_number){
        //TODO: implement get_value
    }

    global_to_local(xv, yv){
        //TODO: check correctness
        return(this.x_into_local(xv), this.y_into_local(yv));
    }

    global_to_local(global_pt){
        //TODO: implement global_to_local
    }

    h_constraint(){
        return this._h_constraint;
    }

    h(){
        return this._h;
    }

    handle_cycle(part_code){
        //TODO: implement hangle_cycle
    }

    inform_ood(from_type, from_part, nth_child){
        //TODO: implement inform_ood
    }

    insert_child(at_index, chld){
        this._child_list.splice(at_index, 0, chld); //TODO: confirm correctness
    }

    inside_bounds(pt_x, pt_y){
        return pt_x < this._x_constraint && pt_y < this._y_constraint; //TODO: confirm correctness
    }

    into_local(xv, yv){
        //TODO: check correctness
        return(this.x_into_local(xv), this.y_into_local(yv));
    }

    into_local(parent_pt){
        //TODO: implement into_local
    }

    into_parent(xv, yv){
        //TODO: check correctness
        return(this.x_into_parent(xv), this.y_into_parent(yv));
    }

    into_parent(local_pt){
        //TODO: implement into_parent
    }

    intrinsic_constraints(){
        //TODO: implement intrinsic_constraints
    }

    is_constrained(coord_code){
        //TODO: implement is_constrained
    }

    last_callback_num(){
        //TODO: implement last_callback_num
    }

    local_to_global(xv, yv){
        //TODO: implement local_to_global
    }

    local_to_global(local_pt){
        //TODO: implement local_to_global
    }

    mark_all_ood(){
        //TODO: implement mark_all_ood
    }

    mark_enabled_ood(){
        //TODO: implement mark_enabled_ood
    }

    mark_h_ood(){
        //TODO: implement mark_h_ood
    }

    mark_ood(coord_code){
        //TODO: implement mark_ood
    }

    mark_part_a_ood(){
        //TODO: implement mark_part_a_ood
    }

    mark_part_b_ood(){
        //TODO: implement mark_part_b_ood
    }

    mark_reparented_ood(){
        //TODO: implement mark_reparented_ood
    }

    mark_visible_ood(){
        //TODO: implement mark_visible_ood
    }

    mark_w_ood(){
        //TODO: implement mark_w_ood
    }

    mark_x_ood(){
        //TODO: implement mark_x_ood
    }

    mark_y_ood(){
        //TODO: implement mark_y_ood
    }

    marked_ood(){
        //TODO: implement marked_ood
    }

    move_child_downward(child_indx){
        //TODO: implement move_child_downward
    }

    move_child_downward(the_child){
        //TODO: implement move_child_downward
    }

    move_child_to_bottom(child_indx){
        //TODO: implement move_child_to_bottom
    }

    move_child_to_bottom(the_child){
        //TODO: implement move_child_to_bottom
    }

    move_child_to_top(child_indx){
        //TODO: implement move_child_to_top
    }

    move_child_to_top(the_child){
        //TODO: implement move_child_to_top
    }

    move_child_upward(child_indx){
        //TODO: implement move_child_upward
    }

    move_child_upward(the_child){
        //TODO: implement move_child_upward
    }

    move_downward(){
        //TODO implement move_downward
    }

    move_to_bottom(){
        //TODO: implement move_to_bottom
    }

    move_to_top(){
        //TODO: implement move_to_top
    }

    move_upward(){
        //TODO: implement move_upward
    }

    _new_look_configure(){
        //TODO: implement _new_look_configure
    }

    next_sibling(){
        //TODO: implement next_sibling
    }

    num_actions(){
        //TODO: implement num_actions
    }

    num_children(){
        return this._child_list.length; //TODO: confirm correctness
    }

    num_feature_points(){
        //check if feature points and actions are inhereted from the parent class
        //TODO: implement num_feature_points 
    }

    _ood_inform_all(which_part){
        //TODO: implement _ood_inform_all
    }

    parent(){
        return this._parent;
    }

    part_a_constraint(){
        return this._part_a_constraint;
    }

    part_a(){
        //return this._part_a; //TODO: find _part_a in inheretance heirarchy
    }

    part_b_contraint(){
        return this._part_b_constraint;
    }

    part_b(){
        //return this._part_b; //TODO: find _part_b in inheretance heirarchy
    }

    _pick_within_children(pt_x, pt_y, pick_list){
        //TODO: implement _pick_within_children
    }

    pick(pt_x, pt_y, pick_list){
        //TODO: implement pick
    }

    picked_by(pt_x, pt_y){
        //TODO: implement picked_by
    }

    pos(){
        return (this._x,this._y); //TODO: confirm syntax of returning a point
    }

    prev_sibling(){
        //TODO: implement prev_sibling
    }

    static register_resource_names(){
        //TODO: implement register_resource_names
    }

    remove_child(at_index){
        this._child_list.splice(at_index,1);
    }

    remove_child(the_child){ //TODO: discover if these similarly named methods can overwrite each other (javascript is not explicitly typed)
        indx = this._child_list.indexOf(the_child);
        this.remove_child(indx);
    }

    remove_user_datum(datum){
        //TODO: implement remove_user_datum
    }

    _restyle_look_resources(new_style){
        //TODO: implement _restyle_look_resources
    }

    restyle(new_style){
        //TODO: implement restyle
    }

    set_callback_obj(callbk){
        //TODO: implement set_callback_obj
        //callback objects might also be inhereted from another class?
    }

    set_child_index(indx){
        this._child_index = indx;
    }

    set_child(at_index, chld){
        this._child_list.splice(at_index,0,chld); //TODO: check correctness
    }

    _set_constraint_flag_bit(mask_value){
        //TODO: implement _set_constraint_flag_bit
    }

    _set_constraint_flag_bit(mask_value, v){
        //TODO: implement _set_constraint_flag_bit
    }

    set_constraint(coord_code, a_constraint){
        //TODO: implement set_constraint
    }

    set_constraint(code, ext_obj, ext_part){
        //TODO: implement set_constraint
    }

    set_enabled_constraint(a_constraint){
        //TODO: implement set_enabled_constraint
    }

    set_enabled_constraint(ext_cnstr){
        //TODO: implement set_enabled_constraint
    }

    set_enabled_constraint(ext_obj, ext_part){
        //TODO: implement set_enabled_constraint
    }

    set_enabled(v){
        //TODO: implement set_enabled
    }

    _set_flag_bit(mask_value){
        //TODO: implement _set_flag_bit
    }

    _set_flag_bit(mask_value, v){
        //TODO: implement _set_flag_bit
    }

    set_h_constraint(a_constraint){
        //TODO: implement set_h_constraint
    }

    set_h_constraint(ext_cnstr){
        //TODO: implement set_h_constraint
    }

    set_h_constraint(ext_obj, ext_part){
        //TODO: implement set_h_constraint
    }

    set_h(v){
        this._h = v;
    }

    _set_intrinsic_h(hv){
        //TODO: implement _set_intrinsic_h
    }

    _set_intrinsic_size(wv, hv){
        this._set_intrinsic_h(hv);
        this._set_intrinsic_w(wv);
    }

    _set_intrinsic_w(wv){
        //TODO: implement _set_intrinsic_w
    }

    set_parent(par){
        this._parent = par;
    }

    set_part_a_constraint(a_constraint){
        //TODO: implement set_part_a_constraint
    }

    set_part_a_constraint(ext_cnstr){
        //TODO: implement set_part_a_constraint
    }

    set_part_a_constraint(ext_obj, ext_part){
        //TODO: implement set_part_a_constraint
    }

    set_part_a(v){
        //TODO: implement set_part_a
    }

    set_part_b_constraint(a_constraint){
        //TODO: implement set_part_b_constraint
    }

    set_part_b_constraint(ext_cnstr){
        //TODO: implement set_part_b_constraint
    }

    set_part_b_constraint(ext_obj, ext_part){
        //TODO: implement set_part_b_constraint
    }

    set_part_b(v){
        //TODO: implement set_part_b
    }

    set_pos(xv, yv){ 
        /***TODO: confirm we don't need to do any transformations within this function
         * my guess is that xv and yv are transformed when the method is called, not inside the method */
        this.set_x(xv)
        this.set_y(yv)
    }

    set_pos(p){
        //TODO: implement set_pos
    }

    _set_raw_enabled(v){
        //TODO: implement _set_raw_enabled
    }

    _set_raw_h(v){
        //TODO: implement _set_raw_h
    }

    _set_raw_part_a(v){
        //TODO: implement _set_raw_part_a
    }

    _set_raw_part_b(v){
        //TODO: implement _set_raw_part_b
    }

    _set_raw_visible(v){
        //TODO: implement _set_raw_visible
    }

    _set_raw_w(v){
        //TODO: implement _set_raw_w
    }

    _set_raw_x(v){
        //TODO: implement _set_raw_x
    }

    _set_raw_y(v){
        //TODO: implement _set_raw_y
    }

    set_size(wv, hv){
        this.set_h(hv);
        this.set_w(wv);
    }

    set_style_lock(lock_v){
        //TODO: implement set_style_lock
    }

    set_user_info(user_inf){
        //TODO: implement set_user_info
        //are user_info and user_data different?
    }

    set_visible_constraint(a_constraint){
        //TODO: implement set_visible_constraint
    }

    set_visible_constraint(ext_cnstr){
        //TODO: implement set_visible_constraint
    }

    set_visible_constraint(ext_obj, ext_part){
        //TODO: implement set_visible_constraint
    }

    set_visible(v){
        //TODO: implement set_visible
    }

    set_w_constraint(a_constraint){
        //TODO: implement set_w_constraint
    }

    set_w_constraint(ext_cnstr){
        //TODO: implement set_w_constraint
    }

    set_w_constraint(ext_obj, ext_part){
        //TODO: implement set_w_constraint
    }

    set_w(v){
        this._w = v;
    }

    set_x_constraint(a_constraint){
        //TODO: implement set_x_constraint
    }

    set_x_constraint(ext_cnstr){
        //TODO: implement set_x_constraint
    }

    set_x_constraint(ext_obj, ext_part){
        //TODO: implement set_x_constraint
    }

    set_x(v){
        this._x = v;
    }

    set_y_constraint(a_constraint){
        //TODO: implement set_y_constraint
    }

    set_y_constraint(ext_cnstr){
        //TODO: implement set_y_constraint
    }

    set_y_constraint(ext_obj, ext_part){
        //TODO: implement set_y_constraint
    }

    set_y(v){
        this._y = v;
    }

    _setup_for_children(){
        //TODO: implement _setup_for_children
    }

    _setup_for_children(size_hint){
        //TODO: implement _setup_for_children
    }

    _setup_for_fixed_children(number){
        //TODO: implement _setup_for_children
    }

    size(){
        //TODO: implement size
    }

    style_change_local(){
        //TODO: implement style_change_local
    }

    style_change(){
        //TODO: implement style_change
    }

    supports_children(){
        //TODO: implement supports_children
    }

    tag_str(){
        //TODO: implement tag_str
    }

    toString(){
        //TODO: implement toString
    }

    traverse_and_collect_children(traversal_kind, traversal_orger, l_to_r, inclusion_test, continue_test, xform_parent_to_child, parameters, collection_result){
        //TODO: implement traverse_and_collect_children
    }

    _traverse_and_collect_parent(traversal_kind, inclusion_test, parameters, collection_result){
        //TODO: impleemnt _traverse_and_collect_parent
    }

    traverse_and_collect(traversal_kind, traversal_order, inclusion_test, continue_test, xform_parent_to_child, parameters, collection_result){
        //TODO: implement traverse_and_collect
    }

    trivial_reject(d){
        //TODO: implement trivial_reject
    }
    
    trivial_reject(d, bounding_box){
        //TODO: implement trivial_reject
    }

    user_data(){
        return this._user_data;
    }

    user_info(){
        //TODO: implement user_info
    }

    value_ood(for_part_here, prov_obj, prov_part){
        //TODO: implement value_ood
    }

    visible_constraint(){
        return this._visible_constraint;
    }

    visible(){
        //TODO: implement visible
    }

    w_constraint(){
        return this._w_constraint;
    }

    w(){
        return this._w;
    }

    x_constraint(){
        return this._x_constraint;
    }

    x_into_local(xv){
        //TODO: implement x_into_local
    }

    x_into_parent(xv){
        //TODO: implement x_into_parent
    }

    x(){
        return this._x;
    }

    y_constraint(){
        return this._y_constraint;
    }

    y_into_local(xv){
        //TODO: implement y_into_local
    }

    y_into_parent(xv){
        //TODO: implement y_into_parent
    }

    y(){
        return this._y;
    }

}