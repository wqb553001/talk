import Vue from 'vue'
import {Card, Form, FormItem, Main, Table,
  TableColumn, Input, Button, Tag, Container,
  Header, Aside, Menu, Submenu, MenuItemGroup,
  MenuItem, Dropdown, DropdownMenu, DropdownItem,
  RadioGroup, Radio, Checkbox, CheckboxGroup, Switch,
  TimePicker, DatePicker, Option, Select, Col,
  CheckboxButton,
  Message} from 'element-ui'

Vue.prototype.$message=Message

Vue.use(CheckboxButton)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Switch)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
