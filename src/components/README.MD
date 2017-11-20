The components that we've implemented here are the ones that needed to customized in order to prevent further coding and customization.
**Note**: If there's a component that you feel is really abscent from this list and must be added, please make an issue with the name of the component.
## List of Componenets
- [Button](#button)
- [Input](#input)
- [Checkbox](#checkbox)
- [Checkbox Group](checkbox-group)
- [Radio and Radio Groups](#radio-and-radio-groups)
- [Searchable Select](#select)
- [Button Input Group](#button-input-group)
- [Progress Bar](#progress-bar)

## Usage
In this section we describe how to use each of these components in your react application.
Before using each component, be sure to import like this:
```javascript
import MyComponent from 'violet-ui'
```

### Button
This is a simple button component and is built as instructed in the cheatsheet. 
It accepets any prop that a simple button gets, including:

```javascript
props: {
  active: {
      type: bool,
      default: true
  },
  block: {
      type: bool,
      default: false
  },
  color: {
      type: string,
      default: 'primary'
  },
  disabled: {
      type: bool,
      default: false
  },
  outline: {
      type: bool,
      default: false
  },
  onClick: {
      type: func,
  },
  size: { // xs - sm - md - lg
      type: string,
      defualt: "md"
  },
  className: {
      type: string
  },
}
```
There are 4 different flavours of this button, here's how to use them in action: 
```html
<div className="row">
            <div className="col mt-1">
              <Button className="w-100" color="primary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" color="primary" outline>
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button className="w-100" onClick={this.testMe} color="secondary">
                کلیک کنید
              </Button>
            </div>
            <div className="col mt-1">
              <Button
                className="w-100"
                onClick={this.testMe}
                disabled
                color="secondary"
                outline
              >
                کلیک کنید
              </Button>
            </div>
          </div>
```

### Input
The input component can do many things,but first of all, it can be treated a simple HTML ``<input/>`` tag; meaning you can do something like this: 
```html
<label>Insert your number</label>
<Input id="test" type="text" />
```
and it'll behave as s simple input. It has some interesting abilities too!
#### Bootstrap Sizing
you can specify one of the sizes ``sm, md, lg`` and pass it to ``bsSize`` prop, determining the size of your component in bootstrap standards. 
```html
<label>Insert your number</label>
<Input id="test" type="text" bsSize="lg" />
```
The main advantage of this approach is that later, you can simply customize bootstrap sizes in ``_variables.scss`` and apply your changes everywhere.
#### Validation
This component accepts a ``valid`` prop. This prop is simply a boolean and if set, changes the style of the component accordingly. 
**Note**: This component doesn't and shouldn't implement any inner validation of its own, so you need to couple this valid prop with a JS function; something like this: 
```javascript
    validator = input => {
        if (input.indexOf('hi') !== -1) return true;
        else if (input.indexOf('bye') !== -1) return null;
        else return false;
    };

    ...

    <Input
                id="testMe"
                className="w-100"
                onChange={e => this.setState({ input1_text: e.target.value })}
                valid={this.validator(this.state.input1_text)}
                placeholder="رمز عبور"
                type="password"
    />
```
**Note**: Our policy of validation is well described by this example, since there's no value binders in React, we mus t use a combination on events like ``onChange`` and props like ``valid``.

#### Types
There are different types of inputs for this component:
- **Text**: This is the simple text input, nothing fancy. It supports validation.You can also provide an icon to be shown in the right handside of the input, the icon class is specified via ``iconClass`` prop and if it's not specified, you'll have a simple text input.
- **Password**: Simple password input, it has a built in lock icon in the right hand side, though it can be changed via ``iconClass`` prop. Supports Validation.
- **Username**: set ``type="username"`` to have a simple input with user icon on the right handside, icon can be changed via ``iconClass`` prop. Supports validation.
- **Qty**: If you set the input type to number, it turns into a QTY with custom style and everything.
**TODO**: Add validation for qty.
- **Select, Radio and Checkbox**: These types are well supported by this component **BUT** it's advised that you use dedicated components for [Checkbox](#checkbox), [Select](#select) and [Radio](#radio-and-radio-groups).


### Checkbox
Checkbox components must be used instead of ``<input type="checkbox">``. Here are a list of features they support.
#### Validation
It supports validation through ``valid`` prop and is the same as other input validations.
#### Sizing and Direction
provide ``size`` prop with one of the standard sizes in bootstrap. You can also change the direction of it using ``direction = "right"`` or ``direction = "left"``. Default direction is right.
#### Labeling and Values
If you want to add a label to your checkbox, simply provide it in ``label`` prop; The label will then be placed according to your direction prop.
Each checkbox has an isChecked prop that is self explanatory, yet it has a ``value`` prop as well, this prop is usefull for controlling many checkboxes i order to get which one is right now selected. Refer to the next section for more.

### Checkbox Groups
In order to use a set of checkboxes together, we'll be using checkbox groups. You can pass an array of ``options`` to the Checkbox Group component and it will generate the checkboxes itself. in order to use it, you'll be doing something like: 
```javascript
checkBoxOptions: [
      {
        value: 'سلام',
        isChecked: false
      },
      {
        value: 'بای',
        isChecked: false
      },
      {
        value: 'های',
        isChecked: true
      }
]

...
    <CheckboxGroup
        direction="right"
        options={this.state.checkBoxOptions}
        onChange={e => this.setState({ selected: e })}
        >
    </CheckboxGroup>

```
The ``options`` prop, receives and array that each member of has these properties:
```javascript
{value: '', isChecked: true /*or false*/ }
``
if you felt you don't like to use the prop, you can always pass some Checkbox components to the CheckboxGroup component like this:
```javascript
<CheckboxGroup
    direction="right"
    onChange={e => this.setState({ selected: e })}
    >
        <CheckBox label="خدافظ" value="اینا" />
        <CheckBox label="خدافظ" value="اینا" />
</CheckboxGroup>
```
#### Direction and Stack
You can use ``stacked`` props and set it to true so that each checkbox occupies one whole line of your parent container. 
You can also use ``direction`` prop and set it to "left" or "right" to change the direction and alignment of the component.
#### Value 
`value` prop is an array here. Whenever you access this prop, you can get the values of all selected checkboxes. 
Whenever the status of checkboxes inside the CheckboxGroup is changed, it fires ``onChange`` event that you can handle using the ``onChange`` prop. Refer to ``layouts/App.js`` to see more examples of this component.

### Radio and Radio Groups
These are quite exactly the same as [Checkbox](#checkbox) and [Checkbox Groups](#checkbox-groups). 
The key difference is that logically you can't use a Radiobox by itself, it must always be in a group of RadioBoxes. 
Here's how it's used:
```javascript
<RadioGroup
    direction="right"
    options={this.state.checkBoxOptions}
    onChange={e => this.setState({ selected: e })}
/>
```
Where the ``options`` array is the same before. 
**NOTE**: The value of a Radio Group though, isn't an array. It's just the value of selected Radio box.

### Select
We have two types of selects, single and multiple. 
In order to use a simple single select, do something like this:
```javascript
 options = () => {
    let options = [
      { value: '4', label: 'سلام' },
      { value: '5', label: 'خدافظ' },
      { value: '6', label: 'رستوران یک' },
      { value: '7', label: 'آپشن دو' }
    ];
    return options;
  };

  ...

<AdvancedSelect
    options={this.options()}
    onChange={value => this.setState({ val: value })}
    className="w-50 ml-1 mt-2 text-right"
    multiple={true}
    value={this.state.val}
    placeholder="متن جستجو را وارد کنید"
    searchable={true}
/>
```
The selects we have implemented here can be searchable, just mess with the ``searchable`` prop to switch it on and off.
Each ``AdvancedSelect`` component receiveds an ``options`` prop which provides us with the options needed. This options can be provided by an online source like a ``promise`` or ``async ... await`` block.
**TODO**: We must provide a loading screen for those kinds of online list loading. 
**NOTE**: The example above demonstrates a simple act of variable binding in react,you can use other useful libraries like ``react-fire`` for this kind of binding and event handling.
Use ``multiple`` prop to true to use a multi select, if you do this, the value prop will represent and array of selected options.

### Button Input Group
In order to have an input coupled with a button on its left or right side, we'll use ``InputGroup`` component. 
It supports validation via ``valid`` prop.
It supports direction change via ``direction`` prop (set to left or right).
It fires two types of events, ``onChange`` and ``onInput``. The ``onChange`` event is fired whenever the input is changed, but, the ``onInput`` event is fired whenever user presses the button. 
Use ``iconClass`` prop to customize the icon that is shown in the button.
You can set an ``invalidMessage`` prop to whatever you want so that when the component's state isn't valid (``valid === false``), a popover with the message text is displayed on the component.
Use it like this: 
```javascript
<InputGroup valid={true} 
            value = "something"
            invalidMessage = "something"
            iconClass = "fa fa-trash"
            direction = "left"/>
```
